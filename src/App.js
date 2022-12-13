import './App.css';
import Banner from './Components/Banner/Banner';
import List from './Components/List/List';
import Navbar from './Components/Navbar/Navbar';
import { trending, romance } from './Urls/urls';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <List url={trending} title="Trending" />
      <List url={romance} title="Romance" />
    </div>
  );
}

export default App;
