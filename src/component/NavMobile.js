import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-scroll"
export default function NavMobile() {
    return (
        <div className="navMobile">
            <div className="flexcol">

                <div><Link duration={100} smooth={true} to="home"><i><HomeIcon style={{ color: "white" }}></HomeIcon></i></Link></div>
                <div><i><LocalDiningIcon style={{ color: "white" }}></LocalDiningIcon></i></div>
                <div><Link duration={100} smooth={true} to="cart"><i><ShoppingCartIcon style={{ color: "white" }}></ShoppingCartIcon></i></Link></div>
                <div><i><MenuIcon style={{ color: "white" }}></MenuIcon></i></div>

            </div>
        </div>
    )
}
