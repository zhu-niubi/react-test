import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//创建一个 React 应用的根节点，这个root节点根据public/index.html里面的根结点id
//获取HTML中id为root的元素，这是React应用挂载的地方
const root = ReactDOM.createRoot(document.getElementById('root'));

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];


root.render(

  //<React.StrictMode>用于高亮潜在问题的工具，它在开发模式下额外执行一些检查和警告
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
  
);  

//如果您想开始在应用程序中测量性能，请传递一个函数
//以记录结果（例如：reportWebVitals（console.log））
//或者发送到分析端点，了解更多信息：https://bit.ly/CRA-vitals
reportWebVitals();
