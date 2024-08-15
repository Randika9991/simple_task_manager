import React, { Component } from "react";
interface NavBarProps {
    isLoggedIn: boolean;
    handleLogout: () => void;
}

class NavBar extends Component<NavBarProps> {
    render() {
        return (
            <div className="p-4 bg-gray-700 flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-2xl text-[#61dafb] font-bold mr-4">
                        Simple Task Manager
                    </h1>
                </div>
            </div>
        );
    }
}

export default NavBar;
