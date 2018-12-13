import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import { Provider } from 'react-redux';
// import AppRouter from './routes/Routes'
import AppTheme from './theme/theme';
import { BrowserRouter } from 'react-router-dom'
import store from './store/config/storeConfigure';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <Provider store={store}>
        <AppTheme>
            <BrowserRouter basename="/">
                <App></App>
            </BrowserRouter>
        </AppTheme>
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
