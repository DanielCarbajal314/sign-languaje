module.exports.buildWordQuery = (word) => ({
    TableName: "sign",
    KeyConditionExpression: '#sign_gloss = :sign_gloss',
    ExpressionAttributeNames: {
      '#sign_gloss': 'sign_gloss',
    },
    ExpressionAttributeValues: {
      ':sign_gloss': word,
    },
});