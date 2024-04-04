<h1>Diferencias entre desparametrizar vs desparametrizar</h1>
<p>Al usar una constante const <span>email = "' OR '' = '"</span> y las consultamos parametrizada obtenemos:</p>
<img src='https://github.com/PauliPuli/M7-Dia3-ejercicio/assets/156126623/75f36893-1840-4163-9d61-9ea99fb5e5d2'>
<p>Pero si consultamos sin parametrizar ocurre lo siguiente:</p>
<img src='https://github.com/PauliPuli/M7-Dia3-ejercicio/assets/156126623/6ead35be-b6b5-4906-b17d-bbd15857832f'>
<img src='https://github.com/PauliPuli/M7-Dia3-ejercicio/assets/156126623/41cc488a-382c-415b-85dc-31fb3f9b1137
'>
<p>¡Obtendremos toda la base de datos! Esto es un riesgo de SQL injection. Para más información lee <a href='https://node-postgres.com/features/queries#query-config-object'>aquí</a></p>
