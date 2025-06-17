const sendWhatsAppMessage = async (to, templateName, languageCode = 'pt_BR') => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_META_API_URL}/${process.env.REACT_APP_PHONE_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: to,
          type: "template",
          template: {
            name: templateName,
            language: { code: languageCode }
          }
        })
      }
    );
    return await response.json();
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    throw error;
  }
};

export { sendWhatsAppMessage };