import React, { Component } from 'react';

//component
import ProdutoList from './components/ProdutoList';
import Carrinho from './components/Carrinho';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MaterialTheme from './styles/MaterialTheme';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <MuiThemeProvider theme={MaterialTheme}>

          <BrowserRouter>
          <div>
          <AppBar />
            <Switch>
              <Route path="/" exact={true} component={ProdutoList} />
              <Route path="/carrinho" exact={true} component={Carrinho} />
            </Switch>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
