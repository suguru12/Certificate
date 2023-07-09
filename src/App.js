
import './App.css';
import Footer from './components/Footer';
import MyForm from './components/form';
import Navbar from './components/Navbar';
import TopBar from './components/Topbar';

function App() {
  return (
    <div className="App">
       <TopBar/>
       <Navbar/>
       <MyForm/><br></br><br></br>
       <Footer/>
    </div>
  );
}

export default App;
