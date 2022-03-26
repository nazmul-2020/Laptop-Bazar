import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Bazar from './component/Bazar/Bazar';
import Blog from './component/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header/>
      <Bazar/>
      <Blog/>
    </div>
  );
}

export default App;
