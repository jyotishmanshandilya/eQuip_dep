import './App.css';
import Header from "./components/Header";
import About from './components/About';
import Intro from './components/Intro';
import Services from './components/Services';
import Contact from './components/Contact';
import servicesData from './components/servicesData';

function App() {
  const services = servicesData.map((service)=>{
    return (
      <Services
        img = {service.image}
        desc = {service.description}
        title = {service.title}
        key = {service.id}
      />
    )
  });

  return (
    <div>
      <Header/>
      <Intro/>
      <About/>
      <section id='services' className='services--card'>
        {services}
      </section>
      <Contact/>
    </div>
  );
}

export default App;
