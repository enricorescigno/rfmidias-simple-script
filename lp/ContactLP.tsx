import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { whatsappLinks } from '@/utils/whatsapp';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Textarea } from '@/components/ui/textarea';

// Updated webhook for all routes
const WEBHOOK = "https://n8n.rfmidias.com.br/webhook/c85ed24b-b5f7-4eca-8759-4fe81a284cb1";

const ContactLP = () => {
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em breve.",
        duration: 5000
      });

      // Reset form
      setName('');
      setEmail('');
      setWhatsapp('');
      setMessage('');
      setIsSubmitting(false);

      // Optional: Redirect to WhatsApp
      const message = encodeURIComponent(`Olá! Sou ${name} e tenho interesse em uma Landing Page. Meu email: ${email}. Podemos conversar?`);
      window.open(`https://wa.me/${whatsappLinks.meeting.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
    }, 1500);
  };

  const handleAcquireNow = () => {
    // Redirect to lpoptions page
    navigate('/lpoptions');
  };

  const handleScheduleMeeting = async () => {
    if (!name || !email || !whatsapp) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        duration: 5000
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Dados a serem enviados para o webhook
    const formData = {
      name,
      email,
      whatsapp,
      message,
      source: "Contact Form LP",
      path: location.pathname
    };
    
    try {
      // Using the single webhook URL for all routes
      const response = await fetch(WEBHOOK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Falha na requisição');
      }
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
        duration: 5000
      });
      
      // Reset form
      setName('');
      setEmail('');
      setWhatsapp('');
      setMessage('');
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Erro ao enviar, tente novamente.",
        variant: "destructive",
        duration: 5000
      });
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contato" className="py-24 px-6 bg-dark-lighter relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-lighter opacity-80"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text gold-gradient">
              Marque sua Reunião
            </h2>
            
            <p className="text-gray-300 text-lg">
              Escolha seu modelo ou deixe seu contato para criar sua própria LP com a RF Mídias.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-dark-lighter p-8 rounded-lg border border-gold/20 shadow-lg reveal">
            <div className="space-y-3">
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name" className="text-white">Nome</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Seu nome completo" 
                    required 
                    className="mt-1 bg-dark border-gold/30 focus:border-gold focus-visible:ring-gold text-white px-4 py-3" 
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">E-mail</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="seu@email.com" 
                    required 
                    className="mt-1 bg-dark border-gold/30 focus:border-gold focus-visible:ring-gold text-white px-4 py-3" 
                  />
                </div>
                
                <div>
                  <Label htmlFor="whatsapp" className="text-white">WhatsApp</Label>
                  <Input 
                    id="whatsapp" 
                    value={whatsapp} 
                    onChange={e => setWhatsapp(e.target.value)} 
                    placeholder="(00) 0000-0000" 
                    required 
                    className="mt-1 bg-dark border-gold/30 focus:border-gold focus-visible:ring-gold text-white px-4 py-3" 
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">Mensagem (opcional)</Label>
                  <Textarea 
                    id="message" 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    placeholder="Conte-nos mais sobre seu projeto..." 
                    className="mt-1 bg-dark border-gold/30 focus:border-gold focus-visible:ring-gold text-white px-4 py-3 resize-none min-h-[100px]" 
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {/* Primary button - Adquirir Agora */}
              <button 
                type="button" 
                onClick={handleAcquireNow} 
                className="bg-[#E3B341] border border-[#E3B341] text-black px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(227,179,65,0.4)]"
                disabled={isSubmitting}
              >
                <span className="button-text">
                  {isSubmitting ? "Processando..." : "Adquirir Agora"}
                </span>
              </button>
              
              {/* Secondary button - Solicitar Contato */}
              <button 
                type="button" 
                onClick={handleScheduleMeeting} 
                className="bg-transparent border border-gold text-gold px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:text-white"
                disabled={isSubmitting}
              >
                <span className="button-text relative z-10">
                  {isSubmitting ? "Processando..." : "Solicitar Contato"}
                </span>
              </button>
            </div>
            
            <div className="flex justify-center items-center gap-2 text-xs text-gray-400 mt-6">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span>Seus dados estão protegidos e sua privacidade é garantida</span>
            </div>
            
            {/* Hidden tracking field */}
            <input type="hidden" name="campaign_source" value="lp_direct" />
          </form>
        </div>
      </div>
    </section>;
};

export default ContactLP;
