import React from "react";
import './homepage.styles.scss';

const HomePage = () =>(
    <div>
        <div className = "directory">
            <div className= "menu-item">
                <div className="content">
                    <h1 className="title"> HAT</h1>
                    <span className="subtitle"> SHOP NOW</span>
                </div>
            </div>
            <div className= "menu-item">
                <div className="content">
                    <h1 className="title">SNEAKERS</h1>
                    <span className="subtitle"> SHOP NOW</span>
                </div>
            </div>
            <div className= "menu-item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                    <span className="subtitle"> SHOP NOW</span>
                </div>
            </div>
            <div className= "menu-item">
                <div className="content">
                    <h1 className="title"> WOMAN</h1>
                    <span className="subtitle"> SHOP NOW</span>
                </div>
            </div>
            <div className= "menu-item">
                <div className="content">
                    <h1 className="title">MEN</h1>
                    <span className="subtitle"> SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)
export default HomePage;