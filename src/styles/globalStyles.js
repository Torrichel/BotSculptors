import { createGlobalStyle } from 'styled-components';

import MainFontBold from '../assets/fonts/MainFontBold.woff2';
import MainFontMedium from '../assets/fonts/MainFontMedium.woff2';
import MainFontSemibold from '../assets/fonts/MainFontSemibold.woff2';
import MainFontText from '../assets/fonts/MainFontText.woff2';
import MainFontThin from '../assets/fonts/MainFontThin.woff2';
import MainFontUltralight from '../assets/fonts/MainFontUltralight.woff2';



export const GlobalStyles = createGlobalStyle`
  
    /* MainFontBold */
    @font-face {
      font-family: MainFontBold;
      src: url(${MainFontBold});
    }
    
   
    /* MainFontMedium */
    @font-face {
      font-family: MainFontMedium;
      src: url(${MainFontMedium});
    }
    
    /* MainFontSemibold */
    @font-face {
      font-family: MainFontSemibold;
      src: url(${MainFontSemibold});
    }
    
    /* MainFontText */
    @font-face {
      font-family: MainFontText;
      src: url(${MainFontText});
    }
    
    /* MainFontThin */
    @font-face {
      font-family: MainFontThin;
      src: url(${MainFontThin});
    }
    
    /* MainFontUltralight */
    @font-face {
      font-family: MainFontUltralight;
      src: url(${MainFontUltralight});
    }
    
    
    *{
      box-sizing: border-box;
      text-decoration: none;
    }
    
    html, body, #root{
      overflow-x: hidden;
      padding: 0;
      margin: 0;
    }
    
    
    
    
    .noscroll{
      overflow: hidden;
    }
    
    #root{
      overflow: hidden;
    }
    
    
    
    a{
      cursor: pointer;
      color: ${({theme}) => theme.titleColor};
    }
    
    *{
        box-sizing: border-box;
        text-decoration: none;
        font-family: MainFontText;
    }

  
  
  
`;