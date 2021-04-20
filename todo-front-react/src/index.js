import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from "./components/reducers/todoApp";
import App from './App';
import reportWebVitals from './reportWebVitals';

// 생성된 todoApp 리듀서를 바탕으로 스토어를 생성한다.
let store = createStore(todoApp);

render(
  // react-redux 내에서 제공하는 공급 컴포넌트(Provider)로 컴포넌트 트리를 감싸 스토어를 주입
  // 리덕스의 스토어는 하나만 존재한다
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
