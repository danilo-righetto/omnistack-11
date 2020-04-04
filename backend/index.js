const express = require('express');

const app = express();

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o '?' (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: 
   */

   /**
    * SQL: MySQL, SQLITE, PostegreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

app.get('/users', (request, response) => {
    const params = response.query;
    const body = request.body;

    console.info(params);
    console.info(body);
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Diego Fernandes'
    });
});

app.get('/user/:id', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Diego Fernandes'
    });
});

app.listen(3333);