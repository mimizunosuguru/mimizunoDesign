import React from 'react';
import Link from 'next/link'
import styled from "styled-components";
import Section from './styledComponents/section'
import LazyLoad from 'react-lazyload';

const Heading = styled.p`
  font-size: 38px;
  color: #999999;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

const CardList = styled.ul`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const Card = styled.li`
  flex: 1;
  margin-right: ${props => props.left? 20 : ''}px;
  margin-left: ${props => props.right? 20 : ''}px;
  
  
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    line-height: 1;
  }
  
  .type {
    font-size: 16px;
    color: #999999;
    margin-top: 15px;
    line-height: 1;
  }
  
  @media (max-width: 767px) {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 25px;
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


const Recommend = (props) => {
  // work / page / storyで条件分岐
  return (
    <Section>
      <Heading>Other works</Heading>
        {props.page === 'lp' ?  (
          <CardList>
            <Link href="/baseconnect/baseconnectList">
              <Card left>
                <ThumbnailWrapper>
                  
                    <Thumbnail src="/static/image/work/baseconnect-list.jpg"/>
                  
                </ThumbnailWrapper>
                <p className="title">Baseconnect LIST</p>
                <p className="type">UI/UXデザイン、コーディング</p>
              </Card>
            </Link>
            <Link href="/baseconnect/baseconnectDashboard">
              <Card right>
                <ThumbnailWrapper>
                  
                    <Thumbnail src="/static/image/work/baseconnect-dashboard.jpg"/>
                  
                </ThumbnailWrapper>
                <p className="title">Dashboard</p>
                <p className="type">ブランディング</p>
              </Card>
            </Link>
          </CardList>
        ) : null
        }
      {props.page === 'hotpepper' ?  (
        <CardList>
          <Link href="/baseconnect/baseconnectBootcamp">
            <Card left>
              <ThumbnailWrapper>
                
                  <Thumbnail src="/static/image/work/baseconnect-bootcamp.png"/>
                
              </ThumbnailWrapper>
              <p className="title">DesignBootcamp</p>
              <p className="type">企画、採用</p>
            </Card>
          </Link>
          <Link href="/baseconnect/baseconnectDashboard">
            <Card right>
              <ThumbnailWrapper>
                
                  <Thumbnail src="/static/image/work/baseconnect-dashboard.jpg"/>
                
              </ThumbnailWrapper>
              <p className="title">Dashboard</p>
              <p className="type">ブランディング</p>
            </Card>
          </Link>
        </CardList>
      ) : null
      }
      {props.page === 'list' ?  (
        <CardList>
          <Link href="/personalWorks/hotpepperBeauty">
            <Card left>
              <ThumbnailWrapper>
                
                  <Thumbnail src="/static/image/work/personalWork_hotpepperBeauty2.jpg"/>
                
              </ThumbnailWrapper>
              <p className="title">Hotpepper Beauty Redesign</p>
              <p className="type">リデザインチャレンジ</p>
            </Card>
          </Link>
          <Link href="/baseconnect/baseconnectDashboard">
            <Card right>
              <ThumbnailWrapper>
                
                  <Thumbnail src="/static/image/work/baseconnect-dashboard.jpg"/>
                
              </ThumbnailWrapper>
              <p className="title">Dashboard</p>
              <p className="type">ブランディング</p>
            </Card>
          </Link>
        </CardList>
      ) : null
      }
      {props.page === 'bootcamp' ?  (
        <CardList>
          <Link href="/baseconnect/baseconnectDashboard">
            <Card right>
              <ThumbnailWrapper>
                
                  <Thumbnail src="/static/image/work/baseconnect-dashboard.jpg"/>
                
              </ThumbnailWrapper>
              <p className="title">Dashboard</p>
              <p className="type">ブランディング</p>
            </Card>
          </Link>
          <Link href="/baseconnect/baseconnectList">
            <Card right>
              <ThumbnailWrapper>
                
                  <Thumbnail src="/static/image/work/baseconnect-list.jpg"/>
                
              </ThumbnailWrapper>
              <p className="title">Baseconnect LIST</p>
              <p className="type">UI/UXデザイン、コーディング</p>
            </Card>
          </Link>
        </CardList>
      ) : null
      }
      {props.page === 'dashboard' ?  (
        <CardList>
          <Link href="/baseconnect/baseconnectList">
            <Card left>
              <ThumbnailWrapper>
                
                  <Thumbnail src="/static/image/work/baseconnect-list.jpg"/>
                
              </ThumbnailWrapper>
              <p className="title">Baseconnect LIST</p>
              <p className="type">UI/UXデザイン、コーディング</p>
            </Card>
          </Link>
          <Link href="/personalWorks/hotpepperBeauty">
            <Card right>
              <ThumbnailWrapper>
                
                  <Thumbnail src="/static/image/work/personalWork_hotpepperBeauty2.jpg"/>
                
              </ThumbnailWrapper>
              <p className="title">Hotpepper Beauty Redesign</p>
              <p className="type">リデザインチャレンジ</p>
            </Card>
          </Link>
        </CardList>
      ) : null
      }
    </Section>
  )
}

export default Recommend
