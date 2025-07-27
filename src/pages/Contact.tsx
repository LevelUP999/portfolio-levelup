import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useLang } from '@/contexts/langContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { lang } = useLang();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado por sua mensagem.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsLoading(false);
    }, 1300);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo_pt = [
    {
      icon: Mail,
      label: 'Email',
      value: 'levelup.twitch.tv@gamil.com',
      href: 'mailto:levelup.twitch.tv@gamil.com'
    },
    {
      icon: Phone,
      label: 'Número',
      value: '+55 (34) 99675-3225',
      href: 'tel:+5534996753225'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Uberlândia, Brazil',
      href: 'https://www.google.com/search?q=uberlandia'
    }
  ];

  const contactInfo_en = [
    {
      icon: Mail,
      label: 'Email',
      value: 'levelup.twitch.tv@gamil.com',
      href: 'mailto:levelup.twitch.tv@gamil.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+55 (34) 99675-3225',
      href: 'tel:+5534996753225'
    },
    {
      icon: MapPin,
      label: 'Localization',
      value: 'Uberlândia, Brazil',
      href: 'https://www.google.com/search?q=uberlandia'
    }
  ];

  if (lang == "pt-br") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Fale Comigo</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tem algum <strong className="gradient-text">projeto</strong> em mente e precisa de um <strong className="gradient-text">website</strong>? Não perca tempo e mande sua <strong className="gradient-text">mensagem</strong>!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="animate-scale-in">
                <div className="bg-card border border-border rounded-lg p-8" style={{ position: "sticky", top: "130px" }}>
                  <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="neon-border"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Seu Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="neon-border"
                        />
                      </div>
                    </div>

                    <div>
                      <Input
                        name="subject"
                        placeholder="Assunto"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="neon-border"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Sua mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="neon-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full tech-glow bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2 animate-leftRight" />
                          Enviar mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info & Actions */}
              <div className="space-y-8 animate-fade-in mb-7">
                {/* Contact Information */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
                  <div className="space-y-4">
                    {contactInfo_pt.map((info) => (
                      <a
                        key={info.label}
                        href={info.href}
                        target='_blank'
                        className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      >
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <info.icon size={20} />
                        </div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          <div className="text-sm text-muted-foreground">{info.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">Disponibilidade <Badge variant="secondary">Freelancer</Badge></h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full animate-glow"></div>
                    <span className="text-primary font-medium">Disponível para fazer projetos</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Estou disponível para criar pojetos desde o mais <strong>simples</strong> ao mais <strong>robusto</strong>.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-6">Outras ações</h3>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full neon-border justify-start"
                      onClick={() => {
                        toast({
                          title: "⚠ Ainda não disponível! ",
                          description: "O certificado ainda não está disponível",
                        })
                      }}
                    >
                      <Download size={18} className="mr-3" />
                      Ver Certificado<strong>SenacTEC</strong>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full neon-border justify-start"
                      onClick={() => {
                        toast({
                          title: "⚠ Ainda não disponível! ",
                          description: "A opção ainda pode estar com problemas...",
                        })
                      }}
                    >
                      <Download size={18} className="mr-3" />
                      Ver currículo
                    </Button>
                  </div>
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
                <span className="gradient-text">Contact me</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Do you have a <strong className="gradient-text">project</strong> in mind and need a <strong className="gradient-text">website</strong>? Don't waste time, send us a <strong className="gradient-text">message</strong>!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="animate-scale-in">
                <div className="bg-card border border-border rounded-lg p-8" style={{ position: "sticky", top: "130px" }}>
                  <h2 className="text-2xl font-bold mb-6">Send your Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="neon-border"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="neon-border"
                        />
                      </div>
                    </div>

                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="neon-border"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your menssage"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="neon-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full tech-glow bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2 animate-leftRight" />
                          Send menssage
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info & Actions */}
              <div className="space-y-8 animate-fade-in mb-7">
                {/* Contact Information */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo_en.map((info) => (
                      <a
                        key={info.label}
                        href={info.href}
                        target='_blank'
                        className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      >
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <info.icon size={20} />
                        </div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          <div className="text-sm text-muted-foreground">{info.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">Availability <Badge variant="secondary">Freelancer</Badge></h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full animate-glow"></div>
                    <span className="text-primary font-medium">Available to do projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    I am available to create projects from the <strong>simplest</strong> to the most <strong>robust</strong>.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-6">Other actions</h3>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full neon-border justify-start"
                      onClick={() => {
                        toast({
                          title: "⚠ Ainda não disponível! ",
                          description: "O certificado ainda não está disponível",
                        })
                      }}
                    >
                      <Download size={18} className="mr-3" />
                      View Certificate <strong>SenacTEC</strong>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full neon-border justify-start"
                      onClick={() => {
                        toast({
                          title: "⚠ Ainda não disponível! ",
                          description: "A opção ainda pode estar com problemas...",
                        })
                      }}
                    >
                      <Download size={18} className="mr-3" />
                      See CV
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default Contact;