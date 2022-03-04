import React from 'react';
import ReactDOM from 'react-dom';
import BoardContextProvider from './context/BoardContext';
import ListContextProvider from './context/ListContext';
import TaskContextProvider from './context/TaskContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BoardContextProvider>
      <ListContextProvider>
        <TaskContextProvider>
          <App />
        </TaskContextProvider>
      </ListContextProvider>
    </BoardContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
