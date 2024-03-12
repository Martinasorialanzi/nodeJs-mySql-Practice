import app from "./app";



const main=()=>{  //en esta funcion tenemos la ejecucion de mi servidor crado con nodeJs
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};

main()