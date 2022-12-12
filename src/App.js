import './App.css';
import Banner from './Components/Banner/Banner';
import List from './Components/List/List';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <List/>
    </div>
  );
}

export default App;
