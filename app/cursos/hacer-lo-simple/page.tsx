"use client";

import Link from "next/link";
import Image from "next/image";
import Mod1Poster from "@/public/images/hacer-lo-simple/poster-mod1.jpg";
import Mod1Pic1 from "@/public/images/hacer-lo-simple/mod1-matiyoga-16.jpg";
import Mod1Pic2 from "@/public/images/hacer-lo-simple/mod1-matiyoga-17.jpg";
import Mod1Pic3 from "@/public/images/hacer-lo-simple/mod1-matiyoga-6.jpg";
import Mod2Poster from "@/public/images/hacer-lo-simple/poster-mod2.jpg";
import Mod2Pic1 from "@/public/images/hacer-lo-simple/mod2-matiyoga-4.jpg";
import Mod2Pic2 from "@/public/images/hacer-lo-simple/mod2-matiyoga-27.jpg";
import Mod2Pic3 from "@/public/images/hacer-lo-simple/mod2-matiyoga-13.jpg";
import Mod3Poster from "@/public/images/hacer-lo-simple/poster-mod3.jpg";
import Mod3Pic1 from "@/public/images/hacer-lo-simple/mod3-matiyoga-19.jpg";
import Mod3Pic2 from "@/public/images/hacer-lo-simple/mod3-matiyoga-31.jpg";
import Mod3Pic3 from "@/public/images/hacer-lo-simple/mod3-matiyoga-30.jpg";

export default function CourseDetailPage () {

    return (
        <main className="flex px-8 py-10 md:p-20 flex-col gap-8">
            <Link href="/cursos" className="w-full text-[14px] md:text-[16px] uppercase text-end font-semibold text-[#3f1518]/50 transition-all duration-300 hover:-translate-y-1 hover:text-[#3f1518]">Volver a Cursos</Link>
            <div className="w-full flex flex-col gap-1 md:justify-between items-center">
                <h3 className="uppercase text-center mb-4 text-[#3f1518]/50">Abril 26 - Barcelona</h3>
                <h1 className="font-bold text-[36px] md:text-[48px] text-center">Hacer-lo Simple</h1>
                <h3 className="text-center">Un curso de Introducción al Yoga</h3>
            </div>

            <div className="mt-8 w-full flex flex-col gap-6">
                {/* Header */}
                <div className="h-full items-center md:items-end border-b border-[#3f1518]/40 flex gap-6 py-4">
                    <Image alt="" src={Mod1Poster} width={80} />
                    <div className="flex flex-col text-end md:text-start">
                        <p className="uppercase text-[#3f1518]/50 text-[12px] leading-1">Módulo 1</p>
                        <h2 className="text-[32px] font-serif">La escucha atenta y la mirada interior</h2>
                    </div>
                </div>

                <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-4 md:ml-10 md:h-[400px]">
                    <div className="flex flex-col gap-4 w-full md:w-2/5 md:h-full">
                        <div className="relative w-full h-[200px] md:h-auto md:flex-1">
                            <Image alt="" src={Mod1Pic1} fill className="object-cover" />
                        </div>
                        <div className="relative w-full h-[200px] md:h-auto md:flex-1">
                            <Image alt="" src={Mod1Pic2} fill className="object-cover" />
                        </div>
                    </div>
                    <div className="relative w-full md:w-3/5 h-[400px] md:h-full">
                        <Image alt="" src={Mod1Pic3} fill className="object-cover" />
                    </div>
                </div>

                <div className="w-full md:w-[60%] md:ml-10">
                    <p>A través del movimiento y la respiración iremos observando y tomando parte en múltiples formas de habitar el cuerpo, con la intención de lo sencillo, creando un tiempo y espacio de calma y presencia.</p>
                    <p>Tadāsana - Trikonasana - Virabhadrāsana</p>
                </div>
            </div>

            <div className="mt-8 w-full flex flex-col gap-6 items-end">
                {/* Header */}
                <div className="w-full h-full justify-end items-center md:items-end border-b border-[#3f1518]/40 flex gap-6 py-4">
                    <div className="flex flex-col">
                        <p className="uppercase text-[#3f1518]/50 text-[12px] leading-1">Módulo 2</p>
                        <h2 className="text-[32px] font-serif">Cuerpo disponible y respiración consciente</h2>
                    </div>
                    <Image alt="" src={Mod2Poster} width={80}/>
                </div>
                
                <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-4 md:ml-10 md:h-[400px]">
                    <div className="flex flex-col gap-4 w-full md:w-2/5 md:h-full">
                        <div className="relative w-full h-[200px] md:h-auto md:flex-1">
                            <Image alt="" src={Mod2Pic1} fill className="object-cover" />
                        </div>
                        <div className="relative w-full h-[200px] md:h-auto md:flex-1">
                            <Image alt="" src={Mod2Pic2} fill className="object-cover" />
                        </div>
                    </div>
                    <div className="relative w-full md:w-3/5 h-[400px] md:h-full">
                        <Image alt="" src={Mod2Pic3} fill className="object-cover object-[center_60%]" />
                    </div>
                </div>

                <div className="w-full md:w-[60%] md:mr-10 md:text-end">
                    <p>Recrear el espacio que descubrimos afinando la sensación de lo sutil en los pulsos naturales del cuerpo.</p>
                    <p>Vamos a hablar sobre Prāna y Apāna u hacer taller sobre estas posturas.</p>
                    <p>Parivrtta Prasarita Padottanasana - Adho Mukha Svanasana - Chaturanga Dandasana</p>
                </div>
            </div>

            <div className="mt-8 w-full flex flex-col gap-6">
                {/* Header */}
                <div className="h-full items-center md:items-end border-b border-[#3f1518]/40 flex gap-6 py-4">
                    <Image alt="" src={Mod3Poster} width={80}/>
                    <div className="flex flex-col text-end md:text-start">
                        <p className="uppercase text-[#3f1518]/50 text-[12px] leading-1">Módulo 3</p>
                        <h2 className="text-[32px] font-serif">La práctica, el Yoga</h2>
                    </div>
                </div>

                <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-4 md:ml-10 md:h-[400px]">
                    <div className="flex flex-col gap-4 w-full md:w-2/5 md:h-full">
                        <div className="relative w-full h-[200px] md:h-auto md:flex-1">
                            <Image alt="" src={Mod3Pic1} fill className="object-cover object-[center_70%]" />
                        </div>
                        <div className="relative w-full h-[200px] md:h-auto md:flex-1">
                            <Image alt="" src={Mod3Pic2} fill className="object-cover" />
                        </div>
                    </div>
                    <div className="relative w-full md:w-3/5 h-[400px] md:h-full">
                        <Image alt="" src={Mod3Pic3} fill className="object-cover object-[center_55%]" />
                    </div>
                </div>

                <div className="w-full md:w-[60%] md:ml-10">
                    <p>Veremos el significado, significante y simbología de una secuencia que nos permitirá conocer las escuelas clásicas del Yoga así como los estilos modernos. Variantes, contrapuntos e imbricaciones que buscan una misma esencia.</p>
                    <p>Yoga moderno</p>
                </div>
            </div>

            <Link href="/cursos" className="w-full text-[14px] md:text-[16px] uppercase text-center font-semibold text-[#3f1518]/50 transition-all duration-300 hover:-translate-y-1 hover:text-[#3f1518]">Volver a Cursos</Link>
        </main>
    )
}