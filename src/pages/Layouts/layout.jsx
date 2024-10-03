import React from "react";
import {Link, Outlet} from "react-router-dom"
import Header from "./header"


export default function layout (){
    return(
        <>
        <Header/>
        <main className="justify-center items-center">
            <Outlet/>
        </main>
        <footer>
            hey
        </footer>
        
        </>
    )
}