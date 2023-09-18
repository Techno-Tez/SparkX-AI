import Footer from "@/components/Footer"
import LandingHero from "@/components/LandingHero"
import LandingNavbar from "@/components/LandingNavbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const page = () => {
    return (
    <div className="h-full">
        <LandingNavbar />
        <LandingHero />
        <Footer />
    </div>        
  )
}

export default page