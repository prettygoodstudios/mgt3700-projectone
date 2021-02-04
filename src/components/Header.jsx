import React from "react";

const Header = ({}) => {
    return (
        <div className="header">
            <h1 className="header__title">What is Operations Management?</h1>
            <div className="header__scroll">
                <p>Scroll to find out</p>
                <div className="header__scroll__carot">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Header;