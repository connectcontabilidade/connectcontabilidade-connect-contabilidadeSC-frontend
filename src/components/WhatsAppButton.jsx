import React from 'react';
import { sendWhatsAppMessage } from '../services/whatsappApi';

const WhatsAppButton = ({ phoneNumber }) => {
  const handleClick = async () => {
    try {
      await sendWhatsAppMessage(phoneNumber, 'welcome_message');
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      alert('Erro ao enviar mensagem');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="whatsapp-button"
    >
      Enviar Mensagem via WhatsApp
    </button>
  );
};

export default WhatsAppButton;