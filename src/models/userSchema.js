const Knex = require('knex')
const { development } = require('../../knexfile')
const { Model } = require('objection')
const knexConnection = Knex(development.connection)

Model.knex(knexConnection)

class User extends Model {
    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        const Idea = require('./ideasSchema')
        return {
            idea: {
                relation: Model.HasManyRelation,
                modelClass: Idea,
                join: {
                    from: 'ideas.id',
                    to: 'ideas.user_id'
                }
            }
        }
    }
}

module.exports = User