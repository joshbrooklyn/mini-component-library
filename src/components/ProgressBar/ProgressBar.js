/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--padding":"0",
    "--height":"8px",
    "--radius":"4px",
    "--inner-radius":"2px 0px 0px 2px"
  },
  medium: {
    "--padding":"0",
    "--height":"12px",
    "--radius":"4px",
    "--inner-radius":"2px 0px 0px 2px"
  },
  large: {
    "--padding":"4px",
    "--height":"24px",
    "--radius":"8px",
    "--inner-radius":"4px 0px 0px 4px"
  }    
};

const ProgressBar = ({ value, size }) => {
  const STYLE = {
    "--width": value + "%"
  };
  
  return( 
    <Wrapper 
      aria-valuenow="${value}" 
      aria-valuemin="0" aria-valuemax="100" 
      aria-labelledby="progress-bar" 
      style={SIZES[size]}>
        <Bar aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" style={STYLE}></Bar>        
    </Wrapper>
  );
};

const Wrapper = styled.div
`
  padding: var(--padding);
  width: 370px;
  height: var(--height);
  border: 0;
  border-radius: var(--radius);  
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  color:${COLORS.primary};
  overflow:hidden;
`;

const Bar = styled.div
`
  height: 100%;
  //box-sizing: border-box;
  border: 0;
  border-radius: var(--inner-radius);
  background-color: currentColor;
  width:var(--width);  
`;

export default ProgressBar;
