module.exports = ({env}) => ({

    graphql: {
        config: {
          endpoint: '/graphql',
          shadowCRUD: true,
          playgroundAlways: false,
          depthLimit: 7,
          amountLimit: 100,
          apolloServer: {
            tracing: false,
          },
        },
      },
      //Дополнительно нужно создать файл lifecycles.js в папке 
      //src/api/Order(или любая другая с информмацией для письма и полем с email клиента).см файл lifecycles.js
      email: { 
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: env('SMTP_HOST', 'smtp-mail.outlook.com'),
            port: env('SMTP_PORT', 587),
            auth: {
              user: env('SMTP_USERNAME'),
              pass: env('SMTP_PASSWORD'),
            },
            // ... any custom nodemailer options
          },
          settings: {
            defaultFrom: 'rahmaninov_andy@outlook.com',
            defaultReplyTo: 'rahmaninov_andy@outlook.com',
          },
        },
      }
});
//Этот пример кода можно использовать в контроллере или служебном пути:
 //./src/api/{имя API}/controllers/{имя API}.js или ./src/api/{имя API}/services/{имя API}.js//