import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Team from '../components/Team'


const Success = (props) => (
    <Layout>
        <Helmet>
            <title>Team Page</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <div id="main" className="alt">
        <Team />

        </div>
    </Layout>
)

export default Success
