import Features from './components/Features.tsx';
import Budges from './components/Budges';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Steps from './components/Steps.tsx';
import Testimonial from './components/Testimonial.tsx';

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Budges />
      <Features />
      <Steps />
      <Testimonial />
    </div>
  )
}

export default App