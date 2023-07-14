import { createRoot } from 'react-dom/client';
import React from 'react';
import { RouterProvider } from "react-router-dom";

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'
import { router } from './routes/index';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);