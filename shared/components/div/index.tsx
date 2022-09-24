import React from "react";
import styled from "styled-components";

export interface divProps {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    letterSpacing?: string;
    lineHeight?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    margin?: string;
    padding?: string;
}

const Div = styled.div<divProps>`
color: ${({ color }) => color};
font-size: ${({ fontSize }) => fontSize};
font-weight: ${({ fontWeight }) => fontWeight};
letter-spacing: ${({ letterSpacing }) => letterSpacing};
line-height: ${({ lineHeight }) => lineHeight};
display: ${({ display }) => display};
justify-content: ${({ justifyContent }) => justifyContent};
align-items: ${({ alignItems }) => alignItems};
flex-direction: ${({ flexDirection }) => flexDirection};
margin: ${({ margin }) => margin};
padding: ${({ padding }) => padding};`;

export default Div;