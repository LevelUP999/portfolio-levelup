import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/image.png';
import { Navigate } from 'react-router-dom';

const Hero = () => {
  const stats = [
    { label: 'Classification', value: 'Full-Stack' },
    { label: 'Projects Completed', value: '+3' },
    { label: 'Technologies', value: '+9' },
    { label: 'Quality of Projects', value: '999%' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg">
                <span className='text-3xl'>Hello</span>
                <span className="animate-float text-6xl">👋</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                I'm a{' '}
                <span className="gradient-text">
                  Web Developer
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                I build amazing digital experiences with modern technologies and clean code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="tech-glow bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Hire Me
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="neon-border"
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-lg border border-border hover:border-primary transition-colors tech-glow"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden tech-glow border-4 border-primary/20">
                <img
                  src={profileImage}
                  alt="Developer Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-card rounded-full flex items-center justify-center animate-float tech-glow">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-xl">JS</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-card rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-lg">APIs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 animate-scale-in">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center p-6 rounded-lg bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;