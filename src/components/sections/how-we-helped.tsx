'use client';

import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider
} from "@/components/ui/image-comparison";

const examples = [
    {
        title: "Sump Pump System Upgrade",
        description: "We replaced the failed, corroded sump pump with a high-performance unit to guarantee reliable protection against basement flooding. The upgrade included installing new schedule 40 PVC discharge piping and a heavy-duty check valve to ensure efficient water removal and prevent backflow.",
        before_image: "https://i.ibb.co/FqkLCh7R/3010cce3-903c-499d-bced-581fc56a4969.jpg",
        after_image: "https://i.ibb.co/cX11HjFg/aaa0e202-9a5b-4ee8-921d-9018eda3e9cc.png",
        layout: "text-left"
    },
    {
        title: "Outdoor Faucet Replacement",
        description: "We replaced the corroded, leaking outdoor spigot with a premium frost-free sillcock to prevent pipe bursts during freezing temperatures. The installation included a complete weather-tight seal against the brick exterior to ensure durability and eliminate water waste.",
        before_image: "https://i.ibb.co/Vc5gXzJv/4598958c-ccb8-4a0f-a0d8-e2422a7e7de0.jpg",
        after_image: "https://i.ibb.co/JwnHFv18/f48c71b0-cf66-4d1a-8346-394c2397fe50.png",
        layout: "text-right"
    },
    {
        title: "Internal Pipe Repair & Replacement",
        description: "We accessed the damaged wall section to remove the cracked, failing cast iron pipe and replaced it with durable, code-compliant PVC piping. The repair features secure, professional couplings and proper sealing to permanently eliminate the leak and prevent future water damage.",
        before_image: "https://i.ibb.co/pjMs4G6X/7cdac66c-4a0d-4255-88d2-a59d6a204d2f.jpg",
        after_image: "https://i.ibb.co/4R07jXvw/c133fc33-88ee-46a8-a5cc-a1aa2e481cc5.png",
        layout: "text-left"
    },
];

const CaseStudy = ({ title, description, before_image, after_image, layout }: (typeof examples)[0]) => {
    const textContent = (
        <div className="flex flex-col justify-center text-white">
            <h3 className="text-3xl lg:text-4xl font-headline mb-4">{title}</h3>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">{description}</p>
        </div>
    );

    const imageContent = (
        <ImageComparison className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl" enableHover>
          <ImageComparisonImage
            src={before_image}
            alt="Before the repair"
            position="left"
          />
          <ImageComparisonImage
            src={after_image}
            alt="After the repair"
            position="right"
          />
          <ImageComparisonSlider className="w-0.5 bg-white/50 backdrop-blur-sm">
            <div className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 backdrop-blur-sm border-2 border-white/75 grid place-items-center">
                <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>
          </ImageComparisonSlider>
        </ImageComparison>
    );

    return (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center py-12">
            {layout === 'text-left' ? (
                <>
                    {textContent}
                    {imageContent}
                </>
            ) : (
                <>
                    {imageContent}
                    {textContent}
                </>
            )}
        </div>
    )
}


export default function HowWeHelped() {
    return (
        <section id="how-we-helped">
            <div className="container">
                <div className="text-left mb-12">
                    <h2 className="text-5xl lg:text-[5rem] font-headline leading-[1.1] text-white">
                        How We Helped Our Clients
                    </h2>
                </div>
                <div className="flex flex-col divide-y divide-border/20">
                    {examples.map((ex, index) => <CaseStudy key={index} {...ex} />)}
                </div>
            </div>
        </section>
    )
}
