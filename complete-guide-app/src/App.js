import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <h2>Let the game begins!</h2>
      <p>This text should also be visible</p>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
