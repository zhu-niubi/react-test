import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

// function App() {
//   //App 方法返回一个 JSX 表达式，这个表达式定义了浏览器最终要渲染的 DOM
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello, World!</p>
//         {/* 
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> 
//         */}
//         {/* 
//             rel:
//             noopener,
//               使用target="_blank"属性在新标签页中打开链接时，新的标签页可以通过window.opener属性访问原始页面的window对象；这可能带来一些安全隐患，例如新标签页可以修改原始页面的内容；
//               noopener属性的作用是防止新标签页访问原始页面的window.opener属性，从而提高安全性

//             noreferrer,
//               noreferrer属性的作用是防止浏览器在导航到新页面时发送HTTP Referer头；这意味着新页面不会知道用户是从哪个页面点击过来的；
//               这有助于保护用户的隐私，特别是在你不希望目标站点知道用户是从你的网站过去的情况
//         */}
//       </header>
//     </div>
//   );
// }
function App(props) {

  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));  

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}


export default App;
