import React from 'react';
import Logo from '../img/logo.png';
import {Link} from 'react-router-dom';
import LogoutLogo from '../img/logout.png';
import {useHistory} from "react-router-dom/cjs/react-router-dom";


const Navbar = ({getLogin, setLogin}) => {

    const history = useHistory();

    return (
        <div className="h-20 w-[100%] flex justify-around lg:ml-8 ml-0">
            <div className="h-[100%] flex items-center">
                <Link to="/"><img src={Logo} alt="logo" className="h-14"/></Link>
            </div>
            <ul className="flex items-center h-[100%] text-xl">
                <Link to="/"><li className="hover:text-sky-400">Home</li></Link>
                {getLogin ? <li className="ml-4 hover:text-sky-400">Status : connected</li> : <Link to="/login"><li className="ml-4 hover:text-sky-400">Login/Register</li></Link>}
                {getLogin ? <img src={LogoutLogo} alt="logout logo" className="h-6 ml-4 cursor-pointer" onClick={() => {setLogin(false); history.push("/")}}/> : null}
            </ul>
        </div>
    );
};

export default Navbar;