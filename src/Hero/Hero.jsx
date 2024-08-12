function Hero() {
    const handleClick = () => {
        window.scrollTo(0,document.body.scrollHeight)
    };

    return (
        <div className="relative grid sm:grid-cols-2 xl:grid-cols-[1fr_1fr_0.5fr] text-white md:h-[32rem] w-full justify-center">
            <div className="flex items-center justify-center xl:justify-end md:h-[32rem] relative">
                <img className="h-4/5 object-contain box-border max-height-96" src="https://i.ibb.co/mG4cb77/Always-Greener-Neon-cmall.png" alt="" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:w-full md:py-20 gap-4 relative box-border p-4">
                <div className="flex flex-col gap-4 items-start p-4">
                    <h2 className="text-3xl md:text-4xl w-full font-bold">Professional Lawn Care Services</h2>
                    <div className="flex flex-col gap-1 ">
                        <p>Exclusively using Greenworks Battery Powered Mowers/Edgers/Trimmers and Blowers.</p>
                        <p>The quiet and <span className="text-lime-200">clean</span> way to make your yard beautiful!</p>
                    </div>
                    <div className="bg-green-700 text-white p-4 rounded-lg font-bold cursor-pointer w-40 self-center flex items-center justify-center select-none" onClick={handleClick}>GET IN TOUCH</div>
                </div>
            </div>
            <img className="absolute -z-10 object-cover w-full h-full md:bottom-0 brightness-50" src="https://images.unsplash.com/photo-1710580889851-b85789acd18c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhd258ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
    )
}

export default Hero;
