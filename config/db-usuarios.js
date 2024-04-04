import pkg from 'pg';
const { Pool } = pkg;
import "dotenv/config"; 


//desestructurar el config
const { DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env; //ahorramos de colocar esta extensión dentro de cada objeto

const config={
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE,
    host:DB_HOST,
    allowExitOnIdle: true//cierre automático
}//conexión pool

const pool = new Pool(config)


//     //getDate es una promesa que podria tener cualquier nombre, sólo sirve para corroborar si la conexión es correcta
// const getDate = async () => {

//     try {
//       const result = await pool.query("SELECT NOW()");
//       console.log(result.rows);
//       return result.rows;
//     } catch (error) {
//       console.error("Error al conectarse a la base de datos:", error);
//     }
//   };
//   getDate();


export default pool;