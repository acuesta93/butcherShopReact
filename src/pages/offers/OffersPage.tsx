import { Column, Row } from 'components';
import { Card } from 'components/Card';
import { Footer } from 'pages/root/Footer';
import { Header } from 'pages/root/Header';
import { ProductFilter } from 'pages/shared/ProductFilter';
import React from 'react';

import './OffersPage.scss';


interface OffersPageProps {

}
export const OffersPage = (props: OffersPageProps) => {
    return <Column className='offers-page'>
        <Header />
        <ProductFilter />
        <Row>
            <Card />
            <Card />
            <Card />
            <Card />
        </Row>

        <Footer />
    </Column>
    
}

export { OffersPage as default };
