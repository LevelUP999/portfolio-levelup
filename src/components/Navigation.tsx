import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Projetos', path: '/projects' },
    { name: 'Habilidades', path: '/skills' },
    { name: 'Sobre mim', path: '/about' },
    { name: 'Contato', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text">
            &lt;Dev/&gt;
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:gradient-text transition ${isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:block">
            <Link className="tech-glow bg-primary text-primary-foreground hover:bg-primary/90 p-2 rounded border-2 border-[#00ff8c] hover:bg-transparent hover:text-[#00ff8c]" to={"/contact"} >
              Contacte-me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link className="tech-glow bg-primary text-primary-foreground hover:bg-primary/90 w-full" to={"/contact"}>
                Contacte-me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;