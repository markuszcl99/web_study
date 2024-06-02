
import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const UPDATE_INTERVAL = MINUTE;

// note: 
// 1. 拆分组件的基本原则：（1）单一职责 （2）关注点分离 （3）一次且仅一次 （4）简约
const KanbanCard = ({ title, status }) => {

  const [displayTime, setDisplayTime] = useState(status);

  useEffect(() => {
    const updateDisplayTime = () => {
      const timePassed = new Date() - new Date(status);
      let relativeTime = '刚刚';
      if (MINUTE <= timePassed && timePassed < HOUR) {
        relativeTime = `${Math.ceil(timePassed / MINUTE)} 分钟前`;
      } else if (HOUR <= timePassed && timePassed < DAY) {
        relativeTime = `${Math.ceil(timePassed / HOUR)} 小时前`;
      } else if (DAY <= timePassed) {
        relativeTime = `${Math.ceil(timePassed / DAY)} 天前`;
      }
      setDisplayTime(relativeTime);
    }
    // 添加定时器，每隔 UPDATE_INTERVAL 调用一下回调函数
    const intervalId = setInterval(updateDisplayTime, UPDATE_INTERVAL);
    updateDisplayTime();

    // 返回清除函数，卸载时调用
    return function cleanup() { clearInterval(intervalId); };
  }, [status]);



  // start 在这里验证一下函数组件的生命周期
  // 1. 在大的层面分为两个阶段：渲染阶段 -> 提交阶段
  // 2. 在组件挂载时：组件函数 => useState、useReducer、useMemo、useCallback
  // end

  return (
    <li className="kanban-card">
      <div className="card-title">{title}</div>
      <div className="card-status">{displayTime}</div>
    </li>
  )
};
const KanbanNewCard = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  // useRef 构建函数返回的值是可变的，我们知道 state props 是不可变的
  const inputElement = useRef(null);

  // useEffect(callbackFunc,[]) 仅在组件挂载时执行一遍
  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const handleChange = (evt) => {
    setTitle(evt.target.value);
  };
  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter') {
      console.log(123);
      onSubmit(title);
    }
  }

  return (
    <li className="kanban-card">
      <h3>添加新卡片</h3>
      <div className="card-title">
        <input type="text" value={title} ref={inputElement} onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
    </li>
  )
}

const KanbanBoard = ({ children }) => {
  return (
    <main className="kanban-board">
      {children}
    </main>
  );
}

const KanbanColumn = ({ children, className, title, handleAdd, setShowAdd, showAdd }) => {
  const combineClassName = `kanban-column ${className}`;
  return (
    <section className={combineClassName}>
      <h2>{title}<button onClick={(evt) => handleAdd(evt, setShowAdd)} disabled={showAdd}>&#8853; 添加新卡片</button></h2>
      <ul>
        {children}
      </ul>
    </section>
  )
}

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [showDoingAdd, setShowDoingAdd] = useState(false);
  const [showDoneAdd, setShowDoneAdd] = useState(false);
  const [todoList, setTodoList] = useState([{ title: '开发任务-1', status: '2024-05-26 22:43' }, { title: '开发任务-3', status: '2024-05-26 22:43' }, { title: '开发任务-5', status: '2024-05-26 22:43' }, { title: '测试任务-3', status: '2024-05-26 22:43' }]);
  const [doingList, setDoingList] = useState([{ title: '开发任务-4', status: '2024-05-26 22:43' }, { title: '开发任务-6', status: '2024-05-26 22:43' }, { title: '测试任务-2', status: '2024-05-26 22:43' }]);
  const [doneList, setDoneList] = useState([{ title: '开发任务-2', status: '2024-05-26 22:43' }, { title: '测试任务-1', status: '2024-05-26 22:43' }]);
  // const handleAdd = (evt) => {
  //   setShowAdd(true);
  // };

  const handleAdd = (evt, targetMethod: setShowAdd | setShowDoingAdd | setShowDoneAdd) => {
    targetMethod(true);
  }

  const handleSubmit = (title, setList, setShow) => {
    // 这里为什么不用 unshift 函数，后面课程会提及，这里记一个 TODO
    // todoList.unshift({ title, status: new Date().toDateString() });
    setList(currentTodoList => [
      { title, status: new Date().toLocaleString() },
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
      <KanbanBoard>
        <KanbanColumn className="column-todo" title="待处理" handleAdd={handleAdd} setShowAdd={setShowAdd} showAdd={showAdd}>
          {
            showAdd && <KanbanNewCard onSubmit={(title) => handleSubmit(title, setTodoList, setShowAdd)} />
          }
          {
            todoList.map(props => <KanbanCard {...props} />)
          }
        </KanbanColumn>
        <KanbanColumn className="column-doing" title="进行中" handleAdd={handleAdd} setShowAdd={setShowDoingAdd} showAdd={showDoingAdd}>
          {
            showDoingAdd && <KanbanNewCard onSubmit={(title) => handleSubmit(title, setDoingList, setShowDoingAdd)} />
          }
          {
            doingList.map(props => <KanbanCard {...props} />)
          }
        </KanbanColumn>
        <KanbanColumn className="column-done" title="进行中" handleAdd={handleAdd} setShowAdd={setShowDoneAdd} showAdd={showDoneAdd}>
          {
            showDoneAdd && <KanbanNewCard onSubmit={(title) => handleSubmit(title, setDoneList, setShowDoneAdd)} />
          }
          {
            doneList.map(props => <KanbanCard {...props} />)
          }
        </KanbanColumn>
      </KanbanBoard>
    </div>
  );
}

export default App;
