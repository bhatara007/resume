import Navbar from './components/Navbar';
import Card from './components/Card'
import Banner from './components/Banner';
import Aboutme from './components/Aboutme'
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

import { useRef } from 'react';
import './App.css';

function App() {

  const ref = useRef(null) 

  const gotoContactMe = () => {
    window.scrollTo({
      top: ref.current.offsetTop
    });
  }

  return (
    <div className="App">
      <nav class=" bg-black text-white">
        <div class="container mx-auto flex justify-between px-2">
            <h1 class="mx-2.5 my-2.5 font-bold">Bhatara C.</h1>
            <div class="align-middle flex items-end">
              <a class="mx-2.5 my-2.5 font-bold" onClick={gotoContactMe}>Contact me</a>
            </div>
        </div>
      </nav>
      <Banner/>
      <div class='container mx-auto space-y-6 my-6'>
        <Aboutme/>
        <h1 class="text-center font-bold text-3xl md:text-5xl"> My project </h1>
        <hr class="solid"></hr>
        <div class="flex px-2 justify-around flex-wrap">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div ref={ref}>
          <ContactMe id="contactMe"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
