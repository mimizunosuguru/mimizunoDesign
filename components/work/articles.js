import React, { Fragment } from 'react'
import styled from 'styled-components'

import Section from "../styledComponents/section";
import LazyLoad from 'react-lazyload';

//article.jsと共通化可能
const Heading = styled.div`
  text-align: center;
  
  h2 {
    font-size: 36px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

const Content = styled.div`
  margin-bottom: 20px;
  
  h3 {
    font-size: 28px;
    font-weight: bold;
    border-left: 4px solid #000;
    padding-left: 20px;
    line-height: 40px;
    margin-bottom: 30px;
  }
`;

const CardWrapper = styled.ul`
  //margin-top: 30px;
`;

const Card = styled.li`
  display: inline-block;
  vertical-align: top;
  width: 33%;
  padding-right: 25px;
  margin-bottom: 40px;
  
  &:hover {
    opacity: 0.6;
    cursor: pointer; 
  }
  
  .thumbnail{
    height: 200px;
    margin-bottom: 15px;
    background: grey;
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation-name: fadein;
    animation-duration: 1s;  
    transition: all .75s ease;
    
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
  }

  .title{
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: bold;
  }
  
  .type{
    font-size: 16px;
    color: #999999;
  }
  
  
  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 50px;
    padding: 0;
    
    .title,
    .type {
      font-size: 15px;
    }
  }
`;

const ThumbnailWrapper = styled.div `
  height: 200px;
  margin-bottom: 15px;
  background: #d8d8d8;
 
  
  @media (max-width: 767px) {
    height: 200px;
  }
`;

const Thumbnail = styled.div `
  height: 100%;
  background: url(${props => props.src}) center;
  background-size: cover;
  animation-name: fadein;
  animation-duration: .75s;

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

const ShowMore = styled.div `
  display: flex;
  justify-content: center;
  margin: 30px 0;

  a {
    font-size: 24px;
    font-weight: bold;
  }
`;

export default class Articles extends React.Component {
  state = {
    pageStatus: 'top',
    showMore: false,
    note: [
      {
        title: 'ジョブ理論を理解する:イケアのビジネスモデルから',
        type: 'デザインブログ',
        imageURL: 'article--ikea.png',
        linkURL: 'https://note.mu/mimizunomizuno/n/n4d2f0feff8af'
      },
      {
        title: '英語を身につけるためにUXが教えてくれたこと',
        type: '翻訳',
        imageURL: 'article--uxLearn.jpeg',
        linkURL: 'https://link.medium.com/mRXiGzyKEV'
      },
      {
        title: '知っていると役立つ行動経済学 - おとり効果',
        type: 'デザインブログ',
        imageURL: 'article--behavial.jpg',
        linkURL: 'https://note.mu/mimizunomizuno/n/n4320dd178edc'
      }
    ],
    uxTimes: [
      {
        title: '「JOBS TO BE DONE」価値創造の新しい発見方法',
        type: 'カンファレンスレポート',
        imageURL: 'article--jobsToBeDone.png',
        linkURL: 'https://uxdaystokyo.com/articles/uxdt2018_conference_jtbd/'


      },
      {
        title: '逆ピラミッド',
        type: '用語集',
        imageURL: 'article--pylamid.png',
        linkURL: 'https://uxdaystokyo.com/articles/glossary/inverted-pyramid/'

      },
      {
        title: '問題発見できなければ、問題解決なんてできない',
        type: 'UX格言',
        imageURL: 'article--mondai.png',
        linkURL: 'https://uxdaystokyo.com/articles/find_problem_before_solution/'
      }
    ],
    uxTimesShowMore: [
      {
        title: 'カスタマージャーニーマッピング：顧客獲得への道のり',
        type: '翻訳',
        imageURL: 'article--journeyMapping.png',
        linkURL: 'https://uxdaystokyo.com/articles/googlecustomerjourneymapping/'
      },
      {
        title: 'ダンバー数',
        type: '用語集',
        imageURL: 'article--dumbar.png',
        linkURL: 'https://uxdaystokyo.com/articles/glossary/dunbars-number/'
      },
      {
        title: 'モジュール方式',
        type: '用語集',
        imageURL: 'article--module.png',
        linkURL: 'https://uxdaystokyo.com/articles/glossary/modularity/'
      },
      {
        title: 'ホーソン効果',
        type: '用語集',
        imageURL: 'article--hawthorne.jpg',
        linkURL: 'https://uxdaystokyo.com/articles/glossary/the-hawthorne-effect/'
      },
      {
        title: 'プライミング効果',
        type: '用語集',
        imageURL: 'article--priming.jpg',
        linkURL: 'https://uxdaystokyo.com/articles/glossary/primingeffect/'
      },
      {
        title: 'ダークパターン',
        type: '用語集',
        imageURL: 'article--darkPattern.jpg',
        linkURL: 'https://uxdaystokyo.com/articles/glossary/dark-pattern/'
      },
      {
        title: 'ワイヤーフレームは具体的要素とその配置を確認するもの',
        type: 'UX格言',
        imageURL: 'article--wireflame.jpg',
        linkURL: 'https://uxdaystokyo.com/articles/wireflame_for_check_item/'
      },
      {
        title: '心の理論',
        type: '用語集',
        imageURL: 'article--theoryOfMind.jpg',
        linkURL: 'https://uxdaystokyo.com/articles/glossary/theory-of-mind/'
      },
      {
        title: 'AI時代における倫理（ETHICS IN THE AI AGE ',
        type: 'カンファレンスレポート',
        imageURL: 'article--report2017.jpg',
        linkURL: 'https://uxdaystokyo.com/articles/ethics-ai-age/'
      },
    ]
  };

  clickShowMore = () => {
    this.setState({showMore: true})
  };

  render () {
    return (
      <Section grey border>
        <Heading>
          <h2>Articles</h2>
        </Heading>

        <Content>
          <h3>BLOG</h3>
          <CardWrapper>
            {this.state.note.map((data, i) => {
              return (
                //TODO key降る必要あり
                <Card key={i}>
                  <a href={data.linkURL} target="_blank">
                    <ThumbnailWrapper>
                      
                        <Thumbnail src={"/static/image/article/" + data.imageURL} />
                      
                    </ThumbnailWrapper>
                    <p className="title">{data.title}</p>
                    <span className="type">{data.type}</span>
                  </a>
                </Card>
              )
            })}
          </CardWrapper>
        </Content>

        <Content>
          <h3>UX TIMES</h3>
            <CardWrapper>
              {this.state.uxTimes.map((data, i) => {
                return (
                  <Card key={i}>
                    <a href={data.linkURL} target="_blank">
                      <ThumbnailWrapper>
                        
                          <Thumbnail src={"/static/image/article/" + data.imageURL} alt=""/>
                        
                      </ThumbnailWrapper>
                      <p className="title">{data.title}</p>
                      <span className="type">{data.type}</span>
                    </a>
                  </Card>
                )
              })}
            </CardWrapper>
          { this.state.showMore ? (
            <CardWrapper>
              {this.state.uxTimesShowMore.map((data, i) => {
                return (
                  <Card key={i}>
                    <a href={data.linkURL} target="_blank">
                      <ThumbnailWrapper>
                        
                          <Thumbnail src={"/static/image/article/" + data.imageURL} alt=""/>
                        
                      </ThumbnailWrapper>
                      <p className="title">{data.title}</p>
                      <span className="type">{data.type}</span>
                    </a>
                  </Card>
                )
              })}
            </CardWrapper>
          ) : (
            <ShowMore>
              <a className="showMore__text" onClick={this.clickShowMore}>Show more</a>
            </ShowMore>
          )}
        </Content>
      </Section>
    )
  }
}
