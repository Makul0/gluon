import Typing from "../../styles/typing";

export const Hero = () => {
    return (
        <div className="flex flex-col justify-centre h">
            
            <div className="text-5xl md:text-7xl">
                Gluon
            </div>
            <div className="font-serif text-3xl md:text-5xl mt-4 md:mt-8 max-w-full md:max-w-96 h-40 overflow-hidden">
                <Typing />
            </div>
        </div>
    );
}