const TableName = "sign";

module.exports.buildWordQuery = (word) => word?{
  TableName,
  KeyConditionExpression: '#sign_gloss = :sign_gloss',
  ExpressionAttributeNames: {
    '#sign_gloss': 'sign_gloss',
  },
  ExpressionAttributeValues: {
    ':sign_gloss': word,
  },
} : {
  TableName
};