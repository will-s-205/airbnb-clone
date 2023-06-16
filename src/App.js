import './App.css';
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Card from '../src/components/Card'
import katie_zaferes from './images/katie-zaferes.png'
import star from './images/star.png'
import Data from './data'

function App() {

  
  // console.log(data);
  const DataEls = Data.map(data => {
    return <Card 
    price={data.price} 
    />
  })
  
  return (
    <div>
    <div>
      <Navbar />
      <Hero />
      <Card 
      img={katie_zaferes}
      star={star}
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life lessons with Katie Zaferes"
      price={136}
      />
    </div>
    {DataEls}
    </div>
  );
}

export default App;
