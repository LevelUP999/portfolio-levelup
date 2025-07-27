import { Calendar, MapPin, Code, Coffee } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import profileImage from '@/assets/image-profi.jpeg';
import { useLang } from '@/contexts/langContext';

const About = () => {
  const { lang } = useLang();

  const timeline_pt = [
    {
      year: '2024/7',
      title: 'Desenvolvedor Full Stack',
      company: 'Criação de projetos complexos',
      description: 'Criação de estruturas mais complexas, e com funcionalidades exigentes de novas tecnologias.',
      current: true
    },
    {
      year: '2024/5',
      title: 'Treinamento na área',
      company: 'Criação dediversos projetos e aprimoramento das abilidades',
      description: 'Uso de tecnologias modernas, para melhor qualidade nos resultados.'
    },
    {
      year: '2024/2',
      title: 'Desenvolvendor Frontend',
      company: 'Primeiro passo',
      description: 'Aprimoramento das capacidades de desing e criação de interfaces.'
    },
    {
      year: '2024/1',
      title: 'Começo da minha jornada na WEB',
      company: 'Pesquisando sobre à área',
      description: 'Início da minha jornada na área de programação web.'
    }
  ];

  const timeline_en = [
    {
      year: '2024/7',
      title: 'Full Stack Developer',
      company: 'Creating complex projects',
      description: 'Creating more complex structures, with demanding functionalities using new technologies.',
      current: true
    },
    {
      year: '2024/5',
      title: 'Training in the field',
      company: 'Creating various projects and improving skills',
      description: 'Using modern technologies to improve the quality of results.'
    },
    {
      year: '2024/2',
      title: 'Frontend Developer',
      company: 'First step',
      description: 'Improving design and interface creation skills.'
    },
    {
      year: '2024/1',
      title: 'Beginning of my web journey',
      company: 'Researching the field',
      description: 'Starting my journey in the web programming field.'
    }
  ];


  const interests_pt = [
    { icon: '🆕', label: 'Gosto de usar novas tecnologias' },
    { icon: '🎮', label: 'Gosto de desenvolvimento de jogos' },
    { icon: '🌟', label: 'Facinado por detalhes' },
    { icon: '🏅', label: '1º Colocado em Progamção WEB | SenacTEC' },
  ];

  const interests_en = [
    { icon: '🆕', label: 'I like to use new technologies' },
    { icon: '🎮', label: 'I enjoy game development' },
    { icon: '🌟', label: 'Fascinated by details' },
    { icon: '🏅', label: '1st Place in Web Programming | SenacTEC' },
  ];

  if (lang == "pt-br") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Sobre <span className="gradient-text">Mim</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conheça mais sobre minha história e como trabalho.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Image and Quick Facts */}
              <div className="space-y-8 animate-scale-in mb-6" style={{ position: "sticky", top: "30px" }}>
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
                      <Code className="text-primary animate-leftRight" size={20} />
                      <div>
                        <div className="text-lg font-bold text-primary">999%</div>
                        <div className="text-xs text-muted-foreground">Qualidades dos Projetos</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-card border border-secondary/20 rounded-lg p-4 tech-glow-red">
                    <div className="flex items-center gap-2">
                      <Coffee className="text-secondary animate-leftRight" size={20} />
                      <div>
                        <div className="text-lg font-bold text-secondary">9+</div>
                        <div className="text-xs text-muted-foreground">Tecnologias utilizadas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Story and Timeline */}
              <div className="animate-fade-in">
                <div className='border-b-[1px] mb-3'>
                  <h2 className="text-3xl font-bold mb-6">Minha História</h2>
                  <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground mb-6">
                    <p>Sou um desenvolvedor web facinado por criar soluções completas e de impacto. Ao longo da minha trajetória, tive a oportunidade de trabalhar com tecnologias como <strong>React</strong>, <strong>TailwindCSS</strong> e <strong>TypeScript</strong>, sempre buscando <strong>otimizar a experiência do usuário</strong>. Como aluno do <strong className='gradient-text'>SenacTEC</strong>, aprendi a importância de combinar <strong>habilidades técnicas</strong> com a <strong>criatividade</strong>, criando projetos que não apenas funcionam, mas também <strong className="gradient-text">surpreendem</strong>.</p>

                    <p>Um dos marcos até agora foi o projeto <strong className="gradient-text">Quanttun AI</strong>, que me rendeu a medalha de <strong className="gradient-text">1º lugar no SenacTEC</strong>. Esse projeto foi um grande desafio, pois envolveu o desenvolvimento de uma aplicação nível <strong>full-stack</strong>, combinando a criação de <strong className="gradient-text">interfaces modernas</strong> e responsivas com a <strong className="gradient-text">integração do ChatGPT</strong> para tornar o sistema mais interativo.</p>

                    <p>Entrei na área de <strong>WEB</strong> por acidente, mas logo fui me aprofundando na área, começando por <strong className="gradient-text">curiosidade</strong>, aprimorando minhas <strong className="gradient-text">habilidades</strong>, passando pelo <strong className="gradient-text">SenacTEC</strong>, até chegar ao nível que estou hoje.</p>

                    <p>Também gosto de experimentar com novas <strong className="gradient-text">tecnologias</strong> e <strong>bibliotecas</strong>. Meu objetivo é <strong>construir soluções completas</strong>, desde o visual até o funcional, garantindo que tudo esteja perfeitamente integrado e otimizado. Estou <strong className="gradient-text">sempre em busca de novos desafios</strong> para continuar aprendendo e <strong>aprimorando minhas habilidades</strong>!</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className='border-b-[1px]'>
                  <h3 className="text-2xl font-bold mb-8">Minha Jornada</h3>
                  <div className="space-y-6">
                    {timeline_pt.map((item, index) => (
                      <div
                        key={item.year}
                        className="relative pl-8 animate-slide-in-right"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {/* Timeline Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                          <div className={`absolute top-2 -left-2 w-5 h-5 rounded-full border-2 ${item.current
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
                                Atual
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
            <div className="flex w-full justify-around my-9">
              {/* Interests */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Fatos Interessantes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests_pt.map((interest, index) => (
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
          </div>
        </div>
      </div>
    );
  } else if (lang == "en") {
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
                Learn more about my story and how I work.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Image and Quick Facts */}
              <div className="space-y-8 animate-scale-in mb-6" style={{ position: "sticky", top: "30px" }}>
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
                      <Code className="text-primary animate-leftRight" size={20} />
                      <div>
                        <div className="text-lg font-bold text-primary">999%</div>
                        <div className="text-xs text-muted-foreground">Project Quality</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-card border border-secondary/20 rounded-lg p-4 tech-glow-red">
                    <div className="flex items-center gap-2">
                      <Coffee className="text-secondary animate-leftRight" size={20} />
                      <div>
                        <div className="text-lg font-bold text-secondary">9+</div>
                        <div className="text-xs text-muted-foreground">Technologies used</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Story and Timeline */}
              <div className="animate-fade-in">
                <div className='border-b-[1px] mb-3'>
                  <h2 className="text-3xl font-bold mb-6">My Story</h2>
                  <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground mb-6">
                    <p>I am a web developer fascinated by creating complete and impactful solutions. Throughout my journey, I have had the opportunity to work with technologies like <strong>React</strong>, <strong>TailwindCSS</strong>, and <strong>TypeScript</strong>, always aiming to <strong>optimize the user experience</strong>. As a student at <strong className='gradient-text'>SenacTEC</strong>, I learned the importance of combining <strong>technical skills</strong> with <strong>creativity</strong>, creating projects that not only work but also <strong className="gradient-text">surprise</strong>.</p>

                    <p>One of the milestones so far was the <strong className="gradient-text">Quanttun AI</strong> project, which earned me the <strong className="gradient-text">1st place at SenacTEC</strong>. This project was a huge challenge as it involved developing a <strong>full-stack</strong> application, combining the creation of <strong className="gradient-text">modern</strong> and responsive <strong>interfaces</strong> with <strong className="gradient-text">ChatGPT integration</strong> to make the system more interactive.</p>

                    <p>I entered the <strong>WEB</strong> field by accident, but I quickly delved deeper into it, starting with <strong className="gradient-text">curiosity</strong>, refining my <strong className="gradient-text">skills</strong>, going through <strong className="gradient-text">SenacTEC</strong>, and reaching the level I am at today.</p>

                    <p>I also enjoy experimenting with new <strong className="gradient-text">technologies</strong> and <strong>libraries</strong>. My goal is to <strong>build complete solutions</strong>, from the visual to the functional, ensuring that everything is perfectly integrated and optimized. I am <strong className="gradient-text">always seeking new challenges</strong> to keep learning and <strong>improving my skills</strong>!</p>

                  </div>
                </div>

                {/* Timeline */}
                <div className='border-b-[1px]'>
                  <h3 className="text-2xl font-bold mb-8">My Journey</h3>
                  <div className="space-y-6">
                    {timeline_en.map((item, index) => (
                      <div
                        key={item.year}
                        className="relative pl-8 animate-slide-in-right"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {/* Timeline Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                          <div className={`absolute top-2 -left-2 w-5 h-5 rounded-full border-2 ${item.current
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
                                Atual
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
            <div className="flex w-full justify-around my-9">
              {/* Interests */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Interesting Facts</h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests_en.map((interest, index) => (
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
          </div>
        </div>
      </div>
    );
  }
};

export default About;