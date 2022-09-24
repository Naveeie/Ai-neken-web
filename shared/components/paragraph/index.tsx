import styled from "styled-components";

export interface pTagProps {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    textAlign?: string;
    margin?: string;
    padding?: string;
    lineHeight?: string;
    letterSpacing?: string;
    border?: string;
    borderradius?: string;
}

const Paragraph = styled.p<pTagProps>`
color: ${({ color }) => color};
text-align: ${({ textAlign }) => textAlign};
font-size: ${({ fontSize }) => fontSize};
font-weight: ${({ fontWeight }) => fontWeight};
line-height: ${({ lineHeight }) => lineHeight};
letter-spacing: ${({ letterSpacing }) => letterSpacing};
margin: ${({ margin }) => margin};
padding: ${({ padding }) => padding};
border: ${({ border }) => border}
border-radius: ${({ borderradius}) => borderradius}
`;

export default Paragraph;
