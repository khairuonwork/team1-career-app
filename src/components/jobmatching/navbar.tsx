import { IoArrowBack } from "react-icons/io5";
import { Profile } from "../common";


export const Navbar = () => {
    return(    
        <header className="border-b-2 border-gray-200 fixed left-0 right-0">
            <div className="h-20 flex justify-between py-4 max-w-6xl mx-auto px-3 md:px-0 items-center">
                <IoArrowBack size={25}/>
                <h3 className="text-2xl">AI Job Matching</h3>
                <Profile/>
            </div>
        </header>
    )
};
