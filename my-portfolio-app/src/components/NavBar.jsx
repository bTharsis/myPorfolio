import React from "react";

function NavBar() {
    return (
        <>
            <nav className="text-white border-2 rounded-lg w-1/2 row-start-3 row-end-5 col-start-1 col-end-2 flex flex-col justify-items-center gap-3 items-center ml-8">
                <h2 className="font-bold text-2xl">Nav Bar</h2>
                <ul className="font-medium font-mono flex flex-col justify-between gap-4">
                    <li>
                        <a href="/">About Me</a>
                    </li>
                    <li>
                        <a href="/">Skills</a>
                    </li>
                    <li>
                        <a href="/">Projects</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
