import Navigation from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Code2Icon } from "lucide-react";
import { useLang } from '@/contexts/langContext';

const Skills = () => {
  const { lang } = useLang();

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'neon-green',
      skills: [
        { name: 'React', level: 95, icon: 'https://cdn-icons-png.flaticon.com/128/875/875209.png' },
        { name: 'Vite.js', level: 90, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png' },
        { name: 'TypeScript', level: 88, icon: 'https://images.icon-icons.com/2415/PNG/512/typescript_plain_logo_icon_146316.png' },
        { name: 'Tailwind CSS', level: 92, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' },
        { name: 'Librarys', level: 85, icon: 'https://cdn-icons-png.flaticon.com/512/225/225932.png' },
        { name: 'JavaScript', level: 95, icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
      ]
    },
    {
      title: 'Backend',
      color: 'tech-red',
      skills: [
        { name: 'Node.js', level: 90, icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
        { name: 'Express.js', level: 88, icon: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' },
        { name: 'APIs', level: 85, icon: 'https://cdn-icons-png.flaticon.com/512/10169/10169724.png' },
        { name: 'Supabase', level: 95, icon: 'https://img.icons8.com/color/512/supabase.png' },
        { name: 'MongoDB', level: 80, icon: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3-1175138.png' },
        { name: 'Call GPT-4', level: 99, icon: 'https://static.vecteezy.com/system/resources/previews/021/059/825/non_2x/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg' },
      ]
    },
    {
      title: 'Dev Tools',
      color: 'gradient',
      skills: [
        { name: 'VS Code', level: 95, icon: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/vscode.png' },
        { name: 'GitHub', level: 93, icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
        { name: 'Git', level: 75, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' },
        { name: 'Figma', level: 50, icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'neon-green':
        return 'border-primary/20 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--neon-green)_/_0.2)]';
      case 'tech-red':
        return 'border-secondary/20 hover:border-secondary/40 hover:shadow-[0_0_20px_hsl(var(--tech-red)_/_0.2)]';
      default:
        return 'border-border hover:border-primary/40';
    }
  };

  if (lang == "pt-br") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Minhas <span className="gradient-text">Habilidades</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto flex gap-3 justify-center">
                Veja todas as tecnologias que utilizo para codar! <Code2Icon className='text-primary animate-leftRight'></Code2Icon>
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-6">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  className="animate-scale-in"
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <div className={`p-8 rounded-lg bg-card border transition-all duration-300 ${getColorClasses(category.color)}`}>
                    <h3 className="text-2xl font-bold mb-8 text-center">
                      {category.title}
                    </h3>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className="animate-fade-in"
                          style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <img src={skill.icon} className='h-6 rounded' />
                              <span>{skill.name}</span>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {skill.level}%
                            </Badge>
                          </div>

                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-1000 ${category.color === 'neon-green'
                                ? 'bg-primary'
                                : category.color === 'tech-red'
                                  ? 'bg-secondary'
                                  : 'bg-gradient-to-r from-primary to-secondary'
                                }`}
                              style={{
                                width: `${skill.level}%`,
                                animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
                My <span className="gradient-text">Skills</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto flex gap-3 justify-center">
                See all the technologies I use for programming! <Code2Icon className='text-primary animate-leftRight'></Code2Icon>
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-6">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  className="animate-scale-in"
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <div className={`p-8 rounded-lg bg-card border transition-all duration-300 ${getColorClasses(category.color)}`}>
                    <h3 className="text-2xl font-bold mb-8 text-center">
                      {category.title}
                    </h3>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className="animate-fade-in"
                          style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <img src={skill.icon} className='h-6 rounded' />
                              <span>{skill.name}</span>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {skill.level}%
                            </Badge>
                          </div>

                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-1000 ${category.color === 'neon-green'
                                ? 'bg-primary'
                                : category.color === 'tech-red'
                                  ? 'bg-secondary'
                                  : 'bg-gradient-to-r from-primary to-secondary'
                                }`}
                              style={{
                                width: `${skill.level}%`,
                                animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default Skills;