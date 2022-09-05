module.exports.success = body => ({
    statusCode: 200,
    headers: {
        "content-type":"application/json",
    },
    body: JSON.stringify(body)
});