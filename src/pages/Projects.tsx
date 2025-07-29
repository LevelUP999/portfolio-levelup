import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { useLang } from '@/contexts/langContext';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('Todos');
  const { lang } = useLang();

  const projects_pt = [
    {
      title: 'Quanttun AI',
      description: 'O site foi desenvolvido para solucionar o problema dos estudantes, em conseguir um ensino de qualidade e fácil acesso.',
      image: './projects-img/quanttun_img.png',
      category: 'Full Stack',
      technologies: ['Integração com ChatGPT', 'Ligação com banco de dados', 'REACT', 'JavaScript', 'TailwindCSS'],
      liveUrl: 'https://quanttunai.netlify.app',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Página de apresentação de perfume',
      description: 'A página foi criada para apresentar um produto, utilizando técnicas de desing para chamar a atenção dos clientes.',
      image: './projects-img/necnotr_img.png',
      category: 'Frontend',
      technologies: ['REACT', 'Bibliotecas', 'TailwindCSS', 'Desing Impactante'],
      liveUrl: 'https://landingpage-fragance.netlify.app',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AxinMind',
      description: 'A página foi criada para uma clínica de Acess Bar, contendo sistema de agendamento, que bloqueia seções no mesmo intervalo.',
      image: './projects-img/axinmind_img.png',
      category: 'Full Stack',
      technologies: ['React', 'TailwindCSS', 'Ligação com Banco de Dados', 'nada ainda :3'],
      liveUrl: 'https://axinmind.netlify.app',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center',
      technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Chart.js'],
      category: '',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      category: '',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  const projects_en = [
    {
      title: 'Quanttun AI',
      description: 'The website was developed to solve students problems of obtaining quality education with easy access.',
      image: './projects-img/quanttun_img.png',
      category: 'Full Stack',
      technologies: ['Integration with ChatGPT', 'Database connection', 'REACT', 'JavaScript', 'TailwindCSS'],
      liveUrl: 'https://quanttunai.netlify.app',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Fragance presentation page',
      description: 'The page was created to present a product, using design techniques to attract customers attention.',
      image: './projects-img/necnotr_img.png',
      category: 'Frontend',
      technologies: ['REACT', 'Librarys', 'TailwindCSS', 'Impactful Desing'],
      liveUrl: 'https://landingpage-fragance.netlify.app',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AxinMind',
      description: 'The page was created for an Access Bar clinic, containing a scheduling system, which blocks sessions at the same interval.',
      image: './projects-img/axinmind_img.png',
      category: 'Full Stack',
      technologies: ['React', 'TailwindCSS', 'Ligação com Banco de Dados', 'nada ainda :3'],
      liveUrl: 'https://axinmind.netlify.app',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center',
      technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Chart.js'],
      category: '',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      category: '',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  const filters = ['Todos', 'Frontend', 'Backend', 'Full Stack'];

  const filteredProjects = selectedFilter === 'Todos'
    ? lang === 'pt-br' ? projects_pt : projects_en
    : lang === 'pt-br'
      ? projects_pt.filter(project => project.category === selectedFilter)
      : projects_en.filter(project => project.category === selectedFilter);

  if (lang === 'pt-br') {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Meus <span className="gradient-text">Projetos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Você está na coleção de todos os projetos já feitos por mim.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  className={selectedFilter === filter
                    ? "tech-glow bg-primary text-primary-foreground font-bold"
                    : "neon-border hover:border-primary hover:text-[#1a1a1a] text-[#00ff8c] font-bold"
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (lang === 'en') {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                You are in the collection of all the projects I have worked on.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  className={selectedFilter === filter
                    ? "tech-glow bg-primary text-primary-foreground font-bold"
                    : "neon-border hover:border-primary hover:text-[#1a1a1a] text-[#00ff8c] font-bold"
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Projects;
