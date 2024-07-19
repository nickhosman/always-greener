function Nav() {
    return (
        <nav className="flex w-full gap-10 items-center bg-green-700 text-white">
            <div className="flex flex-col">
                <span>Always Greener</span>
                <span>Lawn Care</span>
            </div>
            <ul className="flex gap-10 font-bold">
                <li>
                    <span className="cursor-pointer">Home</span>
                </li>
                <li>
                    <span className="cursor-pointer">Services</span>
                </li>
                <li>
                    <span className="cursor-pointer">Contact</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
