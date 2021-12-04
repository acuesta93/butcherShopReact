import React from 'react';

import './Flex.scss';


type FlexProps =  React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Row = (props: FlexProps) => {
  const { className, children, ...nativeProps } = props;
  
  return <div className={`flex-row ${className ?? ''}`} {...nativeProps}>{children}</div>    
}


export const Column = (props: FlexProps) => {
  const { className, children, ...nativeProps } = props;
  
  return <div className={`flex-column ${className ?? ''}`} {...nativeProps}>{children}</div>    
}

