const chatbot = require('../chatbot/chatbot')
module.exports = app =>{

    app.post('/text_query', async(req, res)=>{
        const {text, userId} = req.body;
        const resultQuery = await chatbot.textQuery(text, userId)
        // console.log(resultQuery)
        const resObj ={
            intentName: resultQuery.intent.displayName,
            userQuery: resultQuery.queryText,
            fulfillmentText: resultQuery.fulfillmentText

        }
        console.log(resObj)
        res.send("Text Query")
    })
    // app.post('/event_query', (req, res)=>{
    //     console.log(req)
    //     res.send("Text Query")
    // })
}