import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';

function App() {
  return (
    <div className="App">
      <div className='header-control'>
        <Header />
      </div>
      <div className='body-controll'>
        <Index />
      </div>
      <div className='footer-controll'>
        <Footer />
      </div>
      
    </div>
    
  );
}

export default App;
