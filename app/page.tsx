import Image from "next/image";
import aboutMeImage from "@/public/about_me.jpg";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen w-full px-2 pt-2 md:p-10">
        <div className="flex flex-1 flex-col items-center justify-center bg-[url('/home_page.jpg')] bg-cover bg-center bg-no-repeat">
          <Image src="/logo_mati.png" alt="Matias Rincon Yoga Logo" width={80} height={80} />
          <h1 className="font-aboreto text-center text-[64px] text-[#E3E0E0] uppercase md:w-[30%]">
            Matias Rincon Yoga
          </h1>
        </div>
      </div>

      <div id='about-me' className="flex flex-col pl-10 pb-10 w-[90%]">
        <h2 className="font-aboreto text-center md:text-end text-[42px] my-10">Sobre mí</h2>
        <div className="w-full flex flex-col md:flex-row gap-10">
          <Image
            src={aboutMeImage}
            alt="About Me"
            className="order-last h-auto w-full shrink-0 md:order-first md:basis-1/3"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="w-full md:basis-1/3 text-[16px]/8 flex flex-col gap-4">
            <p>Nací en <strong>Argentina</strong> una mañana de Diciembre del '89, ya de pequeño tenía una debilidad por el sonido y las preguntas: de dónde venimos, quiénes somos y qué hacemos acá... ante la duda, todo.</p>
            <p>El sonido se fue transformando en <strong>música</strong> y las preguntas se fueron respondiendo a través de la religión, <strong>la filosofia académica</strong> y finalmente <strong>el Yoga</strong>, donde también encontré convergencias en la música clásica de India.</p>
            <p className="text-[16px]">Así, a través de diversas formaciones y maestros, retiros y viajes a la <strong>India</strong> fui realizando <strong>mi propia sintesis</strong> que me lleva a estar hoy en <strong>España</strong>, continuando mis estudios sobre Hinduismo y el Advaita-Vedanta bajo la guia amorosa de <strong>Swami Satyananda Saraswati</strong>.</p>
          </div>    

          <div className="w-full md:basis-1/3 text-[16px]/8 flex flex-col gap-4">
            <p className="text-[16px]">El sonido se fue transformando en música y las preguntas se fueron respondiendo a través de la religión, la filosofia académica y finalmente el Yoga, donde también encontré convergencias en la música clásica de India. <strong>Hace más de 10 años</strong> que comparto la enseñanza, y si bien esto no dice mucho, da cuenta de que el viaje es largo y para toda la vida.</p>
            <p className="text-[14px]">PD: mi sonrisa es para <strong>Emilia</strong>, quien correteaba del otro lado de la foto y a quien dedico cada paso.</p>
          </div>
        </div>

      </div>

    </div>
  );
}
