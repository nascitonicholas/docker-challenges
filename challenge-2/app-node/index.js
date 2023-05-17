const { error } = require('console')
const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql')
const tablePeople = 'people'
const check = `SELECT 1 FROM ${tablePeople} LIMIT 1`
const insert = `INSERT INTO people(NAME) VALUES('NICHOLAS')`
const select = `SELECT * FROM people`

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config);

  connection.query(insert);

  connection.query(select, (error, results, fields) => {
    if (error) {
      console.error('Erro ao executar a consulta: ', error);
      return;
    }

    console.log('Resultado da consulta: ', results);
    const rows = results.map(row => row.name);
    const rowsString = rows.join(', ');

    console.log('Metadados dos campos: ', fields);

    res.send('<div><h1>Full Cycle</h1><ol>' + rowsString + '</ol></div>')
  })

  connection.end()
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})