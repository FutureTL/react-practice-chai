import React from "react";
import {Link, NavLink} from "react-router-dom";
//here we will make the header component of the site.


export default function Header() {
    return (//this header has 3 parts which will be displayed:
                // 1. logo. 
                // 2. right side login and get started button
                // 3. home section
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex items-center lg:order-2">

                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>

                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>

                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink 
                                    to = "/"    
                                        //if we observe the classname here is written in the form of a callback function. In the
                                         //callback we can inject a variable, isActive ehich helps in automativally detecting we are in which router so that the color can be highlighted accordingly.
                                         //we inject this variable anywhere in the className 
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         border-b border-gray-100 hover:bg-gray-50
                                         lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    //another point that should be noticed here is that we have written only home
                                    //in this Navlink but in actual visibility we have 3 options- home, about , contact.
                                    //we have to discover going forward what happens with the remaining 2.
                                >
                                    Home
                                </NavLink>

                                </li>

                                <li>

                                <NavLink 
                                        to ="about"
                                         //if we observe the classname here is written in the form of a callback function. In the
                                         //callback we can inject a variable, isActive ehich helps in automativally detecting we are in which router so that the color can be highlighted accordingly.
                                         //we inject this variable anywhere in the className 
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         border-b border-gray-100 hover:bg-gray-50
                                         lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    //another point that should be noticed here is that we have written only home
                                    //in this Navlink but in actual visibility we have 3 options- home, about , contact.
                                    //we have to discover going forward what happens with the remaining 2.
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink 
                                        to ="contact-us"
                                         //if we observe the classname here is written in the form of a callback function. In the
                                         //callback we can inject a variable, isActive ehich helps in automativally detecting we are in which router so that the color can be highlighted accordingly.
                                         //we inject this variable anywhere in the className 
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         border-b border-gray-100 hover:bg-gray-50
                                         lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    //another point that should be noticed here is that we have written only home
                                    //in this Navlink but in actual visibility we have 3 options- home, about , contact.
                                    //we have to discover going forward what happens with the remaining 2.
                                >
                                    Contact Us
                                </NavLink>
                            </li>

                             <li>
                                <NavLink 
                                        to ="github"
                                         //if we observe the classname here is written in the form of a callback function. In the
                                         //callback we can inject a variable, isActive ehich helps in automativally detecting we are in which router so that the color can be highlighted accordingly.
                                         //we inject this variable anywhere in the className 
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200
                                         border-b border-gray-100 hover:bg-gray-50
                                         lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    //another point that should be noticed here is that we have written only home
                                    //in this Navlink but in actual visibility we have 3 options- home, about , contact.
                                    //we have to discover going forward what happens with the remaining 2.
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

