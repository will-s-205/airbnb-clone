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
    img={data.coverImg}
    price={data.price}
    title={data.title}
    rating={data.stats.rating}
    reviewCount={data.stats.reviewCount}
    country={data.location}
    />
  })
  
  return (
    <div>
    {DataEls}
    </div>
  );
}

export default App;
