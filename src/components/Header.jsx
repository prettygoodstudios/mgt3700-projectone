import React, { useEffect, useState } from "react";

const Header = ({}) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const callBack = () => {
            setVisible(!visible);
        }
        const interval = setInterval(callBack, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [visible]);

    return (
        <div className="header">
            <h1 className="header__title">What is Operations Management?</h1>
            <div className="header__scroll">
                <p>Scroll to find out</p>
                <div className={"header__scroll__carot" + (visible ? " visible" : "")}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Header;