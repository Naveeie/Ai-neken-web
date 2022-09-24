import React from "react";
import styled from "styled-components";

export interface buttonProps {
    alignItems?: string;
    color?: string;
    bgColor?: string;
    width?: string;
    display?: string;
    justifyContent?: string;
    padding?: string;
    margin?: string;
    fontSize?: string;
    border?: string;
    borderRadius?: string;
}

const Button = styled.button<buttonProps>`
    display: ${({ display }) => display};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    color: ${({ color }) => color};
    background: ${({ bgColor }) => bgColor};
    width: ${({ width }) => width};
    padding: ${({ padding }) => padding};
    margin: ${({ margin }) => margin};
    font-size: ${({ fontSize }) => fontSize};
    border: ${({ border }) => border};
    border-radius: ${({ borderRadius }) => borderRadius};
`;

const ButtonComponent = (props: any) => {
  const {
    text,
    onClick,
    disabled,
  } = props;
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;