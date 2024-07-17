import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="flex w-full gap-4 items-center bg-green-700 text-white">
            <div className="flex flex-col">
                <span>Always Greener</span>
                <span>Lawn Care</span>
            </div>
            <ul className="flex gap-4">
                <li>
                    <span>Home</span>
                </li>
                <li>
                    <span>Services</span>
                </li>
                <li>
                    <span>Contact</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
