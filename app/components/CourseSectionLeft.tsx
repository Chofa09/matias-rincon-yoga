import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface CourseDetailSectionProps {
    posterImg: StaticImageData;
    img1: ReactNode;
    img2: ReactNode;
    img3: ReactNode;
    itemNumber: number;
    title: string;
    children: ReactNode;
}

export default function CourseDetailSectionLeft ({posterImg, img1, img2, img3, itemNumber, title, children}: CourseDetailSectionProps) {
    return (
        <div className="mt-8 w-full flex flex-col gap-6">
                {/* Header */}
                <div className="h-full items-center md:items-end border-b border-[#3f1518]/40 flex gap-6 py-4">
                    <Image alt="" src={posterImg} width={80} />
                    <div className="flex flex-col text-end md:text-start">
                        <p className="uppercase text-[#3f1518]/50 text-[12px] leading-1">Módulo {itemNumber}</p>
                        <h2 className="text-[32px] font-serif">{title}</h2>
                    </div>
                </div>

                <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-4 md:ml-10 md:h-[400px]">
                    <div className="flex flex-col gap-4 w-full md:w-2/5 md:h-full">
                        <div className="relative w-full h-[200px] md:h-auto md:flex-1">
                            {img1}
                        </div>
                        <div className="relative w-full h-[200px] md:h-auto md:flex-1">
                            {img2}
                        </div>
                    </div>
                    <div className="relative w-full md:w-3/5 h-[400px] md:h-full">
                        {img3}
                    </div>
                </div>

                <div className="w-full md:w-[60%] md:ml-10">
                    {children}
                </div>
            </div>
    )
}