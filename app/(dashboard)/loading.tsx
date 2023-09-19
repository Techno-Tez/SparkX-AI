import Image from "next/image";

const Loading = () => {
    return ( 
        <div className="h-screen flex flex-col items-center justify-center gap-y-4">
            <div className="w-10 h-10 relative animate-spin">
                <Image 
                alt="logo"
                src="/logo.png"
                fill
                />
            </div>
            <p className="text-sm text-muted-foreground">SparkX on the Way...</p>
        </div>
     );
}
 
export default Loading;