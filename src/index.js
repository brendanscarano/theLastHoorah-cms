import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import NewLocation from './layouts/NewLocation';
import Locations from './layouts/Locations';
import Edit from './layouts/Edit';
import store from './redux/store';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/locations" component={Locations} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/" component={NewLocation} />
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();