import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/image-profi.jpeg';
import { Navigate } from 'react-router-dom';
import ImgReact from '@/assets/reactimg.png'
import ImgApi from '@/assets/apiimg.png'
import ImgJs from '@/assets/jsimg.png'
import { Link } from 'react-router-dom';
import { useLang } from '@/contexts/langContext';

const Hero = () => {

  const { lang } = useLang();

  const stats_pt = [
    { label: 'Classificação', value: 'Full Stack' },
    { label: 'Projetos Completados', value: '+3' },
    { label: 'Tecnologias utilizadas', value: '+9' },
    { label: 'Qualidades dos Projetos', value: '999%' },
  ];

  const stats_en = [
    { label: 'Classification', value: 'Full Stack' },
    { label: 'Completed Projects', value: '+3' },
    { label: 'Technologies used', value: '+9' },
    { label: 'Quality of Projects', value: '999%' },
  ];

  if (lang == "pt-br") {
    return (
      <section className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center gap-0 text-lg">
                  <span className='text-3xl'>Olá</span>
                  <span className="animate-float text-5xl">👋</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Eu sou{' '}
                  <span className="gradient-text">
                    Programador WEB
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-lg">
                  Eu crio experiências digitais <strong className="gradient-text">modernas</strong> e visualmente <strong className="gradient-text">impactantes</strong>!
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link className="tech-glow bg-primary text-primary-foreground hover:bg-primary/90 p-2 px-6 rounded-xl border-2 border-[#00ff8c] hover:bg-transparent hover:text-[#00ff8c]" to={"/contact"} >
                  Contacte-me
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="neon-border"
                >
                  <Link to={"/projects"}>Veja meus projetos</Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-3">
                <span className='text-muted-foreground'>Minhas redes:</span>
                <div className='flex gap-3'>
                  {[
                    { icon: Github, href: 'https://github.com/LevelUP999', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:levelup.twitch.tv@gmail.com', label: 'Email' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="p-3 rounded-lg border border-border hover:border-primary transition-colors tech-glow"
                      aria-label={label}
                      target='_blank'
                    >
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
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
                  <span className="text-2xl"> <img src={ImgReact} className='w-[90%] m-auto animate-leftRight' /> </span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-full flex items-center justify-center animate-float tech-glow" style={{ animationDelay: '1s' }}>
                  <span className="text-xl"> <img src={ImgJs} className='w-[90%] m-auto animate-leftRight' /> </span>
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-card rounded-full flex items-center justify-center animate-float tech-glow" style={{ animationDelay: '2s' }}>
                  <span className="text-lg"> <img src={ImgApi} className='w-[90%] m-auto animate-leftRight' /> </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 animate-scale-in">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats_pt.map((stat, index) => (
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
  } else if (lang == "en") {
    return (
      <section className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center gap-0 text-lg">
                  <span className='text-3xl'>Hello</span>
                  <span className="animate-float text-5xl">👋</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  I'am{' '}
                  <span className="gradient-text">
                    WEB Developer
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-lg">
                  I create <strong className="gradient-text">modern</strong> and visually  <strong className="gradient-text">impactful </strong>digital experiences!
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link className="tech-glow bg-primary text-primary-foreground hover:bg-primary/90 p-2 px-6 rounded-xl border-2 border-[#00ff8c] hover:bg-transparent hover:text-[#00ff8c]" to={"/contact"} >
                  Contact me
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="neon-border"
                >
                  <Link to={"/projects"}>See my Projects</Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-3">
                <span className='text-muted-foreground'>My social midias:</span>
                <div className='flex gap-3'>
                  {[
                    { icon: Github, href: 'https://github.com/LevelUP999', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:levelup.twitch.tv@gmail.com', label: 'Email' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="p-3 rounded-lg border border-border hover:border-primary transition-colors tech-glow"
                      aria-label={label}
                      target='_blank'
                    >
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
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
                  <span className="text-2xl"> <img src={ImgReact} className='w-[90%] m-auto animate-leftRight' /> </span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-full flex items-center justify-center animate-float tech-glow" style={{ animationDelay: '1s' }}>
                  <span className="text-xl"> <img src={ImgJs} className='w-[90%] m-auto animate-leftRight' /> </span>
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-card rounded-full flex items-center justify-center animate-float tech-glow" style={{ animationDelay: '2s' }}>
                  <span className="text-lg"> <img src={ImgApi} className='w-[90%] m-auto animate-leftRight' /> </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 animate-scale-in">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats_en.map((stat, index) => (
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
  }
};

export default Hero;