import React from 'react'
import picElisa from '../assets/images/elisa.png'
import picLorenzo from '../assets/images/lorenzo.jpg'

const Team = (props) => (
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
)

export default Team
