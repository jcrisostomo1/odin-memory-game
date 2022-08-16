import './styles/App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  let highScore = 0;
  let score = 0;
  return (
    <div>
      <header>
        <h1>Odin Memory Game</h1>
        <div className='scoreboard'>
          <h3>Score: {score}</h3>
          <h3>High Score: {highScore}</h3>
        </div>
      </header>
      
      <footer>
        <a href="https://github.com/jcrisostomo1" rel="noreferrer" target="_blank"><i className="fa fa-github fa-lg"></i></a>
        <p>Made by: jcrisostomo1</p>
      </footer>
    </div>
  );
}

export default App;
