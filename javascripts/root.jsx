import React from 'react';
import { Provider } from 'react-redux';
import Chess from './chess';

const Root = ({ store }) => (
    <Provider store={store}>
        <Chess />
    </Provider> 
)

export default Root;