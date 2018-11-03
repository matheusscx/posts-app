
// Variables de entorno 

process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


if (process.env.NODE_ENV === 'dev')
    process.env.URIDB = 'postgresql://postgres:root@localhost:5432/app-post';




