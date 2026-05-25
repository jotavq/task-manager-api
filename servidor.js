import 'dotenv/config'
import express from 'express'
import { engine } from 'express-handlebars'
import Post from './models/Post.js'

const app = express()
const PORT = process.env.PORT || 3001

// configurações
    // template engine

    app.engine('handlebars', engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
        helpers: {
            formatarData(data) {
                if (!data) return ''
                const date = new Date(data)
                return date.toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                })
            },
        },
    }))

    app.set('view engine', 'handlebars')

    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())

// Rotas
    app.get('/', (req, res) =>{
      Post.findAll({order:[['id', 'DESC']]}).then((posts) => {
        res.render('home', {posts: posts}) 
      }) 
    })

    app.get('/cadastro', (req, res) =>{
        res.render('formulario')
    })

    app.get('/editar/:id', (req, res) => {
        Post.findByPk(req.params.id).then((post) => {
            if (!post) {
                return res.status(404).send('Postagem não encontrada.')
            }
            res.render('formulario', { editando: true, post })
        })
    })

    app.post('/add', (req, res) =>{
       Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
       }).then(() =>{
        res.redirect('/')
       }).catch((erro) => {
        res.send("Houve um erro: " + erro)
       })
    })

    app.post('/editar/:id', (req, res) => {
        Post.update({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }, { where: { id: req.params.id } }).then(() => {
            res.redirect('/')
        }).catch((erro) => {
            res.send("Houve um erro: " + erro)
        })
    })

    app.post('/deletar/:id', (req, res) => {
        Post.destroy({where: {'id': req.params.id}}).then(() =>{
            res.redirect('/')
        }).catch((erro) =>{
            res.send("Postagem não encontrada.")
        })
    })


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
