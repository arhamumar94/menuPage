import React from 'react'
import { Link } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import NavMobile from './NavMobile'

export default function HomePage(props) {

    return (
        <>
            <div className="homeContainer">
                <div id="home" className="imgLarge">
                    <h1>Smart Pizza Offenbach</h1>
                    <p>Burger, 100% Halal, Italienische Pizza</p>
                    <div> <Link><span>Takeaway</span></Link></div>

                </div>
                <MenuComponent></MenuComponent>
                <NavMobile></NavMobile>

            </div>

            <div className="navMobile">


            </div>

        </>
    )
}
