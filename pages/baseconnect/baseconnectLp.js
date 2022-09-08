import React from "react";
import styled from 'styled-components'
import Layout from "../../components/Layout";
import Section from '../../components/styledComponents/section'
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
`

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
    margin: 0 auto;
  }
    
  span {
    display: block; 
    font-size: 15px;
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

export default class LP extends React.Component {
  state = {
    page: 'lp'
  };

  render () {
    return (
      <Layout>
        <TopImage src="/static/image/work/baseconnect-lp.jpg"/>
          <Section grey>
            <Top>
              <div className="inner">
                <Title>
                  <h2>Baseconnect LIST LP</h2>
                  {/*<a href="https://sales.baseconnect.in/" target="blank">https://sales.baseconnect.in/</a>*/}
                  <p>
                    法人営業を支援する企業情報データベース「Baseconnect LIST」のLP（ランディングページ）です。
                    クラウドサービスのBaseconnecct LISTはアプリのダウンロードも必要なく、登録後すぐにサービスの利用を開始できます。
                  </p>
                </Title>
                <Desc>
                  <li>
                    <p className="title">URL</p>
                    <a href="https://sales.baseconnect.in/" target="blank" className="cont">https://sales.baseconnect.in/</a>
                  </li>
                  <li>
                    <p className="title">担当</p>
                    <p className="cont">UIデザイン / コーディング（HTML / CSS/ jQuery）</p>
                  </li>
                </Desc>
              </div>
            </Top>

            <Content>
              <h3>アウトプット</h3>
              <p>ランディングページのリニューアルにあたり、デザインからマークアップ（HTML/CSS/jQuery）まで担当しました。</p>
              <Image>
                <img src="/static/image/work/lp/output1.png" alt=""/>
              </Image>
              {/* 
              <h4>担当したデザイン</h4>
              <Image>
                <img src="/static/image/work/lp/output2.png" alt=""/>
              </Image>

              <h3>デザインプロセス</h3>
              <p>「Baseconnect LIST」の開発を担当した当時はβ版でのリリースになっていたため、サービスの肝となる企業情報の数が十分ではありませんでした。</p>

              <p>この問題を解決するため要件として挙げられたのが「リアルタイムで企業情報が作成中であることをユーザーに知らせる」であり、<b>「ダッシュボード・掲示板」を想起させるグラフィック</b>を取り入れることで、課題解決にアプローチしました。</p>
              <Image>
                <img src="/static/image/work/lp/lp-capture1.png" alt=""/>
                <span>（「ダッシュボード・掲示板」を想起させるグラフィックで表現）</span>
              </Image>

              <p>もう1つのサービスの課題は、企業情報のデータ作成は主に関西と関東が中心であり、地域ごとのデータ数にばらつきがあることでした。</p>
              <p>そのため、サービスの導入を検討するユーザーが懸念する「自分が営業したい会社の情報はあるか？」に答えるため、<b>企業情報が多い都道府県をランキング形式で一覧表示</b>にしました。</p>

              <Image>
                <img src="/static/image/work/lp/lp-capture2.png" alt=""/>
                <span>企業情報が多い都道府県をランキング形式で一覧表示</span>
              </Image>

              <p>モバイルでの表示は、グリッドレイアウトでレスポンシブに対応しています。</p>
              <Image>
                <img src="/static/image/work/lp/lp-capture4.png" alt=""/>
              </Image>
              */} 
            </Content>
          </Section>
        <ArticleRecommend page={this.state.page}/>
      </Layout>
    )
  }
}
