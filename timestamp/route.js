const dateParser = async (dateObj) => {
    // incoming as string

    let dateParsed = new Date(dateObj);
    let unix = dateParsed.getTime(); 
    let utc = dateParsed.toUTCString(); 


    if (dateObj.length == 13 ) {
        utc = new Date(parseInt(dateObj)).toUTCString() 
        unix = parseInt(dateObj)

        return { 
            utc, 
            unix 
        } 
    }

    if (dateObj === "") {    
        return { 
            unix: new Date().getTime(),
            utc: new Date().toUTCString() 
        }
    } 

    return {
        unix: unix,
        utc: utc
    }    

} 

async function routes(fastify, options) {
    fastify.get("/", async (req, res) => {
        return { hello: "world"}
    })


    fastify.get("/api/timestamp/:date", async (req, res) => {
        date = await dateParser(req.params.date);
        return date
    })
}

module.exports = routes