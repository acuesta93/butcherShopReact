import { Row } from 'components';
import React from 'react';
import { Carrousel } from './Carrousel';

import './HomeContent.scss';


interface HomeContentProps {

}
export const HomeContent = (props: HomeContentProps) => {
    return <Row><Carrousel /></Row>
}

