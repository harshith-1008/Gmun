import React from "react";
import logo from "./assets/logo.png"

export default function Footer(){
    return(
        <footer className="flex flex-row justify-center items-center p-10 bg-gray-300">
            <img src={logo} className=" size-64 mr-5"></img>
            <div className="flex flex-col text-md">
                <h3 className="uppercase mb-5 text-[#D09B12] text-xl">contact us</h3>
                <h4>Arjun Arya - 1234567890</h4>
                <p className="mb-5">President</p>
                <h4>Kingshuk - 1234567890</h4>
                <p className="mb-5">Vice President</p>
                <p>Reach us on Instagram: <a href="https://www.instagram.com/gmun_hyd?igsh=MWNhYWtkZHI4M3Fubg==" className=" text-blue-400 hover:underline">@gmun_hyd</a></p>
                <p>Reach us on LinkedIn: <a href="https://www.linkedin.com/company/gitam-model-united-nations-hyderabad123/people/ " className=" text-blue-400 hover:underline">@Gitam Model United Nations Hyderabad</a></p>    
            </div>
        </footer>
    )
} 