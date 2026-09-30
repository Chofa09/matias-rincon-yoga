"use client";

import Link from "next/link";
import Image from "next/image";

export default function CourseDetailPage () {

    return (
        <main className="flex px-8 py-10 md:p-20 flex-col gap-8">
            <Link href="/cursos" className="w-full text-[14px] md:text-[16px] uppercase text-end font-semibold text-[#3f1518]/50 transition-all duration-300 hover:-translate-y-1 hover:text-[#3f1518]">Volver a Cursos</Link>
            <div className="w-full flex flex-col gap-1 md:justify-between items-center">
                <h3 className="uppercase text-center mb-4 text-[#3f1518]/50 md:flex md:gap-2">
                    <p>sábado 3 octubre 26 - 10h - </p>
                    <a
                        href="https://www.google.com/maps/place/Biblioteca+Sant+Antoni+-+Joan+Oliver/@41.3773093,2.1627025,107m/data=!3m1!1e3!4m6!3m5!1s0x12a4a260e7c3c4ed:0xb233f1105c77bb53!8m2!3d41.3774098!4d2.1628409!16s%2Fg%2F11c3tjj6y9?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#3f1518]"
                    >
                        Biblioteca Sant Antoni - Joan Oliver
                    </a>
                </h3>
                <h1 className="font-bold text-[36px] md:text-[48px] text-center">La Bilioteca Interior</h1>
                <h3 className="text-center underline">Un curso de Introducción a la Meditación</h3>
            </div>

            <div className="text-center flex flex-col gap-4 md:w-[60%] mx-auto">
                <p>Este ciclo consta de 4 encuentros cuyo objetivo es por un lado, intervenir el espacio público de forma anónima e imperseptible, reconfigurando la idea de biblioteca aun habitándola bajo las mismas premisas tales como el silencio, la concentración y el conocimiento (en este caso orientado al Si-mismo)</p>
                <p>Por otro lado, la meditación como práctica, en este caso la invitación es acercarse con auriculares y mediante el móvil acceder a un enlace a través del cual escucharemos una meditación guiada, compartiendo en silencio, al mismo tiempo y en el mismo lugar.  Al finalizar cada quien dispondrá de su estado para quedarse o irse procurando el mínimo intercambio verbal focalizando solo en la escucha.</p>
                <p>Cada encuentro está presente como una invitación desprejuiciada a la experiencia plena.</p>
                <p>Para más información sobre el curso y cómo participar, escribe a <Link className="underline" href={"mailto:yogaestudiolp@gmail.com"}>yogaestudiolp@gmail.com</Link></p>
            </div>

            <Link href="/cursos" className="w-full text-[14px] md:text-[16px] uppercase text-center font-semibold text-[#3f1518]/50 transition-all duration-300 hover:-translate-y-1 hover:text-[#3f1518]">Volver a Cursos</Link>
        </main>
    )
}