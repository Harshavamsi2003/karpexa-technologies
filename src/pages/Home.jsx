import Hero from '../components/Hero';
import Story from '../components/Story';
import SolutionsGrid from '../components/SolutionsGrid';
import SectorsBand from '../components/SectorsBand';
import Partners from '../components/Partners';
import ContactCTA from '../components/ContactCTA';
import useReveal from '../hooks/useReveal';
import '../styles/home.css';

export default function Home() {
  useReveal();
  return (
    <div className="home">
      <Hero />
      <Story />
      <SolutionsGrid />
      <SectorsBand />
      <Partners />
      <ContactCTA />
    </div>
  );
}