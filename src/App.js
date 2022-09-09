import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Recovery from './components/Recovery';
import Security from './components/Security';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Recovery num={1}/>
      <Security/>
      <Footer/>
    </div>
  );
}

export default App;
