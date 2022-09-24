import styled, { keyframes } from 'styled-components';
import * as animations from 'react-animations';
import { get } from 'lodash';

export interface animationProps {
  animationName?: string;
  animationDuration?: string;
  animationIterationCount?: string;
};

const Animation = styled.div<animationProps>`
  animation-name: ${({ animationName }) => keyframes(get(animations, `${animationName}`, ''))};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-iteration-count: ${({ animationIterationCount }) => animationIterationCount};
`;

export default Animation;