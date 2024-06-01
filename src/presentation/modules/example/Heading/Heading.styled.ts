import { theme } from "@/presentation/external/styled/theme";
import styled from "styled-components";

type FontSizeKeys = keyof typeof theme.font.sizes;

export interface TitleProps {
  children?: React.ReactNode
  colorDark?: boolean;
  as?: string; 
  size: FontSizeKeys; 
  uppercase?: boolean; 
}

export const Title = styled.h1<TitleProps>`
    color: ${ (props) => props.colorDark ? theme.colors.primary : theme.colors.white};
    font-size: ${(props) => theme.font.sizes[props.size]};
`;
