import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const KanbanCard = ({ title, status }) => {
  return (
    <li className="kanban-card">
      <div className="card-title">{title}</div>
      <div className="card-status">{status}</div>
    </li>
  )
};
const KanbanNewCard = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const handleChange = (evt) => {
    setTitle(evt.target.value);
  };
  const handleKeyDown = (evt) => {
    if (evt.key == 'Enter') {
      console.log(123);
      onSubmit(title);
    }
  }

  return (
    <li className="kanban-card">
      <h3>添加新卡片</h3>
      <div className="card-title">
        <input type="text" value={title} onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
    </li>
  )
}
function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [showDoingAdd,setShowDoingAdd] = useState(false);
  const [showDoneAdd,setShowDoneAdd] = useState(false);
  const [todoList, setTodoList] = useState([{ title: '开发任务-1', status: '2024-05-26 22:43' }, { title: '开发任务-3', status: '2024-05-26 22:43' }, { title: '开发任务-5', status: '2024-05-26 22:43' }, { title: '测试任务-3', status: '2024-05-26 22:43' }]);
  const [doingList,setDoingList] = useState([{ title: '开发任务-4', status: '2024-05-26 22:43' }, { title: '开发任务-6', status: '2024-05-26 22:43' }, { title: '测试任务-2', status: '2024-05-26 22:43' }]);
  const [doneList,setDoneList] = useState([{ title: '开发任务-2', status: '2024-05-26 22:43' }, { title: '测试任务-1', status: '2024-05-26 22:43' }]);
  // const handleAdd = (evt) => {
  //   setShowAdd(true);
  // };

  const handleAdd = (evt,targetMethod: setShowAdd | setShowDoingAdd | setShowDoneAdd) => {
    targetMethod(true);
  }

  const handleSubmit = (title,setList,setShow) => {
    // 这里为什么不用 unshift 函数，后面课程会提及，这里记一个 TODO
    // todoList.unshift({ title, status: new Date().toDateString() });
    setList(currentTodoList => [
      {title,status: new Date().toDateString()},
      ...currentTodoList
    ]);
    setShow(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>我的看板</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="kanban-board">
        <section className="kanban-column column-todo">
          <h2>待处理<button onClick={(evt) => handleAdd(evt,setShowAdd)} disabled={showAdd}>&#8853; 添加新卡片</button></h2>
          <ul>
            {
              showAdd && <KanbanNewCard onSubmit={(title) => handleSubmit(title,setTodoList,setShowAdd)} />
            }
            {
              todoList.map(props => <KanbanCard {...props} />)
            }
          </ul>
        </section>
        <section className="kanban-column column-doing">
          <h2>进行中<button onClick={(evt) => handleAdd(evt,setShowDoingAdd)} disabled={showDoingAdd}>&#8853; 添加新卡片</button></h2>
          <ul>
            {
              showDoingAdd && <KanbanNewCard onSubmit={(title) => handleSubmit(title,setDoingList,setShowDoingAdd)} />
            }
            {
              doingList.map(props => <KanbanCard {...props} />)
            }
          </ul>
        </section>
        <section className="kanban-column column-done">
          <h2>已完成<button onClick={(evt) => handleAdd(evt,setShowDoneAdd)} disabled={showDoneAdd}>&#8853; 添加新卡片</button></h2>
          <ul>
            {
              showDoneAdd && <KanbanNewCard onSubmit={(title) => handleSubmit(title,setDoneList,setShowDoneAdd)} />
            }
            {
              doneList.map(props => <KanbanCard {...props} />)
            }
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
