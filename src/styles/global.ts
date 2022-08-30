import { createGlobalStyle } from "styled-components";

import MontserratWoff from "../fonts/montserrat-v25-latin-regular.woff";
import MontserratWoff2 from "../fonts/montserrat-v25-latin-regular.woff2";

import RobotoWoff from "../fonts/roboto-v30-latin-regular.woff";
import RobotoWoff2 from "../fonts/roboto-v30-latin-regular.woff2";

const GlobalStyle = createGlobalStyle`

:root {
	--color-background: #121214;
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-disable: #59323F;
  --color-gray-4: #121214;
  --color-gray-3: #212529;
  --color-gray-2: #343B41;
  --color-gray-1: #868E96;
  --color-gray-0: #F8F9FA;
	--color-success: #3FE864;
	--color-negative: #E83F5B;
	--color-white: #fff;
}


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
	background-color: var(--color-background);
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

button {
	cursor: pointer;
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

`;

export default GlobalStyle;
