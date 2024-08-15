import { Component } from "react";

export class Footer extends Component<any, any> {
    render() {
        return (
            <div className="p-4
                            bg-gray-700
                            flex
                            justify-center
                            items-center">
                <p className="text-white
                              text-sm
                              cursor-pointer
                              hover:text-green-400">
                    &copy; Simple Task Manager. All rights reserved.
                </p>
            </div>
        );
    }
}

