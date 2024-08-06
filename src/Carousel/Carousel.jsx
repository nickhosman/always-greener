import { useState } from "react";
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

    const handleRight = () => {
        if (currentImage === 3) {
            setCurrentImage(1);
        } else {
            setCurrentImage(currentImage + 1);
        }
    }

    const handleLeft = () => {
        if (currentImage === 1) {
            setCurrentImage(3);
        } else {
            setCurrentImage(currentImage - 1);
        }
    }

    return (
        <div className="box-border p-4 flex flex-col items-center gap-4">
            <h2 className="font-bold text-2xl box-border pt-4">Services</h2>
            <div className="relative flex justify-center h-72 box-border ">
                {currentImage === 3 ? <div className="rounded-full absolute right-4 -top-3 bg-yellow-600 h-20 w-20 flex items-center justify-center"> <span className="text-white -rotate-45 font-bold">Featured!</span></div> : null}
                <div className="absolute flex justify-between w-10/12 h-full bg-transparent items-center text-white box-border p-4">
                    <div className="cursor-pointer relative z-10 " onClick={handleLeft}><FaArrowCircleLeft size={32}/></div>
                    <h3 className="absolute z-10 bottom-0 box-border p-4">{images[currentImage].name}</h3>
                    <div className="cursor-pointer relative right-0 z-10" onClick={handleRight}><FaArrowCircleRight size={32}/></div>
                </div>
                <img className="object-cover w-10/12 rounded-2xl" src={images[currentImage].url} alt="" />
            </div>
        </div>
    )
}
