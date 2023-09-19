import { cn } from "@/lib/utils";
import pfp from "@/public/pfp.jpg"

import { Montserrat } from "next/font/google";
import Image from "next/image";
const font = Montserrat({
    weight: "300",
    subsets: ["latin"]
})

const Testimonials = () => {
    return (
        <section className=" text-white/60 body-font px-1 md:px-8 py-24">
            <h1 className={cn("text-2xl md:text-3xl lg:text-4xl my-8", font.className)}>Testimonials</h1>
            <div className="container  mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 -m-4 gap-3">
                    <div className=" lg:mb-0 p-8 bg-gray-300/10 rounded-lg">
                        <div className={cn("h-full text-center text-sm md:text-lg", font.className)}>
                            <Image height={80} width={80} alt="testimonial" className=" mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/pfp4.jpg" />
                            <p className="leading-relaxed  font-thin">SparkX AI is a game-changer for creative professionals. I use it to generate ideas, create prototypes, and even produce finished products. It's saved me countless hours and helped me to create some of my best work. I can't imagine working without SparkX AI now.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-pink-500 font-medium title-font tracking-wider text-sm">KATHANK RAITHATHA</h2>
                            <p className="text-pink-500">Android Developer</p>
                        </div>
                    </div>
                    <div className=" lg:mb-0 p-8 bg-gray-300/10 rounded-lg">
                        <div className={cn("h-full text-center text-sm font-light md:text-lg", font.className)}>
                            <Image height={80} width={80} alt="testimonial" className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/pfp.png" />
                            <p className="leading-relaxed">SparkX AI is an amazing AI-based application that has helped me in so many ways. I use it for everything from generating chat conversations to creating music and videos. It's so easy to use and the results are always impressive. I highly recommend SparkX AI to anyone who wants to use AI to improve their work or life.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-pink-500 font-medium title-font tracking-wider text-sm">HARIS ALI KHAN</h2>
                            <p className="text-pink-500">Digital Creator</p>
                        </div>
                    </div>
                    <div className=" lg:mb-0 p-8 bg-gray-300/10 rounded-lg">
                        <div className={cn("h-full text-center text-sm font-light md:text-lg", font.className)}>
                            <Image height={80} width={80} alt="testimonial" className=" mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/pfp5.jpg" />
                            <p className="leading-relaxed">I'm a software engineer, and I use SparkX AI to generate code prototypes and test new ideas. It's saved me so much time and effort, and it's helped me to produce higher-quality code. I highly recommend SparkX AI to any software engineer who wants to be more productive and efficient.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-pink-500 font-medium title-font tracking-wider text-sm">KRISH SONI</h2>
                            <p className="text-pink-500">Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;