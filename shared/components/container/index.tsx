import styled from "styled-components";

export interface containerProps {
    alignItems?: string;
    color?: string;
    bgColor?: string;
    width?: string;
    height?: string;
    display?: string;
    justifyContent?: string;
    padding?: string;
    margin?: string;
    border?: string;
    bgImage?: string;
    bgSize?: string;
    bgPosition?: string;
    minHeight?: string;
    opacity?: string;
    flexDirection?: string;
}

const Container = styled.div<containerProps>`
    display: ${({ display }) => display};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    color: ${({ color }) => color};
    background-color: ${({ bgColor }) => bgColor};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: ${({ padding }) => padding};
    margin: ${({ margin }) => margin};
    border: ${({ border }) => border};
    background-image: url(${({ bgImage }) => bgImage});
    background-position: ${({ bgPosition }) => bgPosition};
    background-size: ${({ bgSize }) => bgSize};
    min-height: ${({ minHeight }) => minHeight};
    opacity: ${({ opacity }) => opacity};
    flex-direction: ${({ flexDirection }) => flexDirection};
`;

export default Container;
