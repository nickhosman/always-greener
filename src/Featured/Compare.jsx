export default function Compare ({ img1, img2, opacity }) {

    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="relative">
                <img className="absolute top-0 z-10 rounded-md" style={{ opacity: `${opacity < 10 ? `.0${opacity}` : opacity < 100 ? `.${opacity}` : 1}`}} src={img1} alt="" />
                <img className="rounded-md" src={img2} alt="" />
            </div>
        </div>
    );
};
