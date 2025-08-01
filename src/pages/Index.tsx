import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedProjects />
    </div>
  );
};

export default Index;
