
// Variables de entorno 

process.env.PORT = process.env.PORT || 3000;

process.env.ENV = process.env.NODE_ENV || 'dev';


if (process.env.NODE_ENV === 'dev') {
    process.env.URLDB = 'postgresql://postgres:root@localhost:5432/app-post';
} else {
    process.env.URLDB = 'postgres://sfntjvcembfqyr:9fba596d5b4c762d537cbaf9c8f872d374b8a50944ab94a47a446ac3bedaa660@ec2-54-83-49-109.compute-1.amazonaws.com:5432/den8f34fqlap6d';
}



