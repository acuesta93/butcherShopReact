import { Column } from 'components';
import { Footer } from 'pages/root/Footer';
import { Header } from 'pages/root/Header';
import { ProductFilter } from 'pages/shared/ProductFilter';
import React from 'react';


interface TopSalesPageProps {

}

export const TopSales = (props: TopSalesPageProps) => {
    return <Column className='topsales-page'>
        <Header />
        <ProductFilter />
        <Footer />
    </Column>
}

export { TopSales as default};