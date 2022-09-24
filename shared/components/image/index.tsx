import styled from "styled-components"

export interface imageprops {
    src?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderradius?: string;
}

const Image = styled.img<imageprops>`
src: ${({ src }) => src};
width: ${({ width }) => width};
height: ${({ height }) => height};
margin: ${({ margin }) => margin};
padding: ${({ padding }) => padding};
border: ${({ border }) => border}
border-radius: ${({ borderradius}) => borderradius}`;

export default Image;
