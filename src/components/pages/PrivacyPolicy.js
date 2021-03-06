import React, { Fragment }  from 'react'
import {Header, Main, Footer, Title } from "../common";
import styled from "styled-components";


const Wrapper = styled.div`

     padding: 0 ${props => props.theme.contentPaddingDesktop};
      

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
     
    
      
      width: 100%;
      
    ${({theme}) => theme.mobile`
        width: 100%;
         padding: 50px ${({theme}) => theme.contentPaddingMobile};
    `}
    
    ${({theme}) => theme.tablet`
        width: 100%;
        padding: 50px ${({theme}) => theme.contentPaddingTablet};
    `}
      
 
  *:not(h1):not(span):not(.back_text):not(.front_text):not(#aboutProject){
    color: #7d8794;
    font-family: "Open Sans";
    font-size: 15px;
    font-style: italic;
    line-height: 24px;
    letter-spacing: 0.15px;
    
    
  }
  

  

  span{
    font-size: 30px;
    color: #000;
    font-family: "Open Sans";
    margin-top: 15px;
  }
  

  

`;


export const PrivacyPolicy = props => {



    return (

        <Fragment>

            <Header {...props} />

            <Main>

                <Wrapper>

                    <Title id='aboutProject' marginTop={'30'} marginBottom={'0'} backText='Privacy Policy' frontText='Privacy Policy' />


                    <p>It is Bot Sculptors’s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="https://botsculptors.com">https://botsculptors.com</a> (hereinafter, "us", "we", or "https://botsculptors.com"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
                    <p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.</p>

                    <span>Website Visitors</span>
                    <p>Like most website operators, Bot Sculptors collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Bot Sculptors’s purpose in collecting non-personally identifying information is to better understand how Bot Sculptors’s visitors use its website. From time to time, Bot Sculptors may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.</p>
                    <p>Bot Sculptors also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on https://botsculptors.com blog posts. Bot Sculptors only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.</p>

                    <span>Gathering of Personally-Identifying Information</span>
                    <p>Certain visitors to Bot Sculptors’s websites choose to interact with Bot Sculptors in ways that require Bot Sculptors to gather personally-identifying information. The amount and type of information that Bot Sculptors gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at https://botsculptors.com to provide a username and email address.</p>

                    <span>Security</span>
                    <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>



                    <span>Links To External Sites</span>
                    <p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.</p>
                    <p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>



                    <span>Aggregated Statistics</span>
                    <p>Bot Sculptors may collect statistics about the behavior of visitors to its website. Bot Sculptors may display this information publicly or provide it to others. However, Bot Sculptors does not disclose your personally-identifying information.</p>


                    <span>Cookies</span>
                    <p>To enrich and perfect your online experience, Bot Sculptors uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.</p>
                    <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Bot Sculptors uses cookies to help Bot Sculptors identify and track visitors, their usage of https://botsculptors.com, and their website access preferences. Bot Sculptors visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Bot Sculptors’s websites, with the drawback that certain features of Bot Sculptors’s websites may not function properly without the aid of cookies.</p>
                    <p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Bot Sculptors's use of cookies.</p>



                    <span>Privacy Policy Changes</span>
                    <p>Although most changes are likely to be minor, Bot Sculptors may change its Privacy Policy from time to time, and in Bot Sculptors’s sole discretion. Bot Sculptors encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>





                </Wrapper>

            </Main>


            <Footer />

        </Fragment>

    );


};
