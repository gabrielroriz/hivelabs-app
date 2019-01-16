import React, { Component } from 'react';

//component
import ProdutoList from './components/ProdutoList';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MaterialTheme from './styles/MaterialTheme';



class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <MuiThemeProvider theme={MaterialTheme}>
          <ProdutoList />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
