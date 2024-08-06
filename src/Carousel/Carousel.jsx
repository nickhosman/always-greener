import { useState } from "react";

export default function Carousel() {
    const images = {
        1: {
            url: 'https://images.unsplash.com/photo-1710580889851-b85789acd18c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhd258ZW58MHx8MHx8fDA%3D',
            name: "Basic Weekly Lawn Maintenance - Mow/Edge/Blow",
        },
        2: {
            url: 'https://plus.unsplash.com/premium_photo-1664123873330-06c137c40a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhd258ZW58MHx8MHx8fDA%3D',
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
        <div className="flex relative">
            <div className="cursor-pointer" onClick={handleLeft}><p>left</p></div>
            <h3>{images[currentImage].name}</h3>
            <img className="object-cover absolute -z-10" src={images[currentImage].url} alt="" />
            <div className="cursor-pointer" onClick={handleRight}><p>right</p></div>
        </div>
    )
}
