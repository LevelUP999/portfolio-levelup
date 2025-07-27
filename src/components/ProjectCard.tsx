import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useLang } from '@/contexts/langContext';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}


const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured = false
}: ProjectCardProps) => {

  const { lang } = useLang();
  const { toast } = useToast();
  return (
    <div className={`group relative overflow-hidden rounded-lg bg-card border border-border card-hover ${featured ? 'lg:col-span-2' : ''
      }`}>
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <Button size="sm" className="tech-glow bg-primary text-primary-foreground" onClick={() => { window.open(liveUrl, "_blank") }}>
              <ExternalLink size={16} className="mr-2" />
              {lang == "pt-br" ? 'Ir para' : 'Go To'}
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" className="neon-border" onClick={() => { lang == "pt-br" ? toast({ title: "⚠ Código Indisponível!", description: "Não é permitido visualizar o código dos projetos." }) : toast({ title: "⚠ Code Unavailable!", description: "Viewing project code is not allowed." }) }}>
              <Github size={16} className="mr-2" />
              {lang == "pt-br" ? "Código" : "Code"}
            </Button>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          {featured && (
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Featured
            </Badge>
          )}
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {liveUrl && (
            <Button size="sm" variant="ghost" className="text-primary hover:text-[#1a1a1a]" onClick={() => { window.open(liveUrl, "_blank") }}>
              <ExternalLink size={16} className="mr-2" />
              View Project
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="ghost" className="text-primary hover:text-[#1a1a1a]" onClick={() => { toast({ title: "⚠ Código Indisponível!", description: "Não é permitido visualizar o código dos projetos." }) }}>
              <Github size={16} className="mr-2" />
              GitHub
            </Button>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-lg" style={{
          background: 'linear-gradient(45deg, transparent, hsl(var(--neon-green) / 0.1), transparent)',
        }} />
      </div>
    </div>
  );
};

export default ProjectCard;