/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
// import '../../static/css/custom.css';

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      // <div className="projectLogo">
        <img className='logo_img' src={props.img_src} alt="Project Logo" />
      // </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {/* {siteConfig.title} */}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/love.svg`} />
        <div className="inner" style={{paddingBottom:"-200px"}}>
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('introduction')}>Training Module</Button>
            <Button href={docUrl('shortterm')}>Short Term Solutions</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const FeaturesBlock = props => (
      <Container
        padding={['bottom']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Context = () => (
      <Block background="light" layout="twoColumn">
        {[
          {
            content: 'We want to inform doctors in the Houston area and beyond about the importance of cultural competency in healthcare. We hope our healthcare professionals take advantage of the information and educational resources that we provide in an attempt to train doctors in cultural and religious sensitivities and competency.\nSurprisingly, this issue is largely unexplored. With this in mind, we hope our claims will be taken seriously and incite dialogue by those in the health policy world. The issue of discrimination in health care is prevalent, and we strive to inspire much needed media coverage and policy making.',
            title: 'Mission Statement',
          },
          {
            image: `${baseUrl}img/cc_techniques.jpg`,
            imageAlign: 'right',
          }
        ]}
      </Block>
    );

    const Features = () => (
      <FeaturesBlock layout="threeColumn">
        {[
          {
            content: 'Hospitals should actively work towards equitable medical treatment and results for all.',
            image: `${baseUrl}img/world_love.svg`,
            imageAlign: 'top',
            title: 'Equitable Medical Treatment',
          },
          {
            content: 'Medical schools should have multiple mandated, standarized diversity trainings.',
            image: `${baseUrl}img/travel.svg`,
            imageAlign: 'top',
            title: 'Standarize Diversity Training',
          },
          {
            content: 'Establish a centralized resource and initiative for public education and engagement in this issue.',
            image: `${baseUrl}img/team.svg`,
            imageAlign: 'top',
            title: 'Public Education'
          },
        ]}
      </FeaturesBlock>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <Context />
        </div>
      </div>
    );
  }
}

module.exports = Index;
