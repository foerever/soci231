/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function About(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: '![Bianca Chen](img/chen400.jpg)\n#### Bianca Chen\nEconomics Major, Business Minor; Pre-Med Student\n\n --- \n ![Anthony Cho](img/cho400.jpg)\n#### Anthony Cho\nComputer Science Major',
    },
    {
      content: '![Mark Abboud](img/mark400.jpg)\n#### Mark Abboud\nNeuroscience Major, Medical Humanities Minor; Pre-Med Student\n\n --- \n ![Lara Lin](img/lara400.png)\n#### Lara Lin\nPolitical Science Major',

    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Rice University SOCI 231 Team 1</h1>
          </header>
          <p>We're a group of Rice University students engaging in the social problems process.</p>
          <h4>In that vein, we are currently in a very early stage of that process:</h4>
          <ol type="1">
            <li>We are currently at the claimsmaking stage of the social problems process.</li>
            <li>We wish to move towards stage 2 and 3, Media Coverage and Public Reaction through this website.</li>
          </ol>
          <p>We're excited to pursue this topic which feel has not been sufficiently addressed and acknowledged in our society today. That said, we understand the limitations of the time and resources we have, furthermore we understand that our views may be both subjective and objective. </p>
          <p>Our long term goal and desire is to reach the last stages of the social problems process eventually. That is, policy making, social problems work, and policy outcomes.</p>
          <h1>Team Members</h1>
          <GridBlock contents={supportLinks} layout="twoColumn" />








          
        </div>
      </Container>
    </div>
  );
}

module.exports = About;
