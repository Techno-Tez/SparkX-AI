"use client"

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect"
import { Button } from "./ui/button";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Testimonials from "./Testimonials";
import Image from "next/image";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const LandingHero = () => {
    const isSignedIn = useAuth()
    return (
        <div className="text-white font-bold pt-10 text-center ">
            <div className="flex items-center justify-center">
                <Image
                alt="HeroIcon"
                height={100}
                width={100}
                src="/pro.png"
                className="py-5"
                />
            </div>
            <div className={cn("text-3xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold", font.className)}>
                <h1>
                    The Best AI Tool for
                </h1>
                <div className={cn("text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600", font.className)}>
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Chatbox.",
                                "Photo Generation.",
                                "Music Generation.",
                                "Code Generation.",
                                "Video Generation."
                            ],
                            autoStart: true,
                            loop:true
                        }} />
                </div>
                <div className={cn("text-sm md:text-xl font-light text-zinc-400 flex flex-col gap-1", font.className)}>
                    <h3>!!! Create Content 10x Faster than before !!!</h3>
                    <h3 >Switch to <span className="font-bold text-pink-500">SparkX AI</span></h3>
                </div>
                <div>
                    <Link href={isSignedIn ? "/dashboard" : "/sign-up"} className="">
                        <Button variant="premium" className={cn("md:text-lg p-4 md:p-6 rounded-full font-semibold   ", font.className)}>
                            Start Generating For Free
                        </Button>
                    </Link>
                </div>
                <div className={cn("font-normal text-xs md:text-sm text-zinc-400", font.className)}>
                        No credit card required
                </div>
            </div>
            <Testimonials />
        </div>
    );
}

export default LandingHero;