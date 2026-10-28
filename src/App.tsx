import Features from './components/Features.tsx';
import Budges from './components/Budges';
import Hero from './components/Hero';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Budges />
      <Features />
    </div>
  )
}

export default App