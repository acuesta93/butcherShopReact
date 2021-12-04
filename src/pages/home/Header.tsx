import React from 'react';
import './Header.scss';
import { Row } from 'components';

enum HeaderOptionEnum {
  Offers = 'offers',
  TopSales = 'top-sales',
  Explore = 'explore'
}

interface HeaderProps {

}
export const Header = (props: HeaderProps) => {

  const onOptionClick = (option: HeaderOptionEnum) => {
    switch(option) {
      case HeaderOptionEnum.Offers: {

        break;
      }
      case HeaderOptionEnum.TopSales: {
        break;
        
      }
      case HeaderOptionEnum.Explore: { 
           break;
        
      }
    }
  }

    return <Row className='header'>
      <HeaderOption label='Offers' option={HeaderOptionEnum.Offers} onOptionClick={onOptionClick} />


      <HeaderOption label='Top sales' option={HeaderOptionEnum.TopSales} onOptionClick={onOptionClick} />
      <HeaderOption label='Explore' option={HeaderOptionEnum.Explore} onOptionClick={onOptionClick} />
    </Row>
}

interface HeaderOptionProps {
  label: string;
  option: HeaderOptionEnum
  onOptionClick(option: HeaderOptionEnum): void;
}
const HeaderOption = (props: HeaderOptionProps) => {

  return <Row className='header-option' onClick={() => props.onOptionClick(props.option)} >
    <span className='header-option-label'>{props.label}</span>
  </Row>
}