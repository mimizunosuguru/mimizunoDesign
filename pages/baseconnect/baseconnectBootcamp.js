import React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import Section from "../../components/styledComponents/section";
import ArticleRecommend from "../../components/ArticleRecommend";

const TopImage = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url( ${props => (props.src)} );
  background-size: cover;
  background-position: center;
  

  @media (max-width: 1020px) and (min-width: 768px) {
    height: 400px;
  }

  @media (max-width: 767px) {
    height: 300px;
  }
`;

const Top = styled.div`
  .inner {
    max-width: 800px;
    margin: 0 auto 50px;
    border-bottom: 1px solid #B5B6B7;
`;

const Title = styled.div`
  h2 {
      font-size: 40px;
      font-weight: bold;
      text-align: left;
      margin-bottom: 25px;
    }
    
    @media (max-width: 767px) {
    //mobile
      h2 {
        font-size: 30px;
      }
    }
    
    p {
      margin-bottom: 30px;
    }
`;

//プロジェクト説明
const Desc = styled.ul`
  padding-bottom: 50px;
  
  li {
    margin-bottom: 30px;
  }
  
  li:last-child {
    margin-bottom: 0
  }
  
  li p {
    line-height: 1;
  }
  
  li .title {
    margin-bottom: 15px;
    color: #999999;
  }
  
  a {
    text-decoration: underline;
  }


  @media (max-width: 767px) {
    //mobile
    li {
      width: 100%;
      padding: 0;
    }

    li:nth-child(even),
    li:nth-child(odd) {
      padding: 0;
    }
  }
`;

const Content = styled.div`
  h3 {
    max-width: 800px;
    margin: 0 auto 25px;;
    font-size: 36px;
    font-weight: bold;
    text-align: left;
  }
  
  @media (max-width: 767px) {
    h3 {
      font-size: 30px;
    }
  }

  h4 {
    max-width: 800px;
    margin: 0 auto 20px;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
  }

  h5 {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: normal;
    text-align: left;
    color: #999999;
  }

  p {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  
  ul {
    max-width: 800px;
    margin: 0 auto 40px;
  }

  ul li {
    margin-bottom: 10px;
  }
`;

const Image = styled.div`
  margin-bottom: 70px;
  
  img {
    display: block;
    max-width: ${props => (props.large ? 1200 : 800)}px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
    
  span {
    display: block; 
    font-size: 17px;
    color: #999999;
    text-align: center;
    margin: 30px auto;
  }
  
  h4 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin: 30px auto;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin: 0 auto 20px;
  padding: 20px 50px 20px 50px;
  border: 2px solid #999999;
  background: none;
  text-align: center;
  color: #999999;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  
  &:visited {
    color: #999999;
  }
  
  &:hover {
    background: #999999;
    color: #fff;
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;


export default class Bootcamp extends React.Component {
  state = {
    page: 'bootcamp'
  }

  render () {
    return (
      <Layout>
        <TopImage src="/static/image/work/baseconnect-bootcamp.png"/>
        <Section grey>
          <Top>
            <div className="inner">
              <Title>
                <h2>Design Bootcamp</h2>
                {/*<a href="https://baseconnect.in/" target="blank">https://baseconnect.in/</a>*/}
                <p>Design Bootcampは未経験からデザイナーを目指すプログラムです。優秀な人材のインターン採用を目標に、月に２回ほど説明会を開催しています。</p>
              </Title>
              <Desc>
                <li>
                  <p className="title">URL</p>
                  <a href="http://company.baseconnect.in/design-bootcamp/" target="_blank" className="cont">http://company.baseconnect.in/design-bootcamp/</a>
                </li>
              </Desc>
            </div>
          </Top>
          <Content>
            <h3>アウトプット</h3>
            <p>自身が未経験からデザイナーとして活動できている経験を生かし、運営から面接、課題へのFB等全てを担当しました。</p>

            <Image>
              <img src="/static/image/work/bootcamp/bootcamp-capture1.png" alt=""/>
            </Image>
            <Image>
              <img src="/static/image/work/bootcamp/bootcamp-capture2.png" alt=""/>
            </Image>
            <Image>
              <img src="/static/image/work/bootcamp/bootcamp-capture3.png" alt=""/>
              <span>説明会で使用した資料の一部</span>
            </Image>

            <h4>結果</h4>
            <p>8ヶ月間で約160名が説明会に参加し、40名がカリキュラム受講、内5名がインターンとして採用されました</p>

            <h4>フィードバックする意識した点</h4>
            <p>デザイナーとして成長段階であった自分ですが、人に何かを教える / フィードバックする過程には、たくさんの学びがありました。相手の学習 / 成長を促進できるように、フィードバックする際は下記のポイントを心がけました。</p>
            <ul>
              <li>・どんなプロセスで学習 / アウトプットをしたかに耳を傾ける</li>
              <li>・相手が何でつまずき、どうすれば次の壁を乗り越えられるかを一緒に考える</li>
              <li>・デザインの原理原則に基づき、理由を踏まえフィードバックする</li>
              <li>・知っていればできたこと、手を動かして気づくことの違いを明らかにする</li>
              <li>・デザインする際の視点、わからないことの調べ方、作業のプロセスに関して助言する</li>
            </ul>
          </Content>
        </Section>


        <ArticleRecommend page={this.state.page}/>
      </Layout>
    )
  }
}
