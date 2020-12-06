async function routes(fastify, options) {
    fastify.get("/", async (req, res) => {
        return { hello: "world"}
    })


    fastify.get("/api/timestamp/:date", async (req, res) => {

        let incoming = req.params.date
        var utc;
        var unix;

        if (incoming === "") {
            console.log("hey?")
            utc = new Date().toUTCString()
            unix = new Date().getTime()
            return { 
                utc,
                unix 
            }
        }

        if (incoming.length == 13) {
            utc = new Date(parseInt(incoming)).toUTCString() 
            unix = parseInt(incoming)
            return { 
                utc, 
                unix 
            }            
        } else {
            unix = new Date(incoming).getTime()
            utc = new Date(incoming).toUTCString()
            return { utc, unix }   
        }        

        return { 
            error: "Invalid Date"
        }
    })
}

module.exports = routes