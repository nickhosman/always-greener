import { useState } from "react";
import Compare from "./Compare"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


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

    const [opacity, setOpacity] = useState(0);

    return (
        <div className="box-border p-4 bg-green-700 text-white">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-4xl font-bold text-center">Brown Spot Renewal</h2>
                <p className="text-center lg:text-lg">Dealing with brown spots in your lawn? No need to worry!</p>
                <p className="text-center lg:text-lg">One application of Endurant Premium Grass Paint will make your lawn look perfect again!</p>
            </div>
            <div className="grid sm:grid-cols-2 justify-between items-center box-border p-4 gap-8 md:flex-row px-10">
                <div className="flex flex-col gap-4 items-center h-full w-full">
                    <img className="rounded-md drop-shadow-md h-full object-cover" src="https://m.media-amazon.com/images/I/61MQy1pH1OL._AC_.jpg" alt="endurant premium grass paint" />
                    <p className="text-center lg:text-lg">Used by the best PGA Golf courses to keep their greens in tournament perfect condition.</p>
                </div>
                <div className="flex flex-col gap-4 border-box h-full w-full">
                    <p className="text-center lg:text-lg">Ready to walk on in less than an hour! A fast low-cost solution to a more beautiful lawn!</p>
                    <Carousel infiniteLoop={true}>
                        {Object.values(imageSet).map((image, index) => (
                            <Compare img1={image.img1} img2={image.img2} opacity={opacity} key={index} />
                        ))}
                    </Carousel>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={opacity}
                        onChange={(e) => setOpacity(e.target.value)}
                    />
                    <h2 className="font-bold text-xl text-center">Move the slider to see the transformation!</h2>
                </div>
            </div>
        </div>
    )
};
