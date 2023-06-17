import './App.css';
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Card from '../src/components/Card'
import katie_zaferes from './images/katie-zaferes.png'
import star from './images/star.png'
import Data from './data'

function App() {


  // console.log(data);
  const DataEls = Data.map(item => {
    return <Card
      img={item.coverImg}
      price={item.price}
      title={item.title}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
    />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      {DataEls}
    </div>
  );
}

export default App;
