import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Greeting/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
