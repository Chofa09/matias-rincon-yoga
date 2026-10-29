import Image from "next/image";
import Link from "next/link";
import BibliPoster from "@/public/images/biblioteca-interior/poster_bibli_interior.jpeg";

export default function CourseDetailPage() {
    return (
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-8 sm:px-8 md:gap-16 md:px-12 md:py-12 lg:px-20">
            <Link
                href="/cursos"
                className="w-fit text-sm font-semibold uppercase tracking-wide text-[#3f1518]/60 transition-colors hover:text-[#3f1518]"
            >
                Volver a Cursos
            </Link>

            <section className="grid overflow-hidden rounded-3xl border border-[#3f1518]/10 bg-[#F5F2EA] shadow-sm md:grid-cols-[1fr_0.78fr]">
                <div className="flex flex-col justify-center p-7 sm:p-10 md:p-12 lg:p-16">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f1518]/55">
                        Ciclo de meditación
                    </p>
                    <h1 className="font-aboreto text-4xl leading-tight sm:text-5xl">
                        La Biblioteca Interior
                    </h1>
                    <p className="mt-4 text-lg text-[#3f1518]/75">
                        Un curso de Introducción a la Meditación
                    </p>

                    <div className="my-8 border-t border-[#3f1518]/15" />

                    <dl className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3f1518]/50">
                                Cuándo
                            </dt>
                            <dd className="mt-1 font-semibold">Todos los sábados, 10 h</dd>
                        </div>
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3f1518]/50">
                                Dónde
                            </dt>
                            <dd className="mt-1">
                                <a
                                    href="https://www.google.com/maps/place/Biblioteca+Sant+Antoni+-+Joan+Oliver/@41.3773093,2.1627025,107m/data=!3m1!1e3!4m6!3m5!1s0x12a4a260e7c3c4ed:0xb233f1105c77bb53!8m2!3d41.3774098!4d2.1628409!16s%2Fg%2F11c3tjj6y9?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold underline decoration-[#3f1518]/35 underline-offset-4 hover:decoration-[#3f1518]"
                                >
                                    Biblioteca Sant Antoni - Joan Oliver
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3f1518]/50">
                                Participación
                            </dt>
                            <dd className="mt-1 font-semibold">Encuentro libre y gratuito</dd>
                        </div>
                    </dl>

                    <Link
                        href="mailto:matiasrinconyoga@gmail.com"
                        className="mt-8 w-fit rounded-full bg-[#3f1518] px-6 py-3 text-sm font-semibold text-[#F5F2EA] transition-colors hover:bg-[#572126]"
                    >
                        Consulta cómo participar
                    </Link>
                </div>

                <div className="relative min-h-[290px] overflow-hidden bg-[#eee8d8] md:min-h-[420px]">
                    <Image
                        src={BibliPoster}
                        alt="Cartel del ciclo de meditación La Biblioteca Interior"
                        fill
                        sizes="(max-width: 767px) 100vw, 40vw"
                        className="origin-top scale-[1.3] object-contain"
                    />
                </div>
            </section>

            <section className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3f1518]/50">
                        La experiencia
                    </p>
                    <h2 className="mt-3 font-aboreto text-2xl leading-snug sm:text-3xl">
                        Un espacio de silencio para entrenar la atención y la concentración
                    </h2>
                </div>
                <div className="flex flex-col gap-5 text-base leading-7 text-[#3f1518]/85">
                    <p>
                        Este ciclo tiene como objetivo intervenir el espacio público de forma
                        anónima e imperceptible, reconfigurando la idea de biblioteca,
                        habitándola aun bajo las mismas premisas tales como el silencio, la
                        concentración y el conocimiento (en este caso orientado al Si-mismo).
                    </p>
                    <p>
                        Por otro lado, la meditación como práctica: en este caso la invitación
                        es acercarse con auriculares y mediante el móvil acceder a uno de los
                        enlaces a través del cual podrás escuchar una meditación guiada
                        (30min) o bien una de las inmersiones (5min) que funcionan como
                        introducción, compartiendo en silencio, al mismo tiempo y en el mismo
                        lugar.
                    </p>
                    <p>
                        Al finalizar cada quien dispondrá de su propio registro y estado para
                        quedarse el tiempo que necesite. Para quien guste nos encontraremos
                        en los Jardines internos para compartir un momento y conocernos.
                    </p>
                    <p>
                        Cada encuentro está presente como una invitación desprejuiciada a la
                        experiencia plena. Para más información sobre el curso y cómo
                        participar, escribe a{" "}
                        <Link
                            className="font-semibold underline underline-offset-4"
                            href="mailto:matiasrinconyoga@gmail.com"
                        >
                            matiasrinconyoga@gmail.com
                        </Link>
                    </p>
                </div>
            </section>

            <section className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3f1518]/50">
                        Inmersiones
                    </p>
                    <h2 className="mt-3 font-aboreto text-2xl leading-snug sm:text-3xl">
                        Cinco minutos de relajación
                    </h2>
                </div>
                <p className="text-base leading-7 text-[#3f1518]/85">
                    Estas inmersiones están concebidas desde una necesidad muy concreta:
                    reconocer el estado de la mente y el espacio presente que habitamos de
                    la forma más directa posible, evitando cualquier excusa o distracción,
                    solo 5 minutos de relajación y entrega que a su vez buscan ser una
                    invitación a mantenerse en ese silencio todo el tiempo que uno desee y
                    quiera.
                </p>
            </section>

            <section className="mx-auto w-full max-w-5xl rounded-3xl bg-[#3f1518] p-6 text-[#F5F2EA] sm:p-9 md:p-10">
                <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F2EA]/60">
                        Escucha aquí
                    </p>
                    <h2 className="mt-2 font-aboreto text-2xl sm:text-3xl">
                        Audios para acompañar la práctica
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <a
                        href="https://drive.google.com/file/d/1w1uA1kW4JYnnC7WnhNJ1vnXpcMnRyAWa/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-[#F5F2EA]/20 bg-[#F5F2EA]/[0.06] p-5 transition-colors hover:bg-[#F5F2EA]/[0.12]"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F5F2EA]/60">
                            Meditación
                        </span>
                        <span className="mt-2 block text-lg font-semibold underline decoration-[#F5F2EA]/40 underline-offset-4">
                            Meditación 01 - La Biblioteca Interior
                        </span>
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1oJfxziyXmikZ2osT6N61wDOtZ7hSZA9F/view?ts=6ad61951"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-[#F5F2EA]/20 bg-[#F5F2EA]/[0.06] p-5 transition-colors hover:bg-[#F5F2EA]/[0.12]"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F5F2EA]/60">
                            Inmersión
                        </span>
                        <span className="mt-2 block text-lg font-semibold underline decoration-[#F5F2EA]/40 underline-offset-4">
                            Inmersiones - 01. Presencia
                        </span>
                    </a>
                </div>
            </section>

            <Link
                href="/cursos"
                className="mx-auto w-fit text-sm font-semibold uppercase tracking-wide text-[#3f1518]/60 transition-colors hover:text-[#3f1518]"
            >
                Volver a Cursos
            </Link>
        </main>
    );
}
