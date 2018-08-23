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
import Cities from './layouts/Cities';
import Edit from './layouts/Edit';
import store from './redux/store';
import WithNavBarLayout from './layouts/WithNavBar';

console.log('Port running on: ', process.env.PORT);

const client = new ApolloClient({
  uri: 'https://thelasthoorah-graphql.herokuapp.com/graphql',
  // uri: 'http://localhost:4000/graphql',
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <WithNavBarLayout>
          <Switch>
            <Route path="/cities" component={Cities} />
            <Route path="/locations/:id" component={Locations} />
            <Route path="/edit/:cityId/:id" component={Edit} />
            <Route path="/" component={NewLocation} />
          </Switch>
        </WithNavBarLayout>
      </ApolloProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
