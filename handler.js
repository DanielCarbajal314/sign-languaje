"use strict";
const AWS = require('aws-sdk');
const { success } = require('./shared/responses');
const { buildWordQuery } = require('./queries/build-word-query');

module.exports.queryWord = async (event) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const { word }  = event.queryStringParameters;
  const wordQuery = buildWordQuery(word);
  const { Items } = await docClient.query(wordQuery).promise()
  return success(Items)
};
