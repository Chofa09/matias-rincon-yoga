import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CourseCardProps {
    title: string;
    status: string;
    description: string;
    imageSrc: string | StaticImageData;
    link: string;
}

export default function CourseCard({ title, status, description, imageSrc, link }: CourseCardProps) {
    return (
        <Link href={link} className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#3f1518]/15 bg-[#F5F5F5] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#3f1518]/10">
            {/* Content Section */}
            <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-2">
                    <div className="flex w-full justify-between items-center">
                        <h1 className="font-bold text-[22px] text-start">{title}</h1>
                        <p className="uppercase text-[#3f1518]/50 text-[14px]">{status}</p>
                    </div>
                    <p>{description}</p>
                </div>
            </div>

            {/* Aspect ratio container prevents image distortion */}
            <div className="relative h-80 w-full overflow-hidden bg-gray-200">
                <Image 
                    src={imageSrc} 
                    alt={title} 
                    fill
                    className="object-cover object-[50%_18%]" 
                />
            </div>

        </Link>
    );
}