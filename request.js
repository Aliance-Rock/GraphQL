const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')
const _ = require('lodash')

const { categoryType, itemType, userType } = require('./type.js')
let { categories, items, users } = require('./dataSet.js')


const queryType = new GraphQLObjectType({
	name: 'Query',
	fields: {
		categories: {
			type: new GraphQLList(categoryType),
			resolve: (source, args) => {
				return categories
			},
		},
		category: {
			type: categoryType,
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (source, args) => {
				return _.find(categories, { id: args.id })
			},
		},
		item: {
			type: itemType,
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (source, args) => {
				return _.find(items, { id: args.id })
			},
		},
		items: {
			type: new GraphQLList(itemType),
			resolve: (source, args) => {
				return items
			},
		},
		user: {
			type: userType,
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (source, args) => {
				return _.find(users, { id: args.id })
			},
		},
	},
})

exports.queryType = queryType
