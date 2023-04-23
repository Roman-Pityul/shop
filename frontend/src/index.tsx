import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {QueryClient, QueryClientProvider} from 'react-query'

import App from './App'
import { store } from './redux';

import './index.scss';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);