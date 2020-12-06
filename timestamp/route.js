async function routes(fastify, options) {
    fastify.get("/", async (req, res) => {
        return { hello: "world"}
    })


    fastify.get("/api/timestamp/:date", async (req, res) => {
        let current = req.params.date

        let unix = new Date(current).getTime()
        let utc = new Date(current).toUTCString()

        return { 
            unix: unix,
            utc: utc
        }
    })
}

module.exports = routes