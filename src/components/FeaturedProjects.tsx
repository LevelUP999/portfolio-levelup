import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { useLang } from '@/contexts/langContext';

const FeaturedProjects = () => {
  const { lang } = useLang();

  const projects_pt = [
    {
      title: 'Quanttun AI',
      description: 'O site foi desenvolvido para solucionar o problema dos estudantes, em conseguir um ensino de qualidade e fácil acesso.',
      image: './projects-img/quanttun_img.png',
      technologies: ['Integração com ChatGPT', 'Ligação com banco de dados', 'REACT', 'JavaScript', 'TailwindCSS'],
      liveUrl: 'https://quanttunai.netlify.app',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Página de apresentação de perfume',
      description: 'A página foi criada para apresentar um produto, utilizando técnicas de desing para chamar a atenção dos clientes.',
      image: './projects-img/necnotr_img.png',
      technologies: ['REACT', 'Bibliotecas', 'TailwindCSS', 'Desing Impactante'],
      liveUrl: 'https://landingpage-fragance.netlify.app',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AxinMind',
      description: 'A página foi criada para uma clínica de Acess Bar, contendo sistema de agendamento, que bloqueia seções no mesmo intervalo.',
      image: './projects-img/axinmind_img.png',
      technologies: ['React', 'TailwindCSS', 'Ligação com Banco de Dados', 'nada ainda :3'],
      liveUrl: 'https://axinmind.netlify.app',
      githubUrl: '#'
    }
  ];

  const projects_en = [
    {
      title: 'Quanttun AI',
      description: 'The website was developed to solve students problems of obtaining quality education with easy access.',
      image: './projects-img/quanttun_img.png',
      technologies: ['Integration with ChatGPT', 'Database connection', 'REACT', 'JavaScript', 'TailwindCSS'],
      liveUrl: 'https://quanttunai.netlify.app',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Fragance presentation page',
      description: 'The page was created to present a product, using design techniques to attract customers attention.',
      image: './projects-img/necnotr_img.png',
      technologies: ['REACT', 'Librarys', 'TailwindCSS', 'Impactful Desing'],
      liveUrl: 'https://landingpage-fragance.netlify.app',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AxinMind',
      description: 'The page was created for an Access Bar clinic, containing a scheduling system, which blocks sessions at the same interval.',
      image: './projects-img/axinmind_img.png',
      technologies: ['React', 'TailwindCSS', 'Ligação com Banco de Dados', 'nada ainda :3'],
      liveUrl: 'https://axinmind.netlify.app',
      githubUrl: '#'
    }
  ];

  if (lang == "pt-br") {
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
            {projects_pt.map((project, index) => (
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
              <Link to={"/projects"}>Ver todos os projetos</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  } else if (lang == "en") {
    return (
      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Below are some of my best projects! Want to see them all? Go to <Link className='text-[#00ff8c] underline font-bold' to={"/Projects"}>projects</Link>!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects_en.map((project, index) => (
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
              <Link to={"/projects"}>See all projects</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }
};

export default FeaturedProjects;