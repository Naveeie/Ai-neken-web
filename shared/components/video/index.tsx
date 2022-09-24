import styled from 'styled-components';

export interface videoProps {
    src?: string;
    height?: string;
    width?: string;
}

const Video = styled.video<videoProps>`
src: ${({ src }) => src};
height: ${({ height }) => height};
width: ${({ width }) => width};`

export default Video;