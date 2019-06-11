import { createGlobalStyle } from 'styled-components';

import MainFontBold from '../assets/fonts/MainFontBold.woff2';
import MainFontMedium from '../assets/fonts/MainFontMedium.woff2';
import MainFontSemibold from '../assets/fonts/MainFontSemibold.woff2';
import MainFontText from '../assets/fonts/MainFontText.woff2';
import MainFontThin from '../assets/fonts/MainFontThin.woff2';
import MainFontUltralight from '../assets/fonts/MainFontUltralight.woff2';



export const GlobalStyles = createGlobalStyle`
  
   
   //slick arrows
    .slick-next:before
    {
        content: ' ' !important;
    }
    [dir='rtl'] .slick-next:before
    {
        content: ' ' !important;
    }
    .slick-prev:before
    {
        content: ' ' !important;
    }
    [dir='rtl'] .slick-prev:before
    {
        content: ' ' !important;
    }
    .slick-dots li button:before{
      content: '•' !important;
    }
    
    .slick-slider {
    
    .slick-prev{
      left: -17px!important;
    }
    .slick-next{
      right: -18px!important;
    }
    
    .slick-next, .slick-prev{
        width: 34px;
        height: 34px;
        border: 2px solid #1F4C9D;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%; 
        z-index: 10;
    }
    

      .slick-next:before {

        color: #1F4C9D;
        
        
        display: block;

        border-right: 4px solid #1F4C9D; 
        border-bottom: 4px solid #1F4C9D;
        

        transform: rotate(-45deg);
        
            margin-left: 7px;
    border-right: 3px solid #1F4C9D;
    border-bottom: 3px solid #1F4C9D;
    height: 8px;
    width: 8px;
        
      }

      .slick-prev:before {
 
        margin-left: 12px;
            color: #1F4C9D;
        
        
        display: block;

        border-right: 3px solid #1F4C9D; 
        border-bottom: 3px solid #1F4C9D;
        
        height: 8px;
        width: 8px;
        transform: rotate(135deg);
        
      }
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