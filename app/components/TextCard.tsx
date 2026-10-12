import Image from "next/image";

interface TextCardProps {
  paragraphs: readonly string[];
  source: string;
}

export default function TextCard({ paragraphs, source }: TextCardProps) {
  return (
    <article className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-sm bg-[#F8F6F6] p-6 shadow-[0_8px_24px_rgba(63,21,24,0.12)] md:gap-12 md:p-12">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-x-0 border-t border-[#3f1518]/50" />
        <span className="relative bg-[#F8F6F6] px-2">
          <Image
            src="/logo_mati.png"
            alt=""
            width={40}
            height={40}
            className="size-10"
          />
        </span>
      </div>

      <blockquote className="relative px-7 py-2">
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 font-serif text-3xl leading-none text-[#3f1518]/60"
        >
          “
        </span>
        <div className="flex flex-col gap-6 text-justify text-base/8 md:text-lg/9">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 font-serif text-3xl leading-none text-[#3f1518]/60"
        >
          ”
        </span>
      </blockquote>
      <p className="text-right text-sm italic text-[#3f1518]/60">
        {source}
      </p>
    </article>
  );
}