import React from 'react';

import { Column } from 'components';

import { HomeContent } from './HomeContent';

import { Footer } from 'pages/root/Footer';
import { Header } from 'pages/root/Header';

import './HomePage.scss';
    
export const HomePage = () => {
    return <Column className='home-page'>
        <Header />
        <HomeContent/>
        <Footer />
      </Column>            
}

export {HomePage as default} 