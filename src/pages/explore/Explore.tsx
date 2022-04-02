import { Column } from 'components';
import { Footer } from 'pages/root/Footer';
import { Header } from 'pages/root/Header';
import { ProductFilter } from 'pages/shared/ProductFilter';
import React from 'react';



interface ExplorePageProps {

}
export const  Explore = (props: ExplorePageProps) => {
    return <Column>
    <Header />
    <ProductFilter />
    <Footer />
    </Column>
}

export {Explore as default};