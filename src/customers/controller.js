const AWS = require('aws-sdk');
const config = require('../../config');
const { v4: uuidv4 } = require('uuid');
uuidv4();
// const { PutItemCommand } = require("@aws-sdk/client-dynamodb");
// const { ddbClient } = require("../../ddbClient.js");
AWS.config.update(config.aws_remote_config);

const getCustomers = async (req, res)=> {
    const docClient = new AWS.DynamoDB.DocumentClient();
    // const customers = config.aws_table_name;
    const params = {
        TableName: config.aws_table_name
      }
      try {
        const customers = docClient.scan(params, []);
        // console.log({allCustomers});
        const body = {
          customers
        }
        res.json(body);
      } catch(error) {
        console.error('*****HAPPENS HERE*****: ', error);
        res.status(500).send(error);
      }
}


const addCustomers = async(req, res) => {
    const docClient = new AWS.DynamoDB.DocumentClient();

    try {
        const params = {
            TableName: config.aws_table_name,
            Item: { ...req.body } // Capturamos los datos(variables) que vamos a enviar
          }
          // docClient, es el parametro del SDK, que recibe
          await docClient.put(params).promise().then(() => {
            const body = { // Recibimos los datos en el cuerpo
              Operation: 'SAVE',
              Message: 'SUCCESS',
              Item: { ...req.body }
            }
            console.log(body);
            res.json(body);
          }, error => {
            console.error('*******HAPPENS HERE...2********: ', error);
            res.status(500).send(error);
          })
        
    } catch (error) {
        // console.log(error);
        return error;
    }

}

module.exports = {
    getCustomers,
    addCustomers
}