import { useState } from "react";
import Compare from "./Compare"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Featured () {
    const imageSet = {
        1: {
            img1: "https://i.ibb.co/Gtr68R1/1-green-spot.jpg",
            img2: "https://i.ibb.co/Lv0Kp3Q/1-brown-spot.jpg"
        },
        2: {
            img1: "https://i.ibb.co/HKFFQnB/7-green-spots.jpg",
            img2: "https://i.ibb.co/19fTNdx/7-brown-spots.jpg"
        },
        3: {
            img1: "https://i.ibb.co/yh9JWbq/Green-Patch.jpg",
            img2: "https://i.ibb.co/StdNF4B/brown-patch.jpg"
        },
    };

    const [ count, setCount ] = useState(1);

    const handleLeft = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            setCount(3);
        }
    };

    const handleRight = () => {
        if (count < 3) {
            setCount(count + 1);
        } else {
            setCount(1);
        }
    };

    return (
        <div className="box-border p-4 bg-green-700 text-white">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-center">Brown Spot Renewal</h2>
                <p className="text-center lg:text-lg">We use the same products that the best golf courses use to keep their greens looking perfect!</p>
            </div>
            <div className="grid sm:grid-cols-2 justify-between items-center box-border p-4 gap-8 md:flex-row px-10">
                <div className="flex flex-col gap-4 items-center h-full w-full">
                    <img className="rounded-md drop-shadow-md h-full object-cover" src="https://m.media-amazon.com/images/I/61MQy1pH1OL._AC_.jpg" alt="endurant premium grass paint" />
                </div>
                <div className="flex flex-col gap-4 border-box h-full w-full">
                    <div className="flex relative flex-grow-0">
                        <FaArrowCircleLeft className="absolute text-4xl lg:text-6xl cursor-pointer left-4 top-1/3 z-20" onClick={handleLeft} />
                        <Compare img1={imageSet[count].img1} img2={imageSet[count].img2} />
                        <FaArrowCircleRight className="absolute text-4xl lg:text-6xl cursor-pointer right-4 top-1/3 z-20" onClick={handleRight} />
                    </div>
                </div>
            </div>
        </div>
    )
};
