function Hero() {
    return (
        <div className="text-white flex h-fit">
            <div className="flex flex-col gap-4 relative box-border p-4">
                <h2 className="text-4xl w-80 font-bold">Professional Lawn Care Services</h2>
                <p>Exclusively using Greenworks Battery Powered Mowers/Edgers/Trimmers and Blowers.</p>
                <p>The quiet and clean way to make your yard beautiful!</p>
                <button className="bg-green-700 text-white p-4 rounded-lg font-bold cursor-pointer w-40 self-center">GET IN TOUCH</button>
            </div>
            <img className="absolute -z-10 object-cover" src="https://images.unsplash.com/photo-1710580889851-b85789acd18c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhd258ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
    )
}

export default Hero;
