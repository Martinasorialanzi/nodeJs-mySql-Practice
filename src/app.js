import express  from "express";
import morgan from "morgan";
import config from "./config";

const path =require('path')
const mysql=require('mysql')
const myConnection=require('express-myconnection')

//routes


const app=express();

//Settings
app.set("port",process.env.PORT || 3000);
app.set('view engine','ejs'); //uso ejs como motor de plantillas 
//Motor de plantillas: Son herramientas que nos ayudan a dividir el código HTML en partes mas pequeñas, donde podemos reutilizar en otros archivos HTML y además tienen la capacidad de utilizar variables, con la finalidad de simplificar el código. Express toma las plantillas por default de la carpeta views, en caso de querer cambiar la ruta de la carpeta usaremos app.set , con la propiedad "views"
//https://mauriciogc.medium.com/express-parte-vi-motor-de-plantillas-con-pug-y-ejs-6837cd3a390d#:~:text=Motor%20de%20plantillas%3A%20Son%20herramientas,finalidad%20de%20simplificar%20el%20c%C3%B3digo.

//ahora le tengo que decirle endonde estan las carpetas de las vistas
app.set('views',path.join(__dirname,'views')) //path.join(__dirname,'views') esto es la ruta donde estan la view y puedo usar en todo procesador (es como mas universal porque hay algunos que  )



//Middleware (son como pequeñas funciones intermedias entre una peticion y una respuesta)
app.use(morgan("dev")); //cuando yo despliegue mi aplicacion voy a tener un listado de las peticiones que voy teniendo
app.use(myConnection(mysql),{
    host: config.HOST || "",
    database: config.DATABASE || "",
    user: config.USER || "",
    password:config.PASSWORD || ""
},'single')
//Routes


export default app;