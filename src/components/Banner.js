import React from 'react'
import website_icon from '../assets/images/website-icon.png'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major" id="logo_title">
                <img className="image_logo" src={website_icon} />
                <div className="banner_title">NanaDevs</div>
            </header>
            <div className="content">
                <p>We dream digital<br />
                We build to last</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Our projects</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
