"use strict";
const AWS = require('aws-sdk');
const { success } = require('./shared/responses');
const { buildWordQuery } = require('./queries/build-word-query');

const getItemsByWord = (word) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const wordQuery = buildWordQuery(word);
  return word ? docClient.query(wordQuery).promise() : docClient.scan(wordQuery).promise();
}

module.exports.queryWord = async (event) => {
  const { word }  = event.queryStringParameters;
  const { Items } = await getItemsByWord(word)
  return success(Items)
};

