import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Section from '../styledComponents/section'

import LazyLoad from 'react-lazyload';

const Heading = styled.div`
  //padding-top: 20px;
  text-align: center;
  
  h2 {
    font-size: 36px;
    margin-bottom: 15px;
  }

  h4 {
    color: #999999;
    font-size: 16px;
    margin-bottom: 40px;
  }
  
  p.section__desc {
    margin-bottom: 50px;
    text-align: left;
  }
  
  a {
    text-decoration: underline;
  }
  
  @media (max-width: 767px) {
    //padding-top: 80px;
  }
`;


const CardList = styled.ul`
  //border-bottom: 1px solid #B5B6B7;
`;

const Card = styled.li`
  display: inline-block;
  width: 50%;
  box-sizing: border-box;

  &:nth-child(odd) {
    padding-right: 20px;
    margin-bottom: 50px;
  }

  &:nth-child(even) {
    padding-left: 20px;
    margin-bottom: 50px;
  }
  
  &:hover {
    opacity: 0.6;
    cursor: pointer;
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
    padding-top: 80px;

    &:nth-child(odd) {
      padding: 0;
      margin-bottom: 50px;
    }

    &:nth-child(even) {
      padding: 0;
      margin-bottom: 50px;
    }
  }
`;

const ThumbnailWrapper = styled.div `
  height: 270px;
  background: #d8d8d8;
  margin-bottom: 15px;
  
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

export default class Baseconnecct extends React.Component {
  state = {
    pageStatus: 'top'
  };

  render () {
    return (
      <Section grey border>
        <Heading>
          <h2>Baseconnect Inc.</h2>
          <h4>2017/10 - 2020/03</h4>
          <p className="section__desc">UI/UXデザイナーとして、法人営業を支援する企業情報データベース「<a href="https://sales.baseconnect.in/" target="_blank">Baseconnect LIST </a>」の開発を主に担当。
            また、同サービスの根幹となる会社情報を提供する「<a href="https://baseconnect.in/" target="_blank">Baseconnect</a>」のユーザー側および管理画面の機能改善、デザイン未経験者を対象とした「DesignBootcamp」の運営も行う。</p>
        </Heading>
        <CardList>
          <Link href="/baseconnect/baseconnectLp">
              <Card>
                <ThumbnailWrapper>
                  
                    <Thumbnail src="/static/image/work/baseconnect-lp.jpg"/>
                  
                </ThumbnailWrapper>
                <p className="title">Baseconnect LIST LP</p>
                <span className="type">UIデザイン、コーディング</span>
              </Card>
          </Link>

          <Link href="/baseconnect/baseconnectList">
              <Card>
                  <ThumbnailWrapper>
                    
                      <Thumbnail src="/static/image/work/baseconnect-list.jpg"/>
                    
                  </ThumbnailWrapper>

                <p className="title">Baseconnect LIST</p>
                <span className="type">UI/UXデザイン、コーディング</span>
              </Card>
          </Link>

          <Link href="/baseconnect/baseconnectBootcamp">

              <Card>
                  <ThumbnailWrapper>
                    
                      <Thumbnail src="/static/image/work/baseconnect-bootcamp.png"/>
                      
                  </ThumbnailWrapper>
                <p className="title">DesignBootcamp</p>
                <span className="type">企画、採用</span>
              </Card>

          </Link>
          <Link href="/baseconnect/baseconnectDashboard">

              <Card>
                  <ThumbnailWrapper>
                    
                      <Thumbnail src="/static/image/work/baseconnect-dashboard.jpg"/>
                      
                  </ThumbnailWrapper>
                <p className="title">Dashboard</p>
                <span className="type">ブランディング</span>
              </Card>

          </Link>
        </CardList>
      </Section>
    )
  }
}
