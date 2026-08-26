import CourseCard from "../components/CourseCard";
import Divider from "../components/Divider";
import HacerLoPoster from "@/public/images/hacer-lo-simple/poster-hacerlo-simple.jpg"

export default function CursosPage() {
    return (
        <main className="flex px-8 py-10 md:p-20 flex-col gap-8">
            <div>
                <h1 className="font-bold text-[48px] text-center md:text-start font-serif">Cursos</h1>
                <h3 className="uppercase text-center md:text-start">Archivo y próximos encuentros</h3>
            </div>

            <Divider text="Próximamente"/>
            <div>
                <Divider text="Archivo"/>
                <p className="ml-4 mt-4 text-[14px] text-[#3f1518]/70">Pulsa un card para ver más detalles</p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                <CourseCard title="Hacer-lo Simple" status="Abril '26" description="Un curso de Introducción al Yoga" imageSrc={HacerLoPoster} link="/cursos/hacer-lo-simple"/>
            </div>

        </main>
    )
}