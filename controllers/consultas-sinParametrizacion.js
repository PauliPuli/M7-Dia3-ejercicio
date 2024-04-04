import pool from "../config/db-usuarios.js"; 

// const id= 123
// const email = "' OR '' = '";//malicioso
const email = "ben.torres@example.com"; 

//Consulta normal
// const email = "' OR '' = '"; //me quiere matar D:
// const usuarios= async()=>{
//     const response= "select * from users";
//     const res=await pool.query(response);
//     console.log(res.rows);
// }

// usuarios();


//consulta para tener un usuario por id en la base de datos 



//sin parametrización (Texto plano). Ahorras una línea de código, pero corres el riesgo de que se ejecute el código malicioso >:D
const consultaUsuario= async(email)=>{
    const response=`select * from users where email='${email}'`; //le comillé
    const res = await pool.query(response);
    console.log(res.rows)
}
consultaUsuario(email)


