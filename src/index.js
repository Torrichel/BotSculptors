import React, {Fragment} from "react";
import ReactDOM from "react-dom";


import App from './components/App';
import { GlobalStyles } from './styles';
import { store, history } from './helpers';


import { ThemeProvider } from 'styled-components';


import media from './styles/media';


const Theme = ({ children }) => (
    <ThemeProvider
        theme={{
            ...media,
            border: '2px solid #ff4000',
            contentPaddingDesktop: '14%',
            contentPaddingTablet: '7%',
            contentPaddingMobile: '5%',
            headerFirstLineColor: '#eef1f5',
            logoHeight: '110px',
            titleColor: '#1f4c9d',
            sloganColor: '#8a8f96',
            sloganColor2: '#a7abb1',
            serviceCardBg: '#d5d9de'
        }}>
        {children}
    </ThemeProvider>
);



ReactDOM.render(<Fragment>

    <Theme><GlobalStyles/></Theme>
    <Theme>
        <App history={history} store={store} />
    </Theme>

</Fragment>, document.getElementById("root"));