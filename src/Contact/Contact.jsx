import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
    return (
        <div className="bg-black text-white flex flex-col items-center gap-4 p-4">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <div className="flex items-center justify-center w-full gap-4">
                <div className="flex items-center gap-2">
                    <MdOutlineMailOutline size={42}/>
                    <div>
                        <span className="font-bold">Email</span>
                        <p>bobgwrx@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaPhone size={42}/>
                    <div>
                        <span className="font-bold">Phone</span>
                        <p>408.892.3400</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4">
                <p>Business Lic. 55096</p>
            </div>
        </div>
    )
};
