import React, { Fragment } from 'react';
import Header from './heder/Header';
import Head from 'next/head';
import Socials from './Socials';
import Sidebar from './Sidebar';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";

// グローバルなスタイル
const GlobalStyle = createGlobalStyle` 
  body {
    margin: 0;
    background: #fff;
    font-family: 'Avenir', 'Yugothic', 'Hiragino Sans'  'Noto Sans JP';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  .link:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  p {
    font-size: 17px;
    line-height: 1.8;
  }

  @media (max-width: 767px) {
    p {
      font-size: 16px;
    }

  }

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  a:visited {
    color: #000;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`;

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

const Layout = (props) => (
  <Fragment>
    <GlobalStyle />
    <Head>
      <title>mimizunoDesign</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
    </Head>
    <Header page={props.page} />
    <Sidebar/>

    <ContentWrapper>
      {props.children}
    </ContentWrapper>

    <Socials/>
  </Fragment>
);

export default Layout
