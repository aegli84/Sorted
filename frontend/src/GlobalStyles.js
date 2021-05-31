import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #cdced0;
}

html {
    overflow-x:  hidden;
}
`
export default GlobalStyles;