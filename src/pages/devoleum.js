import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Devoleum - AI and Blockchain</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Devoleum</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    Devoleum tracks and stores every single step of the extra virgin olive oil supply chain using Blockchain and AI, allowing the final consumer to know the entire history of each product, from the comfort of their smartphone
                    <br />
                    <br />
                    <br />
                    <ul className="actions">
                        <li><a href="https://www.devoleum.com" target="_blank"><div  className="button">Learn more</div></a></li>
                    </ul>
                </div>

            </section>
        </div>

    </Layout>
)

export default Generic
