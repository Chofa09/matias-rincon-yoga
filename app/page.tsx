import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full p-[40px]">
      <div className="flex flex-1 flex-col items-center justify-center bg-[url('/home_page.jpg')] bg-cover bg-center bg-no-repeat">
        <Image src="/logo_mati.png" alt="Matias Rincon Yoga Logo" width={80} height={80} />
        <h1 className="font-aboreto text-center text-[64px] text-[#E3E0E0] uppercase w-[30%]">
          Matias Rincon Yoga
        </h1>
      </div>
    </div>
  );
}
