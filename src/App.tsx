import * as React from 'react';
import { hot } from 'react-hot-loader';
import Editor from './modules/editor/Editor';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AuthWrapper } from './shared/firebase/contexts/AuthContext';
import Shell from './modules/shell/Shell';
import { BlogsWrapper } from './shared/firebase';


/**
 * 
 *  --primary: #263238;
  --secondary: #F7F7F2;
  --accent: #F0803C;
 */
const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#455a64',
        main: '#263238',
        dark: '#212121',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#F0803C',
        dark: '#e65100',
        contrastText: '#000',
      },
      text: {
        primary:"#fff",
        secondary: "#F0803C",
      }
    },
  });

const App = () => {
    return (
        <ThemeProvider theme={theme}>
          <AuthWrapper>
            <BlogsWrapper>
              <Shell/>
            </BlogsWrapper>
          </AuthWrapper>
        </ThemeProvider>
    )
}

export default hot(module)(App);