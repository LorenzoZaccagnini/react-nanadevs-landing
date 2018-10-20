import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Team from '../components/Team'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpeg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.png'
import website_icon from '../assets/images/website-icon.png'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Devoleum - We Dream digital"
                    meta={[
                        { name: 'description', content: 'This is the portfolio website of NanaDevs' },
                        { name: 'keywords', content: 'augmented, blockchain, ethereum, virtual reality, react, angular, solidity, devoleum, forbes, javascript' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Devoleum</h3>
                                <p>Trace and optimize supply chains using Blockchain and AI</p>
                            </header>
                            <a href="https://www.devoleum.com" target="_blank"><div className="link primary"></div></ a>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Documentum</h3>
                                <p>Protect your Documents an Files using Ethereum blockchain and IPFS</p>
                            </header>
                            <a href="https://www.documentum.nanadevs.com/" target="_blank"><div className="link primary"></div></ a>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>AR 3D Face Filter</h3>
                                <p>Snapchat 3D like face filters using Javascript and Facial Recognition</p>
                            </header>
                            <a href="https://www.arfacefilter.nanadevs.com/" target="_blank"><div className="link primary"></div></ a>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>AR Corgie</h3>
                                <p>Your best Augmented Reality ARKit pet!</p>
                            </header>
                            <a href="https://www.youtube.com/watch?v=Kk_t_EOrWgk" target="_blank"><div className="link primary"></div></ a>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Real Time VR Angular Dashboard</h3>
                                <p>An Angular Real time dashboard for Virtual Reality</p>
                            </header>
                            <a href="https://www.youtube.com/watch?v=ThJooefOFPQ" target="_blank"><div className="link primary"></div></ a>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Agency Massai</h3>
                                <p>Progressive Web App made in React with a Dialog Flow Chabot</p>
                            </header>
                            <a href="https://www.agenziamassai.com/" target="_blank"><div className="link primary"></div></ a>
                        </article>
                    </section>
                    <Team />

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
