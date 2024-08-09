import { useState } from "react";

export default function Compare ({ img1, img2 }) {
    const [opacity, setOpacity] = useState(0);

    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="relative">
                <img className="absolute top-0 z-10 rounded-md" style={{ opacity: `${opacity < 10 ? `.0${opacity}` : opacity < 100 ? `.${opacity}` : 1}`}} src={img1} alt="" />
                <img className="rounded-md" src={img2} alt="" />
            </div>
            <input
                type="range"
                min={0}
                max={100}
                value={opacity}
                onChange={(e) => setOpacity(e.target.value)} />
            <h2 className="font-bold text-xl text-center">Move the slider to see the transformation!</h2>
        </div>
    );
};
