import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { CheckmarkAnimation } from '@/components/ui/CheckmarkAnimation';
import { whatsappLinks } from '@/utils/whatsapp';
import { useLocation } from 'react-router-dom';

// Updated webhook for all routes
const WEBHOOK = "https://n8n.rfmidias.com.br/webhook/c85ed24b-b5f7-4eca-8759-4fe81a284cb1";

// Objeto com links de pagamento por rota
const PAYMENT_LINKS = {
  "/lpmodelo1": "https://mpago.li/1KhaYWC",
  "/lpmodelo2": "https://mpago.li/1fkK8Dm",
  "/lpmodelo3": "https://mpago.li/2pzquVr",
  "/lpmodelo4": "https://mpago.li/33tCjxK",
};

interface ContactFormProps {
  modelTitle: string;
  modelPrice?: string;
}

const ModelContactForm: React.FC<ContactFormProps> = ({
  modelTitle,
  modelPrice
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const {
    toast
  } = useToast();
  const location = useLocation();
  
  // Validate form fields
  useEffect(() => {
    const validateForm = () => {
      const isNameValid = name.trim() !== '';
      const isEmailValid = email.includes('@');
      const isPhoneValid = phone.replace(/\D/g, '').length >= 10;
      
      setIsFormValid(isNameValid && isEmailValid && isPhoneValid);
    };
    
    validateForm();
  }, [name, email, phone]);
  
  // Function to determine button styles based on page path
  const getAcquireButtonStyle = () => {
    switch(location.pathname) {
      case '/lpmodelo1':
        return "bg-[#C0C0C0] border border-[#C0C0C0] text-black"; // Silver
      case '/lpmodelo2':
        return "bg-gradient-to-r from-[#C0C0C0] to-[#CD7F32] border border-[#CD7F32] text-black"; // Silver to Bronze gradient
      case '/lpmodelo3':
        return "bg-[#CD7F32] border border-[#CD7F32] text-black"; // Bronze
      case '/lpmodelo4':
        return "bg-[#E3B341] border border-[#E3B341] text-black"; // Gold
      default:
        return "bg-[#E3B341] border border-[#E3B341] text-black"; // Default gold
    }
  };

  // Check if we're on lpmodelo3 or lpmodelo4 routes
  const isAdvancedModel = ['/lpmodelo3', '/lpmodelo4'].includes(location.pathname);

  // Handle redirect to payment link
  const handleRedirectToPayment = () => {
    const paymentLink = PAYMENT_LINKS[location.pathname as keyof typeof PAYMENT_LINKS];
    if (paymentLink) {
      window.location.href = paymentLink;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
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
      phone,
      message,
      model: modelTitle,
      price: modelPrice,
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
      
      setIsSuccess(true);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
        duration: 5000
      });
      
      // Reset form
      setTimeout(() => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setIsSuccess(false);
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Erro ao enviar, tente novamente.",
        variant: "destructive",
      });
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div className="relative">
      <div className={`transition-all duration-500 ${isSuccess ? 'opacity-0' : 'opacity-100'}`}>
        <form onSubmit={handleSubmit} className="bg-dark-lighter border border-gold/20 rounded-lg p-8 shadow-lg reveal">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                Seu nome
              </label>
              <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)} className="bg-dark border border-gold/20 text-white placeholder:text-gray-500 focus:border-gold px-4 py-3" placeholder="Nome completo" required disabled={isSubmitting} />
            </div>
            
            <div className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Seu e-mail
                </label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-dark border border-gold/20 text-white placeholder:text-gray-500 focus:border-gold px-4 py-3" placeholder="email@exemplo.com" required disabled={isSubmitting} />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                  Seu telefone
                </label>
                <Input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="bg-dark border border-gold/20 text-white placeholder:text-gray-500 focus:border-gold px-4 py-3" placeholder="(00) 00000-0000" disabled={isSubmitting} />
              </div>
            </div>
            
            <div>
              <label htmlFor="model" className="block text-gray-300 text-sm font-medium mb-2">
                Modelo selecionado
              </label>
              <Input id="model" type="text" value={`${modelTitle}${modelPrice ? ` - ${modelPrice}` : ''}`} readOnly className="bg-dark border border-gold/20 text-gold/80 focus:border-gold cursor-default px-4 py-3" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                Mensagem (opcional)
              </label>
              <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} className="bg-dark border border-gold/20 h-32 text-white placeholder:text-gray-500 focus:border-gold resize-none px-4 py-3" placeholder="Conte-nos mais sobre seu projeto..." disabled={isSubmitting} />
            </div>
            
            {/* Updated buttons with new styles and validation */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
              {/* Adquirir Agora button - Primary with validation */}
              <button 
                type="button" 
                onClick={handleRedirectToPayment}
                disabled={!isFormValid || isSubmitting} 
                className={`${getAcquireButtonStyle()} px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(227,179,65,0.4)] ${!isFormValid ? 'opacity-60 pointer-events-none' : ''}`}
              >
                <span className="button-text">Adquirir Agora</span>
              </button>
              
              {/* Solicitar Contato button - Secondary */}
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-transparent border border-gold text-gold px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:text-white"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="button-text">Solicitar Contato</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      
      {/* Success animation */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transform transition-all duration-500 ${isSuccess ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="bg-dark-lighter border border-gold/20 rounded-lg p-12 w-full h-full flex flex-col items-center justify-center">
          <CheckmarkAnimation />
          <h3 className="text-2xl font-semibold text-gold mt-6 mb-3">Solicitação enviada!</h3>
          <p className="text-gray-300 text-center">
            Recebemos seus dados. Nossa equipe entrará em contato em breve.
          </p>
        </div>
      </div>
    </div>;
};

export default ModelContactForm;
