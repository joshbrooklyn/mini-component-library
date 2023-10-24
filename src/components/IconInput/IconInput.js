import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  if (size === "large")
  {
    return(
      <Wrapper style={{'--wrapper-width':width + 'px'}}>
        <IconWrapper>
          <Icon id={icon} size={24}/>
        </IconWrapper>
        <LargeInput placeholder={placeholder} />      
      </Wrapper>
    );
  }
  else
  {
    return(
      <SmallWrapper style={{'--wrapper-width':width + 'px'}}>
        <IconWrapper>
          <Icon id={icon} size={16}/>
        </IconWrapper>
        <SmallInput  placeholder={placeholder}/>      
      </SmallWrapper>
    );
  }
};

const IconWrapper = styled.div`
  margin:0;
  position:absolute;
  top: 50%;
  transform: translateY(-50%);
  border:0;
`

const Wrapper = styled.div`
  width:var(--wrapper-width);
  border-bottom:2px solid black;
  height:36px;
  position:relative;
  padding-top:7px;

`

const SmallWrapper = styled(Wrapper)`
  height:24px;
  border-bottom:1px solid black;
  padding-top:4px;
`

const LargeInput = styled.input`
  outline: none;
  border:0;
  padding:0;
  margin:0;
  width:100%;
  position:absolute;
  left:36px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;  
  color: hsba(0, 0%, 50%, 1);

 
  &::placeholder {
    font-weight:300;
  }

  &::-ms-input-placeholder { /* Edge 12 -18 */
    font-weight:300;
  }
`

const SmallInput = styled(LargeInput)`
  font-size: 14px;
  line-height: 16px;
  left: 24px;
`

export default IconInput;
