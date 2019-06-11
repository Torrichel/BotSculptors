import styled from 'styled-components';


export const Wrapper = styled.header`

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  
  
  

 

  
  

 
  

`;


export const HeaderFirstLine = styled.div`



    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0 ${props => props.theme.contentPaddingDesktop};
    height: 41px;
    background: ${props => props.theme.headerFirstLineColor};
    z-index: 50;
    
    
  
    
    
     ${({theme}) => theme.tablet`
        padding: 0 ${props => props.theme.contentPaddingTablet};
     `}
     
     ${({theme}) => theme.mobile`
        padding: 0 ${props => props.theme.contentPaddingMobile};
        height: 60px;
     `}
     
     
     
       &.fixed{
    
    
    
          ${({theme}) => theme.mobile`

          position: fixed;
          top: 0;
          left: 0;
    
          .menu.show{
           
            display: block!important;
          }
          
          
      `}
      
      ${({theme}) => theme.tablet`
          position: fixed;
          top: 0;
          left: 0;
      `}
    
    
  }


`;


export const NavBlock = styled.div`

      display: flex;
      justify-content: space-around;
      align-items: center;


      i{
        display: none;
        cursor: pointer;
        color: #000;
        font-size: 35px;
        
        ${({theme}) => theme.mobile`
            display: flex;
        `}


      }



      .menu{
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 30px;

        ${({theme}) => theme.mobile`
          display: none;
          justify-content: space-around;
          align-items: center;
          z-index: 999;
          flex-flow: column;
          background: ${theme.headerFirstLineColor};
          width: 100%;
          height: 100%;
          position: fixed;
          top: 60px;
          left: 0;
        `}


        a{
          
            margin: 20px ${props => props.theme.contentPaddingMobile};
            display: block;
            color: #000000;
            font-family: "Open Sans";
            font-size: 14px;
            font-weight: 400;
            letter-spacing: -0.35px;
        }

        a:last-child{
          margin-right: 0;
        }
      }


      .menu.show{
        display: grid!important;
      }

`;




export const HeaderSecondLine = styled.div`


    z-index: 51;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 ${props => props.theme.contentPaddingDesktop};
    height: 90px;
    background: #fff;
    
    
    
    .logo_section{
      display: flex;
      height: 100%;

      .sub_section_1{

        .logo{
          display: flex;
          height: ${props => props.theme.logoHeight};
          margin-top: -30px;


        
          
              ${({theme}) => theme.mobile`
                    position: absolute;
            top: 7px;
            left: $content-padding-mobile;
            margin: 0;
            height: 45px;
    `}

          img{
            height: 100%;
          }

        }

      }
      .sub_section_2{
        text-decoration: none;
        padding-left: 30px;
        padding-top: 13px;
        

        
      ${({theme}) => theme.mobile`
        display: none;
      `}

        .title{
            width: 200px;
            color: ${props => props.theme.titleColor};
            font-family: "Open Sans";
            font-weight: 300;
            letter-spacing: -0.75px;
            font-size: 30px;
            margin-left: -1.5px;
            
            b{
              font-family: inherit;
                font-weight: 600;
                letter-spacing: -0.75px;
            }
          
        }
        .slogan{
            font-size: 14px;
            color: ${props => props.theme.sloganColor};
            font-family: "Open Sans";
            font-weight: 400;
            letter-spacing: -0.35px;
        }
      }

    }

    .navBlock{

      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 710px;
      
      

      .fill_brief, .get_quote{
        border: 2px solid #d5d9de;
        padding: 7px 17px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        //color: $title_color;
        cursor: pointer;
        font-size: pt-to-px(14);
      }

      .get_quote{
        //border-color: $title_color;
        color: #fff;
        //background: $title_color;
        margin-left: 18px;
      }

      .phone{
        margin-left: 50px;
        font-size: 16px;
        img{
          width: 17px;
          margin-right: 3px;
          margin-bottom: 2px;
        }
      }

      .language{
        display: flex;

        span{
          padding: 3px 6px;
          cursor: pointer;
          //color: $slogan_color;
        }

        .active{
          //background: $title_color;
          color: #fff;
          display: flex;
        }
      }


    }


    
    ${({theme}) => theme.mobile`
        height: 0;
        padding: 0 ${props => props.theme.contentPaddingMobile};
    `}
    
    ${({theme}) => theme.tablet`
        padding: 0 ${props => props.theme.contentPaddingTablet};
    `}
    
    
    &.fixed{
    
    
    
        ${({theme}) => theme.mobile`
      position: fixed;
      top: 0;
      left: 0;

      .menu.show{
        display: block!important;
      }
    `}
    
    ${({theme}) => theme.tablet`
              position: fixed;
      top: 0;
      left: 0;
    `}
    
    
    
    }





`;