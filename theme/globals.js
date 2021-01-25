import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};}`;
