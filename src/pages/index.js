import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpeg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.png'
import website_icon from '../assets/images/website-icon.png'
import picElisa from '../assets/images/elisa.png'
import picLorenzo from '../assets/images/lorenzo.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
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
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Team</h2>
                            </header>
                            <div className="team_member">
                            <div>
                            <img className="image_team" src={picElisa} />

                            </div>
                            <div className="team_text">

                            <div className="team_name">Elisa Romondia</div>

                            Data Analyst and Blockchain developer.
                            <ul className="icons">
                                <li><a href="https://twitter.com/elisaromondia" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                                <li><a href="https://github.com/elisaromondia/" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                                <li><a href="https://www.linkedin.com/in/elisa-romondia/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            </ul>

                            First woman to win an official Italian hackathon.
                            Selected by Google, Udacity and Bertelsmann for two Scholarship Programmes,
                            Mobile Web Specialist and Data Science. She writes tutorial and articles for Zenva about
                            AI, Augmented and Virtual Reality.
                            <br />

                            She uses Python, SQL, Pandas, Numpy, SciKit and PyTorch to explore and analyze large datasets,
                            identify patterns and make predictions with Machine Learning algorithms.
                            She loves to combine Data Visualization and Augmented Reality, building stunning presentations.
                            <br />

                            She is the co-founder of Devoleum,
                            a solution to trace and optimize food supply chains using Blockchain and AI.
                            Selected in 2017 as one of the top 10 European female entrepreneurs
                            for the StartHer Awards, at the Station F and mentioned
                            in the Forbes list “60 Women-Led Startups That Are Shaking
                            Up Tech Across The Globe”.
                            </div>
                            </div>
                            <div className="team_member">
                            <img className="image_team" src={picLorenzo} />
                            <div className="team_text">

                            <div className="team_name">Lorenzo Zaccagnini</div>

                            Fullstack Javascript and Blockchain developer.
                            <ul className="icons">
                                <li><a href="https://twitter.com/LorenzoZcg" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                                <li><a href="https://github.com/LorenzoZaccagnini" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                                <li><a href="https://www.linkedin.com/in/lorenzo-zaccagnini/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            </ul>
                            Expert in Blockchain, AI and PWA,
                            he works as a mentor for Udacity and leads worldwide
                            webinars and workshops about Blockchain and AI.
                            <br />
                            Winner of the TIM #Wcap prize at the first Italian
                            official hackathon, Digithon 2016. Selected by Google
                            and Udacity for the Mobile Web Specialist Google Scholarship
                            Programme 2018.
                            <br />
                            He has years of experience with React, Angular, Node,
                            Mongo and Express. He has a deep knowledge of Web3js and the Truffle suite,
                            he loves to write clean code and tests with Jest or Karma.
                            <br />
                            He combines his expertise and skills to develop
                            Devoleum, one of the first decentralized Blockchain and AI solution for the food
                            supply chain, internationally awarded and mentioned by Forbes.
                            </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
