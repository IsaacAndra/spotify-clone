import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import './Player.css';
import Sidebar from "./Sidebar";
import { spotify } from '../App.js'

export default function Player() {

    return (
        <div className="player">
            <div className="player__body">   
                <Sidebar /> 
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}