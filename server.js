const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema } = require('graphql')

const { queryType } = require('./request.js')

const port = 4200
const app = express()


const schema = new GraphQLSchema({ query: queryType })

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
)

app.listen(port)
console.log(`Перейдите на localhost:${port}/graphql`)
