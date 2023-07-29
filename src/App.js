import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import ServiceForm from './components/ServiceForm/ServiceForm';


function App() {
  return (
    <div className="app-container">
      <Header/>
      <div className='main-content'>
      <Navigation />
      <Main />
      <ServiceForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;
