import React, { Component } from 'react';

//component
import ProdutoList from './components/ProdutoList';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ProdutoList />
      </Provider>
    );
  }
}

export default App;
