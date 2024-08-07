import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Carousel() {
    const images = {
        1: {
            url: 'https://images.unsplash.com/photo-1475368860182-6326b41b7bfc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: "Basic Weekly Lawn Maintenance - Mow/Edge/Blow",
        },
        2: {
            url: 'https://images.unsplash.com/photo-1719830925875-27a83f99f219?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: "Basic Weekly Hedge and Lower Tree Trimming",
        },
        3: {
            url: 'https://plus.unsplash.com/premium_photo-1664123873330-06c137c40a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhd258ZW58MHx8MHx8fDA%3D',
            name: "Brown Patch Revival - Just like the best Golf Courses use!",
        },
    }

    const [currentImage, setCurrentImage] = useState(1);

    const handleClick = (e) => {
        if (e.target.id === "1") {
            setCurrentImage(1);
        } else if (e.target.id === "2") {
            setCurrentImage(2);
        } else {
            setCurrentImage(3);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="box-border py-4">Services</h2>
            <div className="w-full h-9 flex justify-around items-center">
                <div className={`w-full h-full flex justify-center border-2 border-green-700 border-b-0 rounded-t-lg items-center cursor-pointer ${currentImage === 1 ? "bg-white text-green-700" : "bg-green-700 text-white"}`} id="1" onClick={handleClick}>1</div>
                <div className={`w-full h-full flex justify-center items-center border-2 border-green-700 border-b-0 rounded-t-lg cursor-pointer ${currentImage === 2 ? "bg-white text-green-700" : "bg-green-700 text-white"}`} id="2" onClick={handleClick}>2</div>
                <div className={`w-full h-full items-center flex justify-center border-2 border-green-700 border-b-0 rounded-t-lg cursor-pointer ${currentImage === 3 ? "bg-white text-green-700" : "bg-green-700 text-white"}`} id="3" onClick={handleClick}>3</div>
            </div>
            <div className="relative box-border border-2 border-green-700 border-t-0 p-4 w-full">
                <img className="rounded-3xl h-72 w-full" src={images[currentImage].url} alt={images[currentImage].name} />
                <h3 className="absolute w-72 bottom-10 left-6 text-white">{images[currentImage].name}</h3>
            </div>
        </div>
    )
}
