
import ParticlesComponent from "@/components/client/Animation/ParticlesComponent";

const Fun = () => {
    return (
        <div className="
                relative
                bg-black
                h-screen w-screen
        ">
            <div
                className="absolute top-0 left-0 w-[10vw] h-[20vw] bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-30 md:opacity-60 2xl:opacity-25 blur-3xl hover:bg-transparent"></div>


            <div>
                <h1>Hi, I am June, let us explore my artistic mean</h1>
                <div className="absolute top-0 h-full w-full"><ParticlesComponent />
                </div>

            </div>


        </div >
    )
}

export default Fun;