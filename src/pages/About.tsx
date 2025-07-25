import { Calendar, MapPin, Code, Coffee } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import profileImage from '@/assets/profile-image.jpg';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      description: 'Leading development of cutting-edge web applications using modern technologies.',
      current: true
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      description: 'Developed and maintained multiple client projects using React, Node.js, and cloud services.'
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Creative Agency',
      description: 'Specialized in creating responsive and interactive user interfaces.'
    },
    {
      year: '2019',
      title: 'Started Web Development Journey',
      company: 'Self-taught',
      description: 'Began learning programming and fell in love with creating digital experiences.'
    }
  ];

  const interests = [
    { icon: '🚀', label: 'Space Technology' },
    { icon: '🎮', label: 'Game Development' },
    { icon: '🎵', label: 'Music Production' },
    { icon: '📚', label: 'Tech Books' },
    { icon: '🏃‍♂️', label: 'Running' },
    { icon: '☕', label: 'Coffee Brewing' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code and the journey that shaped my passion for web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image and Quick Facts */}
          <div className="space-y-8 animate-scale-in">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <img
                  src={profileImage}
                  alt="Developer Profile"
                  className="w-full rounded-lg tech-glow"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-card border border-primary/20 rounded-lg p-4 tech-glow">
                <div className="flex items-center gap-2">
                  <Code className="text-primary" size={20} />
                  <div>
                    <div className="text-lg font-bold">5+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card border border-secondary/20 rounded-lg p-4 tech-glow-red">
                <div className="flex items-center gap-2">
                  <Coffee className="text-secondary" size={20} />
                  <div>
                    <div className="text-lg font-bold">1000+</div>
                    <div className="text-xs text-muted-foreground">Coffees</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={18} />
                  <span>São Paulo, Brazil</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" size={18} />
                  <span>Available for projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="text-primary" size={18} />
                  <span>Coffee enthusiast</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Interests & Hobbies</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div 
                    key={interest.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-lg">{interest.icon}</span>
                    <span className="text-sm">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Story and Timeline */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
                <p>
                  Hi there! I'm a passionate web developer with over 5 years of experience 
                  creating digital experiences that make a difference. My journey started with 
                  curiosity and a desire to understand how the web works.
                </p>
                <p>
                  What began as simple HTML pages has evolved into a deep expertise in modern 
                  web technologies. I specialize in React, Node.js, and cloud technologies, 
                  but I'm always excited to learn new tools and frameworks.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating user experiences 
                  that are both beautiful and functional. When I'm not coding, you can find me 
                  exploring new technologies, contributing to open source, or brewing the perfect cup of coffee.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Professional Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div 
                    key={item.year}
                    className="relative pl-8 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                      <div className={`absolute top-2 -left-2 w-5 h-5 rounded-full border-2 ${
                        item.current 
                          ? 'bg-primary border-primary tech-glow' 
                          : 'bg-background border-muted-foreground'
                      }`} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Badge variant={item.current ? "default" : "secondary"} className="text-xs">
                          {item.year}
                        </Badge>
                        {item.current && (
                          <Badge className="text-xs bg-primary/10 text-primary border-primary/20">
                            Current
                          </Badge>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-sm text-primary font-medium">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default About;