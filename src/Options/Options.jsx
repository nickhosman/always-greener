import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";

function Options() {
    const [ isLargeScreen, setIsLargeScreen ] = useState(window.innerWidth > 1024);

    useEffect(() => {
        window.innerWidth > 1024 ? setIsLargeScreen(true) : setIsLargeScreen(false);
    }, [isLargeScreen]);

    return (
        <div className="bg-green-700">
            {!isLargeScreen ?
                <Carousel images={images} />
                :
                <div className="flex flex-col items-center">
                    <h2 className="text-white text-4xl font-bold p-4">Options</h2>
                    <div className="w-full h-9 flex justify-around items-center">
                        <div className="w-full h-full flex justify-center border-4 border-green-700 border-b-0 rounded-t-lg items-center cursor-pointer bg-green-700 text-white">1</div>
                        <div className="w-full h-full flex justify-center items-center border-4 border-green-700 border-b-0 rounded-t-lg cursor-pointer bg-white text-green-700">2</div>
                        <div className="w-full h-full items-center flex justify-center border-4 border-green-700 border-b-0 rounded-t-lg cursor-pointer bg-white text-green-700">3</div>
                    </div>
                    <div className="box-border border-4 border-green-700 border-t-0 p-4 w-full">
                        <div className="relative min-w-1/3 text-lg flex flex-col items-center">
                            <img className="rounded-3xl h-72 w-full object-cover brightness-75" src={images[1].url} alt="" />
                            <h3 className="absolute min-w-72 bottom-10 box-border p-4 text-white">{images[1].name}</h3>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Options;
