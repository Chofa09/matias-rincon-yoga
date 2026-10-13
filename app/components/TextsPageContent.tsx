"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { TouchEvent as ReactTouchEvent } from "react";
import TextCard from "./TextCard";

const textCards = [
  {
    paragraphs: [
      "...No hay distracción realmente, porque la meditación no es concentración; esta última excluye, interrumpe, resiste y, por lo tanto, implica conflicto. Una mente meditativa puede concentrarse, lo que entonces no es una exclusión, una resistencia; pero una mente concentrada no puede meditar. Es curioso lo altamente importante que se vuelve la meditación; para ella no hay un fin ni hay un comienzo. Es como una gota de lluvia; en esa gota están todos los arroyos, los grandes ríos, los mares y las cascadas; esa gota alimenta a la tierra y al hombre; sin ella la tierra sería un desierto. Sin la meditación, el corazón se vuelve un desierto, una tierra desolada. La meditación tiene su propio movimiento; uno no puede dirigirla, moldearla o formarla; si lo hace, ello deja de ser meditación. Este movimiento cesa si uno es meramente un observador, si uno es el experimentador. La meditación es el movimiento que destruye al observador, al experimentador; es un movimiento que está más allá de todo símbolo, pensamiento y sentimiento. Su rapidez no puede medirse.",
    ],
    source: "7 de Septiembre de 1961 - \"Diario\" Krishnamurti",
  },
//   {
//     paragraphs: [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, neque non consequat dapibus, augue nisl dictum sapien, vitae porttitor risus lacus et erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//       "Donec euismod, velit nec blandit tincidunt, mauris lorem tempor augue, vitae interdum libero dolor in justo. Maecenas eu consequat ligula. Duis sed turpis id justo cursus malesuada quis at lorem. Nam feugiat, sapien vel facilisis bibendum, lorem leo gravida eros.",
//       "Aliquam erat volutpat. Suspendisse potenti. Phasellus tristique, lectus quis vestibulum luctus, sapien lectus facilisis nulla, sed ullamcorper mauris nibh vel nisl. Morbi semper lacus vitae massa interdum, sit amet faucibus quam porta.",
//     ],
//     source: "Por definir",
//   },
//   {
//     paragraphs: [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat, sapien vel facilisis bibendum, lorem leo gravida eros, ac consequat libero mi sed justo. Aliquam erat volutpat. Suspendisse potenti.",
//       "Phasellus tristique, lectus quis vestibulum luctus, sapien lectus facilisis nulla, sed ullamcorper mauris nibh vel nisl. Morbi semper lacus vitae massa interdum, sit amet faucibus quam porta. Donec ac sapien vel arcu dignissim consequat.",
//       "Integer at massa sed neque malesuada tincidunt. Curabitur sed justo ut augue tincidunt pellentesque. Proin ullamcorper, nibh sit amet convallis feugiat, erat nibh consequat mauris, vel cursus nisl neque eget neque.",
//     ],
//     source: "Por definir",
//   },
];

const ROTATION_INTERVAL = 25_000;
const TRANSITION_DURATION = 450;

export default function TextsPageContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [transition, setTransition] = useState<{
    from: number;
    to: number;
    direction: -1 | 1;
  } | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const changeSlide = useCallback((direction: -1 | 1) => {
    if (transition) {
      return;
    }

    setTransition({
      from: activeIndex,
      to: (activeIndex + direction + textCards.length) % textCards.length,
      direction,
    });
  }, [activeIndex, transition]);

  useEffect(() => {
    if (!isPlaying || transition) {
      return;
    }

    const intervalId = window.setInterval(() => {
      changeSlide(1);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [changeSlide, isPlaying, transition]);

  useEffect(() => {
    if (!transition) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveIndex(transition.to);
      setTransition(null);
    }, TRANSITION_DURATION);

    return () => window.clearTimeout(timeoutId);
  }, [transition]);

  const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    const touch = event.touches.item(0);
    if (touch) {
      touchStart.current = { x: touch.clientX, y: touch.clientY };
    }
  };

  const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    const touch = event.changedTouches.item(0);
    touchStart.current = null;

    if (!start || !touch) {
      return;
    }

    const horizontalDistance = touch.clientX - start.x;
    const verticalDistance = touch.clientY - start.y;

    if (
      Math.abs(horizontalDistance) >= 50 &&
      Math.abs(horizontalDistance) > Math.abs(verticalDistance)
    ) {
      changeSlide(horizontalDistance < 0 ? 1 : -1);
    }
  };

  return (
    <section
      aria-label="Carrusel de textos"
      aria-roledescription="carrusel"
      className="mx-auto w-full max-w-5xl flex flex-col items-center gap-8"
    >
      <div
        className="grid touch-pan-y overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
      >
        {transition ? (
          <>
            <div
              aria-hidden="true"
              inert
              className={`col-start-1 row-start-1 ${
                transition.direction === 1
                  ? "text-card-exit-left"
                  : "text-card-exit-right"
              }`}
            >
              <TextCard
                paragraphs={textCards[transition.from].paragraphs}
                source={textCards[transition.from].source}
              />
            </div>
            <div
              aria-live="polite"
              aria-roledescription="diapositiva"
              className={`col-start-1 row-start-1 ${
                transition.direction === 1
                  ? "text-card-enter-right"
                  : "text-card-enter-left"
              }`}
            >
              <TextCard
                paragraphs={textCards[transition.to].paragraphs}
                source={textCards[transition.to].source}
              />
            </div>
          </>
        ) : (
          <div
            aria-live="polite"
            aria-roledescription="diapositiva"
            className="col-start-1 row-start-1"
          >
            <TextCard
              paragraphs={textCards[activeIndex].paragraphs}
              source={textCards[activeIndex].source}
            />
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <button
          type="button"
          aria-label="Texto anterior"
          className="flex size-10 items-center justify-center rounded border border-[#3f1518]/50 transition hover:bg-[#3f1518]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f1518] disabled:opacity-50"
          disabled={transition !== null}
          onClick={() => changeSlide(-1)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <p aria-live="polite">
          {activeIndex + 1} / {textCards.length}
        </p>
        <button
          type="button"
          aria-label="Texto siguiente"
          className="flex size-10 items-center justify-center rounded border border-[#3f1518]/50 transition hover:bg-[#3f1518]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f1518] disabled:opacity-50"
          disabled={transition !== null}
          onClick={() => changeSlide(1)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
        {/* <button
          type="button"
          aria-label={isPlaying ? "Pausar cambio automático" : "Reanudar cambio automático"}
          className="rounded px-3 py-2 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f1518]"
          onClick={() => setIsPlaying((playing) => !playing)}
        >
          {isPlaying ? "Pausar" : "Reanudar"}
        </button> */}
      </div>
    </section>
  );
}
