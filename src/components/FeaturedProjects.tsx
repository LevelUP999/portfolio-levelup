import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Quanttun AI',
      description: 'O site foi desenvolvido para solucionar o problema dos estudantes, em conseguir um ensino de qualidade e fácil acesso.',
      image: 'https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg',
      technologies: ['Integração com ChatGPT', 'Ligação com banco de dados', 'REACT', 'JavaScript', 'TailwindCSS'],
      liveUrl: 'https://quanttunai.netlify.app',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Página de apresentação de perfume',
      description: 'A página foi criada para apresentar um produto, utilizando técnicas de desing para chamar a atenção dos clientes.',
      image: 'https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg',
      technologies: ['REACT', 'Bibliotecas', 'TailwindCSS', 'Desing Impactante'],
      liveUrl: 'https://landingpage-fragance.netlify.app',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Modern task management application with real-time collaboration, drag-and-drop functionality, and team workspaces.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center',
      technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Chat',
      description: 'Modern AI-powered chat interface with real-time messaging, file sharing, and smart conversation management.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'WebSocket', 'OpenAI API', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Projetos em Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Abaixo estão alguns de meus melhores projetos! Quer ver todos? Vá até <Link className='text-[#00ff8c] underline font-bold' to={"/Projects"}>projetos</Link>!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="neon-border"
          >
            <Link to={"/Projects"}>Ver todos os projetos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;