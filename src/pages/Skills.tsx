import Navigation from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Code2Icon } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'neon-green',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Vite.js', level: 90, icon: '💜' },
        { name: 'TypeScript', level: 88, icon: '📘' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Librarys', level: 85, icon: '💚' },
        { name: 'JavaScript', level: 95, icon: '💛' },
      ]
    },
    {
      title: 'Backend',
      color: 'tech-red',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Express.js', level: 88, icon: '🚀' },
        { name: 'APIs', level: 85, icon: '🈸' },
        { name: 'Supabase', level: 95, icon: '🌩️' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'Call GPT-4', level: 99, icon: '🟢⚫' },
      ]
    },
    {
      title: 'Dev Tools',
      color: 'gradient',
      skills: [
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'GitHub', level: 93, icon: '🐈‍⬛' },
        { name: 'Git', level: 75, icon: '📚' },
        { name: 'Figma', level: 50, icon: '🎨' },
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

          <div className="grid lg:grid-cols-3 gap-8">
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
                            <span className="text-xl">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
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

          {/* Additional Skills */}
          <div className="text-center animate-fade-in flex items-center justify-center gap-3 mt-2">
            <h3 className="text-2xl font-bold">
              Complementary <span className="gradient-text">Technologies:</span>
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Supabase', 'Vercel', 'Netlify', 'GitHub'
              ].map((tech, index) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-sm py-2 px-4 neon-border animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;