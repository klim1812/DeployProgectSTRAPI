
module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
              to: result.email,// поле в админ панели strapi в таблице Order, адрес клиента
              from: 'rahmaninov_andy@outlook.com', // Почтовый ящик настроенный в файле plugins.js, т.е мой 
              cc: 'rahmaninov_andy@outlook.com',// на этот адресс дублируеться письмо, может быть любой адресс
            //   bcc: 'valid email address',
              // replyTo: 'rahmaninov_andy@outlook.com',
              subject: 'Заголовок письма: Ваш заказ оформлен',
              text: `your order is: ${result.user}`,// поле в админ панели strapi в таблице Order
              html: ` ${result.email}, ${result.user},${result.order_text}`
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}