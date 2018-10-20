import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import gif_success from '../assets/images/success.gif'

const Success = (props) => (
    <Layout>
        <Helmet>
            <title>Success Page</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Success</h1>
                    </header>
                    <div className="ok_kid"><img src={gif_success} alt="" /></div>
                    <p>Thank you for contacting us! We will get back to you ASAP</p>
                    <ul className="actions">
                        <li><a href="/" className="button special">Back to Home</a></li>
                    </ul>
                </div>

            </section>
        </div>
    </Layout>
)

export default Success
