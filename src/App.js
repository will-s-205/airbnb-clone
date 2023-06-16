import './App.css';
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Card from '../src/components/Card'
import katie_zaferes from './images/katie-zaferes.png'
import star from './images/star.png'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
      img="katie-zaferes.png"
      star={star}
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life lessons with Katie Zaferes"
      price={136}
      />
    </div>
  );
}

export default App;
