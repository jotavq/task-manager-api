import db from './db.js'
import { Sequelize } from 'sequelize'

const Post = db.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

export default Post
// Post.sync({force: true})