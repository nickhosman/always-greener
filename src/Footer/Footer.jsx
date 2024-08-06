export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="bg-black w-full flex items-center justify-center text-sm relative bottom-0 pt-10">
            <span className="text-white">© {year} Always Greener Lawn Care -- All Rights Reserved</span>
        </div>
    )
};
