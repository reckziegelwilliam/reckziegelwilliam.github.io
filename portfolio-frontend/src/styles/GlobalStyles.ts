import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #011936;
    --secondary-color: #465362;
    --tertiary-color: #82A3A1;
    --quaternary-color: #9FC490;
    --quinary-color: #C0DFA1;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: radial-gradient(circle, var(--primary-color), white);
    color: white; /* Body Font White */
    line-height: 1.6;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin-bottom: 30px; /* Increased Padding */
    color: var(--quaternary-color); /* Titles Color */
  }

  button {
    cursor: pointer;
    background-color: var(--quinary-color); /* Button Color */
    border: none;
    padding: 15px 20px; /* Increased Padding */
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;
