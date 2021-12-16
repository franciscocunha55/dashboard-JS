const express = require('express')
const oracledb = require('oracledb');
const app = express();
const port = 3001;
//const bodyparser = require('body-parser')
const bodyParser = require("body-parser");

var jsonParser = bodyParser.json()

async function selectAllEmployees(req, res,selection, database) {
    let connection
    let result;
    try {
        connection = await oracledb.getConnection({
            user: "SIL_ALUNOS",
            password: "dbalunos",
            connectString:
                "(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.85.130)(PORT = 1522)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = AIDAPDB1)))",
            headers: {
                Accept: "Application/json",
            },
            multipleStatements: true,
        });
        console.log('connected to database');

        let query = 'SELECT * FROM USERS ' ;
        // run query to get all employees
        result = await connection.execute(query);
        console.log(result)

    } catch (err) {
        //send error message
        return res.send(err.message);
    } finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }

        } else {
            //send all employees
            return res.send(result);
        }
    }
}

app.get('/', function (req, res) {
    //fetch all employees from db and send it
    res.send('Hello world')
})

app.get('/employees', function (req, res) {
    //fetch all employees from db and send it
    selectAllEmployees(req, res,'*','employees');
})


//// TABELA HL7 RECEBE \\\\\\

async function selectTable_HL7_Recebe(req,res){
    let connection
    let result;
    try {

        connection = await oracledb.getConnection({
            user: "SIL_ALUNOS",
            password: "dbalunos",
            connectString:
                "(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.85.130)(PORT = 1522)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = AIDAPDB1)))",
            headers: {
                Accept: "Application/json",
            },
            multipleStatements: true,
        });
        console.log('connected to database');

        let query = 'SELECT * from HL7_HL7RECEB ' ;
        
        result = await connection.execute(query);
        //console.log(result)

    } catch (err) {
        //send error message
        return res.send(err.message);
    } finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }

        }
        if(result.rows.length === 0 ){
            res.json('query send no rows')
        }else {
            //send all employees
            return res.json(result.rows);
        }}
}

app.get("/app/hl7_recebe", function(req,res){
    selectTable_HL7_Recebe(req,res)
})


//// TABELA HL7 RECEBE \\\\\\

async function selectTable_HL7_Envia(req,res){
    let connection
    let result;
    try {

        connection = await oracledb.getConnection({
            user: "SIL_ALUNOS",
            password: "dbalunos",
            connectString:
                "(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.85.130)(PORT = 1522)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = AIDAPDB1)))",
            headers: {
                Accept: "Application/json",
            },
            multipleStatements: true,
        });
        console.log('connected to database');

        let query = 'SELECT * from HL7_HL7ENVIA ' ;

        result = await connection.execute(query);
        //console.log(result)

    } catch (err) {
        //send error message
        return res.send(err.message);
    } finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }

        }
        if(result.rows.length === 0 ){
            res.json('query send no rows')
        }else {
            //send all employees
            return res.json(result.rows);
        }}
}

app.get("/app/hl7_envia", function(req,res){
    selectTable_HL7_Envia(req,res)
})


//// TABELA LAB ACTIVOS\\\\\\

async function selectTable_Lab_Activos(req,res){
    let connection
    let result;
    try {

        connection = await oracledb.getConnection({
            user: "SIL_ALUNOS",
            password: "dbalunos",
            connectString:
                "(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.85.130)(PORT = 1522)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = AIDAPDB1)))",
            headers: {
                Accept: "Application/json",
            },
            multipleStatements: true,
        });
        console.log('connected to database');

        let query = 'SELECT DESI, CODI, DATA1, DURACAO, ACTIVO FROM SIL_LABACTIVOS ' ;

        result = await connection.execute(query);
        //console.log(result)

    } catch (err) {
        //send error message
        return res.send(err.message);
    } finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }

        }
        if(result.rows.length === 0 ){
            res.json('query send no rows')
        }else {
            //send all employees
            return res.json(result.rows);
        }}
}

app.get("/app/lab_activos", function(req,res){
    selectTable_Lab_Activos(req,res)
})


//// PARAMETRIZACOES\\\\\\

async function select_Parametrizacoes(req,res){
    let connection
    let result;
    try {

        connection = await oracledb.getConnection({
            user: "SIL_ALUNOS",
            password: "dbalunos",
            connectString:
                "(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.85.130)(PORT = 1522)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = AIDAPDB1)))",
            headers: {
                Accept: "Application/json",
            },
            multipleStatements: true,
        });
        console.log('connected to database');

        let query = 'SELECT TIPO, ACTIVO FROM PARAMETRIZACAO_AG61_1 ' ;
        result = await connection.execute(query);
    } catch (err) {
        //send error message
        return res.send(err.message);
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);}
        }
        if(result.rows.length === 0 ){
            res.json('query send no rows')
        }else {
            //send all employees
            const aa = result.rows

            let arrayOfObjects = [];

            aa.forEach((a) => {
                console.log('nome', a[0])
                console.log('estado', a[1])
                let obj = {};
                obj['name'] = a[0];
                obj['status'] = a[1];
                arrayOfObjects.push(obj);
            })
            return res.json(arrayOfObjects);
        }}
}

app.get("/app/parametrizacoes", function(req,res){
    select_Parametrizacoes(req,res)
})


async function update_Parametrizacoes(req,res){
    let connection
    let result;
    try {

        connection = await oracledb.getConnection({
            user: "SIL_ALUNOS",
            password: "dbalunos",
            connectString:
                "(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.85.130)(PORT = 1522)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = AIDAPDB1)))",
            headers: {
                Accept: "Application/json",
            },
            multipleStatements: true,
        });
        console.log('connected to database');

        //console.log(req)

        //console.log(req.body.state)

        let query = "UPDATE PARAMETRIZACAO_AG61_1 SET activo = '" + req.body.state+  "' WHERE tipo = '" + req.body.name + "'" ;

        console.log('fiz a', query)

        result = await connection.execute(query);


    } catch (err) {
        //send error message
        console.log('dei erro', err)
        return res.send(err.message);
    } finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }

        }
    }
}


app.post("/app/parametrizacoes/", jsonParser, function(req,res){
    //console.log(req.params)
    req.headers['content-type'] = 'application/json';
    update_Parametrizacoes(req,res)
})

//app.use(function(req, res, next) { req.header("Content-Type", "application/json"); res.header("Content-Type", "application/json"); next(); });

app.listen(port, () => console.log("nodeOracleRestApi app listening on port %s!", port))