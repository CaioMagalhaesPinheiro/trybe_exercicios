import './App.css';

function App() {
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  const taskList = [
    Task('React'),
    Task('Redux'),
    Task('JSX'),
    Task('Jest'),  
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <ol> It's {taskList}</ol>
      </header>
    </div>
  );
}

export default App;
