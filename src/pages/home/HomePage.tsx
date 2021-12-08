import React from 'react';

import { Button, Row, Column } from 'components';

import { Header } from './Header';

import './HomePage.scss';
import { Footer } from 'pages/root/Footer';
import { HomeContent } from './HomeContent';
    
export const HomePage = () => {
    return <Column className='home-page'>
        <Header />
        <HomeContent/>
        <Footer />
      </Column>

            
}
