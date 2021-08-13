import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between ">
                <nav className="flex">
                    <NavLink to="/" className="inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-secondary-200 text-4xl font-bold font-amatic tracking-widest" activeClassName="text-white">Syed Danish</NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-secondary-200" activeClassName="text-gray-100 bg-gray-700">Blog Posts</NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-secondary-200" activeClassName="text-gray-100 bg-gray-700">My Projects</NavLink>
                    <NavLink to="about" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-secondary-200" activeClassName="text-gray-100 bg-gray-700">About Me!</NavLink>
                </nav>
            </div>
        </header>
    );
};
