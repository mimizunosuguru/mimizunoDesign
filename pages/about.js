import React from "react";
import styled from 'styled-components';
import Layout from '../components/Layout'
import Section from '../components/styledComponents/section'

const ContentWrapper = styled.div`
  animation-name: fadein;
  animation-duration: 1s;
  //animation-iteration-count: infinite;

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(0px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const H2 = styled.h2`
  font-size: 38px;
  
  @media (max-width: 767px) {  
    font-size: 30px;
  }
`;

const Top = styled.ul `
  display: flex;
  margin-top: 34px;
  
  img {
    position: absolute;
    right: 0;
    width: auto;
    height: 100%;
  }
  
  p {
    padding-bottom: 12px;
    font-family: 'Avenir', serif;
    font-size: 28px;
    font-weight: bold;
    line-height: 1;
  }
  
  h2 {
    padding-bottom: 20px;
    font-family: 'Avenir', serif;
    font-size: 58px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 2px;
  }

  span {
   font-family: 'Avenir', serif;
   color: #999999;
   font-weight: bold;
   font-size: 20px;
   line-height: 1;
  }
  
  .box {
    position: relative;
    display: flex;
    align-items: center;
    height: 380px;
    width: 100%;
  }
  
  .box--title {
    z-index: 1;
    padding-left: 60px;
  } 
  
  .box--background {
    position: absolute;
    right: 0;
    height: 100%;
    width: 60%;
    background-image: url("/static/image/index/heroImage.png");
    background-size: cover;
  }
  
  @media (max-width: 1020px) and (min-width: 768px) {
    .box--title {
      padding-left: 0;
    }
    
    .box--background {
      background-position: center;
    }
  }
  
  @media (max-width: 767px) {
    .box {
      margin-top: 50px;
    }
    
    .box--title {
      padding-left: 0;
    }
    
    p {
      font-size: 18px;
      padding-bottom: 8px;
    }
    
    h2 {
      font-size: 38px;
      padding-bottom:8px;
    }
    
    span {
      font-size: 14px;
    }
    
    .box--background {
      width: 75%;
      background-position: center;
    }

  }
`;

const Card = styled.ul`
  display: flex;
  background: #fff;
  padding: 30px;
  
  margin-top: ${props => (props.second ? '50' : '')}px;
  
  h3 {
    font-family: 'Avenir', serif;
    font-size: 30px;
  }
  
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
  }

  .content {
    width: 550px;
  }

  .content p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .content p:last-child {
    margin: 0;
  }
  
  @media (max-width: 767px) {
    flex-direction: ${props => (props.second ? 'column-reverse' : 'column')};
    align-items: center;

    .content {
      width: 100%;
    }
    
    
    .head h3 {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
  
`;

const Biography = styled.ul`
  .bio__listItem {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #EEEEEE;
    font-size: 16px;
  }
  
  .bio__listItem:last-child {
    border: none;
  }

  .bio__listItem .item--title {
    width: 140px;
    font-family: 'Avenir', 'YuGothic',serif;
   }

  .bio__listItem .item--title a {
    font-weight: bold;
    border-bottom: 1px solid #000;
  }

  .bio__listItem .item--position {
  }

  .bio__listItem .item--place {
    margin-left: auto;
    text-align: right;
  }
  
  @media (max-width: 767px) {
    .bio__listItem {
      flex-direction: column;
      align-items: flex-start;
      height: auto;
      padding: 15px 0;
    }

    .bio__listItem div {
      margin-bottom: 10px;
    }

    .bio__listItem .item--place {
      margin: 0;
    }
  }
`;

const Statement = styled.div`
  text-align: center;
  
  .box {
    margin-bottom: 80px;
  }
  
  @media (max-width: 1020px) {
    .box {
      margin-bottom: 40px;
    }
  }
  
  .box:last-child {
    margin: 0;
  }
  
  h2 {
    position: relative;
    font-family: 'Avenir', serif;
    //font-size: 38px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  
  h2:before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -15px;/*線の上下位置*/
    display: inline-block;
    width: 60px;/*線の長さ*/
    height: 1px;/*線の太さ*/
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);/*位置調整*/
    background-color: black;/*線の色*/
   }
`;

const Skills = styled.div`
  
  h2 {
    position: relative;
    display: inline-block;
    margin-bottom: 40px;
    font-family: 'Avenir',serif;
    //font-size: 38px;
    font-weight: bold;
    padding-right: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #000000;
    line-height: 1;
  }
  
  .wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .skillCard {
    background: #fff;
    width: 18%;
    margin-bottom: 30px;
    border-radius: 8px;
  }
  
  .Card__graph {
    margin: 0 auto;
    margin-top: 25px;
    width: 100px;
    height: 100px;
  }
  
  .Card__graph img {
    width: 100%;
    height: 100%;
  }
  
  .Card__name {
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    margin-top: 25px;
    text-align: center;
    border-top: 1px solid #F0F1F5;
  }
  
  @media (max-width: 1020px) and (min-width: 768px) {
    .skillCard {
      width: 22%;
    }
    
    .wrapper::after {
      content: '';
      width: 48%;
    }
  }
  
  @media (max-width: 767px) {
    .skillCard {
      width: 48%;
    }
  }
`;

const WhatIsDesign = styled.div`
  display: flex;
  
  .box__title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    
    h2 {
    position: relative;
    font-family: 'Avenir', serif;
    ////font-size: 38px;
    font-weight: bold;
    margin-bottom: 40px;
    }
    
    h2:before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -15px;/*線の上下位置*/
      display: inline-block;
      width: 60px;/*線の長さ*/
      height: 1px;/*線の太さ*/
      -moz-transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);/*位置調整*/
      background-color: black;/*線の色*/
     }
  }
  
  @media (max-width: 1020px) and (min-width: 768px) {
    .box__title {
       justify-content: left;
    }
  }
  
  .box__cont {
    flex: 1;
    align-items: center;
    
    p {
      margin-bottom: 40px;
    }
    
    .text__sub {
      display: flex;
      align-items: center;
    }
    
    span {
      display: inline-block;
      background: #CBCBCB;
      margin-right: 30px;
      flex: 1;
      height: 1px;
    }
    
    .text__sub p {
      color: #CBCBCB;
      font-size: 28px;
      line-height: 1;
      font-family: 'Avenir Obique';
      font-style: oblique;
      margin: 0;
    }
  }
  
  @media (max-width: 767px) {
    display: block;
    
    h2 {
      position: relative;
      font-family: 'Avenir', serif;
      ////font-size: 38px;
      font-weight: bold;
      margin-bottom: 40px;
    }
    
    h2:before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -15px;/*線の上下位置*/
      display: inline-block;
      width: 60px;/*線の長さ*/
      height: 1px;/*線の太さ*/
      -moz-transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);/*位置調整*/
      background-color: black;/*線の色*/
    }
  }
`;

export default class About extends React.Component {
  render() {
    return (
      <Layout page="about">
        <ContentWrapper>
        {/*Top*/}
          <Section>
            <Top>
              <li className="box">
                <div className="box--title">
                  <p>DESIGN IS</p>
                  <h2>STORYTELLING</h2>
                  <span>SUGU MIZUNO UI/UX Designer</span>
                </div>
                <div className="box--background"/>
              </li>
              {/*<li className="box right">*/}
              {/*</li>*/}
            </Top>
          </Section>

          <Section grey>
            {/* About */}
            <Card>
              <li className="head">
                <h3>About</h3>
              </li>
              <li className="content">
                <p>学生時代は自分が本当に情熱を持てるものを探す中、2017年に大学を休学し、ベトナムの日系ITスタートアップにてメンターの元にデザイナーとして弟子入りの後、京都のスタートアップにて法人営業向け企業情報データベースを提供するSassプロダクトのプロダクトデザインに2年従事。</p>

                <p>同時に、日本最大級のUXカンファレンスを開催するUX DAYS TOKYOにスタッフとして約1年間所属。UXに関するブログ記事の執筆と、ワークショップ、勉強会をスタッフで定期的に開催し、プロダクトの価値を引き出すデザインの視点を学んだ。</p>
              </li>
            </Card>
            {/* Biography */}
            <Card second>
              <li className="content">
                <Biography>
                  <li className="bio__listItem">
                    <div className="item--title"><a href="https://ds.yahoo.co.jp/" target="_blank">Yahoo! Japan</a></div>
                    <div className="item--position">Degital Product Designer</div>
                    <div className="item--place">京都 / 2017 - 2019</div>
                  </li>
                  <li className="bio__listItem">
                    <div className="item--title"><a href="http://company.baseconnect.in/" target="_blank">Baseconnect</a></div>
                    <div className="item--position">UI/UX Designer</div>
                    <div className="item--place">京都 / 2017 - 2019</div>
                  </li>
                  <li className="bio__listItem flex">
                    <div className="item--title"><a href="https://uxdaystokyo.com/" target="_blank">UX Days Tokyo</a></div>
                    <div className="item--position">Stuff</div>
                    <div className="item--place">大阪 & 東京 / 2017 - 2018</div>
                  </li>
                  <li className="bio__listItem flex">
                    <div className="item--title"><a href="https://sun-asterisk.com/" target="_blank">Sun*</a></div>
                    <div className="item--position">Design & Marketing Intern</div>
                    <div className="item--place">ベトナム / 2017/4 - 9</div>
                  </li>
                  <li className="bio__listItem flex">
                    <div className="item--title"><a href="https://app-flamingo.com/" target="_blank">Flamingo</a></div>
                    <div className="item--position">iOS Enginner & Hastler</div>
                    <div className="item--place">京都 / 2016/5 - 11</div>
                  </li>
                  <li className="bio__listItem flex">
                    <div className="item--title"><a href="https://www.doshisha.ac.jp/" target="_blank">同志社大学</a></div>
                    <div className="item--position">経済学部/経済学科</div>
                    <div className="item--place">京都 / 2014 - 2020</div>
                  </li>
                </Biography>
              </li>
              <li className="head">
                <h3 >Biography</h3>
              </li>
            </Card>
          </Section>
          <Section>
            <Statement>
              <div className="box">
                <H2>Mission</H2>
                <p>身近な人が自分の人生を生きれるようにサポートする。</p>
              </div>

              <div className="box">
                <H2>Vision</H2>
                <p>人、組織、プロダクトのストーリーに共感し、<br/>
                  価値を形にする支援者であり続ける。<br/>
                  誰にでもその人だけのストーリーがあると信じる。</p>
              </div>
            </Statement>
          </Section>

          <Section grey>
            <Skills>
              <H2>Skills</H2>
              <div className="wrapper">
                <div className="skillCard">
                  <div className="Card__graph">
                    <img src="/static/image/index/skill-html.png" alt=""/>
                  </div>
                  <div className="Card__name">
                    <p>HTML5</p>
                  </div>
                </div>
                <div className="skillCard">
                  <div className="Card__graph">
                    <img src="/static/image/index/skill-scss.png" alt=""/>
                  </div>
                  <div className="Card__name">
                    <p>Sass</p>
                  </div>
                </div>
                <div className="skillCard">
                  <div className="Card__graph">
                    <img src="/static/image/index/skill-react.png" alt=""/>
                  </div>
                  <div className="Card__name">
                    <p>React.js</p>
                  </div>
                </div>
                <div className="skillCard">
                  <div className="Card__graph">
                    <img src="/static/image/index/skill-rails.png" alt=""/>
                  </div>
                  <div className="Card__name">
                    <p>Ruby on Rails</p>
                  </div>
                </div>
                <div className="skillCard">
                  <div className="Card__graph">
                    <img src="/static/image/index/skill-sketch.png" alt=""/>
                  </div>
                  <div className="Card__name">
                    <p>Sketch</p>
                  </div>
                </div>

                <div className="skillCard">
                  <div className="Card__graph">
                    <img src="/static/image/index/skill-ps.png" alt=""/>
                  </div>
                  <div className="Card__name">
                    <p>Photoshop</p>
                  </div>
                </div>
                <div className="skillCard">
                  <div className="Card__graph">
                    <img src="/static/image/index/skill-ai.png" alt=""/>
                  </div>
                  <div className="Card__name">
                    <p>illustrator</p>
                  </div>
                </div>
                <div className="skillCard">
                  <div className="Card__graph">
                    <img src="/static/image/index/skill-in.png" alt=""/>
                  </div>
                  <div className="Card__name">
                    <p>Invision</p>
                  </div>
                </div>
                <div className="skillCard">
                  <div className="Card__graph">
                    <img src="/static/image/index/skill-notion.png" alt=""/>
                  </div>
                  <div className="Card__name">
                    <p>Notion</p>
                  </div>
                </div>
                <div className="skillCard">
                  <div className="Card__graph">
                    <img src="/static/image/index/skill-passion.png" alt=""/>
                  </div>
                  <div className="Card__name">
                    <p>Passion</p>
                  </div>
                </div>

              </div>
            </Skills>
          </Section>
          <Section>
            <WhatIsDesign>
              <div className="box__title">
                <H2>What's Design?</H2>
              </div>

              <div className="box__cont">
                <p>デザインすることは、物語ること。<br/>
                  届けるべき人のことを考え、価値を生み出すため、<br/>
                  モノ、コト、ヒトに関わる全ての領域にデザインの力は求められる。<br/>
                  デザインはデザイナーのものだけではない。<br/>
                </p>

                <p>デザインを学ぶことは、世界の原則を学ぶこと。<br/>
                  デザインすることは、世界をより良くするための冒険の旅へ出るようなもの。<br/>
                </p>

                <p>
                  その冒険の旅に、終わりはない。
                </p>

                <div className="text__sub">
                  <span/>
                  <p>Design is storytelling</p>
                </div>
              </div>
            </WhatIsDesign>
          </Section>
        </ContentWrapper>
      </Layout>
    )
  }
}

