import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    	margin: 0;
    	padding: 0;
    	border: 0;
    	font-size: 100%;
    	font: inherit;
    	vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
    	display: block;
    }
    body {
    	line-height: 1;
    }
    ol, ul {
    	list-style: none;
    }
    blockquote, q {
    	quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    	content: '';
    	content: none;
    }
    table {
    	border-collapse: collapse;
    	border-spacing: 0;
    }
    #root {
        width: 100%;
        height: 100%;
        font-family: 'Inter';
    }

    .heading-base, 
    .heading-1-700,
    .heading-2-600,
    .heading-3-600,
    .heading-3-500,
    .heading-4-600,
    .heading-4-500,
    .heading-5-600,
    .heading-5-500,
    .heading-6-600,
    .heading-6-500,
    .heading-7-600,
    .heading-7-500
    {
        font-family: 'Lexend', sans-serif;
        color: var(--grey-1)
    }

    .heading-1-700 {
        font-weight: 700;
        font-size: 44px;
        line-height: 56px;
    }

    .heading-2-600 {
        font-weight: 600;
        font-size: 36px;
        line-height: 45px;
    }

    .heading-3-600 {
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
    }

    .heading-3-500 {
        font-weight: 500;
        font-size: 32px;
        line-height: 40px;
    }

    .heading-4-600 {
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
    }

    .heading-4-500 {
        font-weight: 500;
        font-size: 28px;
        line-height: 35px;
    }

    .heading-5-600 {
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
    }

    .heading-5-500 {
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
    }

    .heading-6-600 {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
    }

    .heading-6-500 {
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
    }

    .heading-7-600 {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
    }

    .heading-7-500 {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }

    .body-base,
    .body-1-400,
    .body-1-600,
    .body-2-400,
    .body-2-500,
    .button-big-text,
    .button-medium-text,
    .input-placeholder,
    .input-label
    {
        font-family: 'Inter', sans-serif;
        color: var(--grey-2)
    }

    .body-1-400{
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
    }

    .body-1-600{
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
    }

    .body-2-400{
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
    }

    .body-2-500{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }

    .button-big-text{
        font-weight: 600;
        font-size: 16px;
    }

    .button-medium-text{
        font-weight: 600;
        font-size: 14px;
    }

    .input-placeholder{
        font-weight: 400;
        font-size: 16px;
    }

    .input-label{
        font-weight: 500;
        font-size: 14px;
        line-height: 16.94px;
    }
    
    .App {
        height: 100%;
    }

`;

export default GlobalStyle;
