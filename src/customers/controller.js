const AWS = require('aws-sdk');
const config = require('../../config');
const { v4: uuidv4 } = require('uuid');
uuidv4();

const getCustomers = function (req, res) {
    AWS.config.update(config.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: config.aws_table_name
    };

    docClient.scan(params, function (err, data) {

        if (err) {
            console.log(err)
            res.send({
                success: false,
                message: err
            });
        } else {
            const { allCustomers } = data;
            res.send({
                success: true,
                customers: allCustomers
            });
        }
    });
}

const addCustomers = function (req, res) {
    AWS.config.update(config.aws_remote_config);
    const docClient = new AWS.DynamoDB.DocumentClient();
    const Item = { ...req.body };
    Item.id = uuidv4();
    Item.name,
    Item.country
    var params = {
        TableName: config.aws_table_name,
        Item: Item
    };

    // Call DynamoDB to add the item to the table
    docClient.put(params, function (err, data) {
        if (err) {
            res.send({
                success: false,
                message: err
            });
        } else {
            res.send({
                success: true,
                message: 'Added customer',
                customers: data
            });
        }
    });
}

module.exports = {
    getCustomers,
    addCustomers
}