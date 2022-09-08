import React from "react";
import Layout from "../components/Layout";
import styled from 'styled-components'

import Baseconnect from '../components/work/baseconnect';
import Articles from  '../components/work/articles';
import PersonalWork from  '../components/work/personalWork';
import Section from '../components/styledComponents/section'
import Link from 'next/link'

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

const Top = styled.div`
  padding-top: 50px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    font-family: 'Avenir';
    font-size: 40px;
    font-weight: bold;
    color: #999999;
    text-align: center;
  }
  
  a {
    color: #000000;
    text-decoration: underline;
    padding: 0 3px;
  }
  
  @media (max-width: 767px) {
    padding-top: 70px;
    height: 350px;
    
    p {
      font-size: 30px;
      line-height: 1.7;
    }
  }
`

export default class Work extends React.Component {
  render () {
    return (
      <Layout page="index">
        <ContentWrapper>
          <Section grey border>
            <Top>
              <p>
                I’m <Link href="/about"><a href="">Sugu Mizuno</a></Link>, UI/UX Designer,<br/>
                at Yahoo! JAPAN in Tokyo
              </p>
            </Top>
          </Section>
          <Baseconnect/>
          <PersonalWork/>
          <Articles/>
        </ContentWrapper>
      </Layout>
    )
  }
}
