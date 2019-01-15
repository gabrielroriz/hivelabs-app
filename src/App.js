import React, { Component } from 'react';

//component
import ProdutoList from './components/ProdutoList';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#83b33c',
      contrastText: '#fff'
    },
    secondary: {
      main: '#649c0c',
      contrastText: '#fff',
    },
  },
  typography: {
    h5: {
      color: '#83b33c'
    },
    subtitle1: {
      color: '#83b33c'
    }
  }
});


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <ProdutoList />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
