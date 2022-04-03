import React, {useRef, useState} from 'react';
import Logo from "../img/logo.png";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom/cjs/react-router-dom";


const ClearData = ({getLogin, username}) => {

    const emailRef = useRef(null);
    const passRef = useRef(null);
    const [response, setResponse] = useState(null);


    const requestClear = async (e) => {
        e.preventDefault();
        setResponse(false);
        const res = await fetch('https://peaceful-sea-48607.herokuapp.com/clear', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                pass: passRef.current.value
            })
        })
        res ? setResponse(true) : setResponse(false);
    }


    const loading = () => {
        if(response){
            return <h1>DONE</h1>
        }
        else if(response !==null){
            return <h1>LOADING...</h1>
        }
    }


    return (
        <div className="h-[100vh] flex justify-center">
            {getLogin ? <div className="lg:w-[50vw] md:w-[50vw] w-[90vw]">
                <form className="flex flex-col justify-center items-center lg:mt-44 md:mt-44 mt-28 p-14 rounded-2xl shadow-lg">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src={Logo}
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl text-gray-900">{username}, it's time to clear your data!</h2>
                    </div>
                    <input type="email" placeholder="Email" ref={emailRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                    <input placeholder="Password" type="password" ref={passRef} className="border border-zinc-300 rounded-md mt-8 h-10 w-64 pl-4"/>
                    <button className="text-2xl pl-4 pr-4 pt-2 pb-2 bg-zinc-800 text-white rounded-md relative top-[2rem] hover:top-[1.6rem] duration-300" onClick={requestClear}>ClearData</button>
                </form>
                {loading()}

                    </div> : <h1 className="flex justify-center items-center">You're unable to access this page without being logged in.</h1>}
        </div>
    );
};

export default ClearData;