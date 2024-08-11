"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar(){
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = ():void => {
        setIsClick(!isClick)
    }

    return(
        <>
            <nav className="bg-base-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                {/* <Link href="/"> Logo
                                </Link> */}
                                {/* Logo */}
                                <div className="navbar-logo flex items-center">
                                <Link href="/">
                                <Image
                                    src="/logo-add-2.png"
                                    alt="ADD Agency"
                                    width={65}
                                    height={55}
                                    className="w-auto cursor-pointer"
                                    />
                                </Link>
                                </div>
                                
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <Link href="/" className="hover:bg-slate-100 hover:text-black rounded-lg p-2">Home</Link>
                                <Link href="/about-us/" className="hover:bg-slate-100 hover:text-black rounded-lg p-2">About Us</Link>
                                <Link href="/services/" className="hover:bg-slate-100 hover:text-black rounded-lg p-2">Services</Link>
                                <Link href="/teams/" className="hover:bg-slate-100 hover:text-black rounded-lg p-2">Teams</Link>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-slate-100 
                            md:text-slate-100 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-inset 
                            focus:ring-white"
                            onClick={toggleNavbar}>
                                {isClick ? (
                                    <svg  className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor" >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                ):(
                                    <svg  className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/" className="block hover:bg-slate-100 hover:text-black rounded-lg p-2">Home</Link>
                            <Link href="/about-us/" className="block hover:bg-slate-100 hover:text-black rounded-lg p-2">About Us</Link>
                            <Link href="/services/" className="block hover:bg-slate-100 hover:text-black rounded-lg p-2">Services</Link>
                            <Link href="/teams/" className="block hover:bg-slate-100 hover:text-black rounded-lg p-2">Teams</Link>
                        </div>
                    </div>
                )}
            </nav>
        </>

        // <div className="navbar bg-base-100">
        // <div className="flex-1">
        //     <a className="btn btn-ghost text-xl">daisyUI</a>
        // </div>
        // <div className="flex-none">
        //     <ul className="menu menu-horizontal px-1">
        //     <li><a>Link</a></li>
        //     <li><Link href={'/about-us/'}>About Us</Link></li>
        //     <li>
        //         <details>
        //         <summary>Parent</summary>
        //         <ul className="bg-base-100 rounded-t-none p-2">
        //             <li><a>Link 1</a></li>
        //             <li><a>Link 2</a></li>
        //         </ul>
        //         </details>
        //     </li>
        //     </ul>
        // </div>
        // </div>
        
        
    )
}