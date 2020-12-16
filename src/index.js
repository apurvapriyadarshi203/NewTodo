import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Form1 from './BasicForm/Form1';
// import Todo1 from './TODO/Todo1';
// import Counter from './Countersss/Counter';
// import Count1 from './Hooks/Count1';
// import HookCouter from './Hooks/HookCouter';
// import HookCounterTwo from './Hooks/HookCounterTwo';
// import HookCounterThree from './Hooks/HookCounterThree';
// import HookCounterFour from './Hooks/HookCounterFour';
// import HookCounterFive from './Hooks/HookCounterFive';
// import '../src/TODO/Todo.css'
// import './TODO/Todo.css'
// import TodoList from './TODO/TodoList';
// import Gret from './Greetings/Gret';
// import Forms1 from './Formss/Forms1';
import Todo1 from './NewTodo/Todo1';

// import '../src/BasicForm/Form.css';
// import Counter from './Countersss/Counter';
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Forms1/> */}
    <Todo1></Todo1>
    {/* <TodoList/> */}
    {/* <Gret /> */}
    {/* <Form1 /> */}
    {/* <Counter />
    <Count1 />
    <HookCouter/>
    <HookCounterTwo />
    <HookCounterThree/> */}
    {/* <Todo1 /> */}
    {/* <HookCounterFour/>
    <HookCounterFive/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

