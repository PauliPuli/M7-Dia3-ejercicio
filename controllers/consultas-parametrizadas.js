import pool from "../config/db-usuarios.js"; 

// const email = "' OR '' = '";//malicioso
// const id= 123
const email = "ben.torres@example.com"; 

// const usuarios= async()=>{
//     const response= "select * from users";
//     const res=await pool.query(response);
//     console.log(res.rows);
// }

// usuarios();

//transformada en objeto
const usuarios= async()=>{
    const sql={
        text: "select * from users",
    }
    const res=await pool.query(sql);
    console.log(res.rows);
}

usuarios();

//consulta para tener un usuario por id en la base de datos 

//con parámetrización
// const consultaUsuario= async(email)=>{
//     const response="select * from users where email=$1"; //nos falta una constante que nos determine ese id, ¿no?
//     const values = [email];
//     const res = await pool.query(response, values);
//     console.log(res.rows)
// }
// consultaUsuario(email)


//Con un objeto JSON como argumento (una capa más de seguridad contra tóxicos)
// const consultaUsuario= async(email)=>{
//     const sql={
//     text:"select * from users where email=$1" ,
//     values: [email]
//     };
//     const res = await pool.query(sql);
//     console.log(res.rows)
// }
// consultaUsuario(email)