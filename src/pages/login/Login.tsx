import { Column } from 'components';
import { Footer } from 'pages/root/Footer';
import { Header } from 'pages/root/Header';
import { Logger } from 'pages/shared/Logger';
import React from 'react';

//import './Login.scss';


interface LoginProps {

}
export const Login = (props: LoginProps) => {
    return <Column>
        <Header />
        <Logger />
        <Footer />
    </Column>
}

export {Login as default};