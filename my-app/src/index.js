import React from 'react';
import {createRoot} from "react-dom/client"
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './Redux/store'

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
<Provider  store={store}>
<App/>
</Provider>

)




// import {Provider} from  'react-redux';
// import {store} from './Redux/Store'

// ReactDOM.render(
// <Provider store={store}  >
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// </Provider>