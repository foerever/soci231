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

function Tools(props) {
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
            <h1>Tools</h1>
          </header>

          <p>
            The short-term solutions for this issue all rely on an inherent understanding of the existing problems in healthcare. After developing an understanding of the issue at hand, the best way to avoid these missteps in the future is through training. Luckily, many nationally recognized organizations have already taken notice of this developing problem. For example, the <a href="https://ce.mayo.edu/special-topics-in-health-care/content/unconscious-bias-healthcare#group-tabs-node-course-default1">Mayo Clinic School of Continuous Professional Development has already developed an annual training seminar to help physicians from all over the country</a>. Anyone can attend this event as it is meant to bring awareness and help medical professionals understand the extent of the problem. However, they are not alone. Perhaps the biggest advocate for equity in healthcare would have to be none other than the <a href="https://ce.mayo.edu/special-topics-in-health-care/content/unconscious-bias-healthcare#group-tabs-node-course-default1">Institute of Healthcare Improvement</a>. Their website is home to numerous useful resources that help physicians address their implicit bias and lack of cultural competence. They even have multiple information videos that attempt to do the same: <a href="https://www.youtube.com/watch?v=ze7Fff2YKfM">How Does Implicit Bias Affect Health Care</a>? and <a href="https://www.youtube.com/watch?v=E_qERP-Y0Jw">What Is Bias, and What Can Medical Professionals Do to Address It</a>? 
          </p>

          <p>
            When we think of cultural competence in healthcare, physicians must also consider how their own bias might hamper their ability to provide fair treatment. This implicit bias does not mean that someone is racist, sexist, ableist, or discriminatory in any way. Instead, implicit bias merely recognizes the fact that we all have grown up in different communities, and some of them may have groomed our minds to look at situations with some preconceived notions. Because so many of us may have biases that we do not even know about, a group of social psychologists has developed an <a href="http://implicit.harvard.edu/">Implicit Association Test</a>. Clearly, this test has come with controversy, so its results are only indicative of a possible bias that you may have. Even the Association of American Medical Colleges (AAMC), have held a <a href="https://www.youtube.com/watch?time_continue=352&v=eadpfj3Br4c&feature=emb_logo">talk</a> about the importance of recognizing unconscious bias in medicine. With this in mind, it certainly is worth exploring the results of your Implicit Association Test and determining whether or not these unconscious biases have an impact on your practice.
          </p>

          <p>
            The Implicit Association Test, as well as information on Project Implicit, can be found at the following link: <a href="http://implicit.harvard.edu/">implicit.harvard.edu</a>.
          </p>

        <p>
        Every link featured in the writing above directs to a useful video or resources that must be viewed in order to truly attempt to remove bias and improve cultural competence. However, more information can be found through the following resources:
        </p>
        
        <p>
            A manual provided by the American Hospital Association: <a href="https://www.aha.org/ahahret-guides/2013-06-18-becoming-culturally-competent-health-care-organization">Becoming a Culturally Competent Healthcare Organization</a>
        </p>

        <p>
        The AAMC has compiled some crucial resources: <a href="https://www.aamc.org/what-we-do/mission-areas/diversity-inclusion/unconscious-bias-training">Unconscious Bias Resources for Health Professionals</a>. They have also produced a packet meant for advising medical schools on their cross-cultural curriculum: <a href="https://www.aamc.org/system/files/c/2/54338-culturalcomped.pdf">Cultural Competence Education</a>.

        </p>
        

Finally, one of the only organizations that currently recognizes the disparities in healthcare treatment and is working to end it is <a href="http://www.equityofcare.org/">Equity of Care</a>. It is important to pledge to this organization and support it in order to end this injustice.
          
        </div>
      </Container>
    </div>
  );
}

module.exports = Tools;
