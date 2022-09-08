import { createGlobalStyle } from "styled-components";
import MontserratWoff from "../fonts/montserrat-v25-latin-regular.woff";
import MontserratWoff2 from "../fonts/montserrat-v25-latin-regular.woff2";
import RobotoWoff from "../fonts/roboto-v30-latin-regular.woff";
import RobotoWoff2 from "../fonts/roboto-v30-latin-regular.woff2";
const GlobalStyle = createGlobalStyle`

	::-webkit-scrollbar {
    width: 12px;
		background-color: transparent;
  }

	::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.colors.lightGrey};
		border: 3px solid ${(props) => props.theme.colors.lightGrey};
	}

	
/* 
ROOT NAO EXISTE MAIS POR CAUSA DO DARK MODE. USE AS PROPS NO LUGAR DAS VARIAVEIS TAL COMO ABAIXO: 
EXEMPLO:
${(props) => props.theme.colors.lightGrey};

	 :root {
		--lightGreyBackground: #f7f7f7;
		--lightGrey: #D9D9D9;
		--grey: #979797;
		--darkGrey: #2F2F2F;
		--blue: #4169E1;
		--lightGreen: #caffb0;
		--green: #83C067;
		--greenOpacity: #9ccd85;
		--red: #FF2525;
		--redOpacity: #ff5959;
		--redSpan: #d50000;
		--orange: #E84500;
	}    */

	@font-face {
	font-family: 'Montserrat';
	src: url(${MontserratWoff}) format('woff'),
		url(${MontserratWoff2}) format('woff2');
	}

	@font-face {
	font-family: 'Roboto';
	src: url(${RobotoWoff}) format('woff'),
		url(${RobotoWoff2}) format('woff2');
	}

	body {
		height: 100vh;
		width: 100vw;
		background-color:  ${(props) => props.theme.colors.backgroundGeneral};
	}

	select {
		background-color:  ${(props) => props.theme.colors.backgroundInput}; }

	input, textarea {
		background-color:  ${(props) => props.theme.colors.backgroundInput};
		color: ${(props) => props.theme.colors.textGeneral};

		::placeholder {
			color:  ${(props) => props.theme.colors.placeholder};
		}
	}


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
	time, mark, audio, video, input, button, select, option {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif ;
		font-size: 1rem;
	}

	button{
		cursor: pointer;
		background-color: transparent;
		border: none;
		border-radius: 8px;
	}

	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ul,ol {
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
		button{
        background-color: transparent;
        border: none;
        border-radius: 8px;
				font-family: "Montserrat";
    }

		/* HTML5 display-role reset for older browsers */
		article, aside, details, figcaption, figure, 
		footer, header, hgroup, menu, nav, section {
			display: block;
		}
		body {
			line-height: 1;
			overflow-x: hidden;
		}
		ul,ol {
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
`;

export default GlobalStyle;
