import CourseCard from "../components/CourseCard";
import Divider from "../components/Divider";
import Image from "next/image";
import HacerLoPoster from "@/public/images/hacer-lo-simple/poster-hacerlo-simple.jpg"
import BibliPoster from "@/public/images/biblioteca-interior/poster_bibli_interior.jpeg"

export default function CursosPage() {
    return (
        <main className="flex px-8 py-10 md:p-20 flex-col gap-8">
            <div>
                <h1 className="font-bold text-[48px] text-center md:text-start font-serif">Cursos</h1>
                <h3 className="uppercase text-center md:text-start">Archivo y próximos encuentros</h3>
            </div>

            <Divider text="Próximamente"/>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                <CourseCard 
                    title="La Biblioteca Interior" 
                    status="Octubre '26" 
                    description="Un curso de Introducción a la Meditación" 
                    image={
                    <Image 
                        src={BibliPoster} 
                        alt="La Biblioteca Interior"  
                        fill
                        className="object-cover object-[50%_10%] md:object-[50%_23%]" 
                    />} 
                    link="/cursos/la-biblioteca-interior"
                />
            </div>

            <div>
                <Divider text="Archivo"/>
                <p className="ml-4 mt-4 text-[14px] text-[#3f1518]/70">Pulsa un card para ver más detalles</p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                <CourseCard 
                    title="Hacer-lo Simple" 
                    status="Abril '26" 
                    description="Un curso de Introducción al Yoga" 
                    image={
                    <Image 
                        src={HacerLoPoster} 
                        alt="Hacer-lo Simple"  
                        fill
                        className="object-cover object-[50%_18%]" 
                    />} 
                    link="/cursos/hacer-lo-simple"
                />
            </div>

        </main>
    )
}