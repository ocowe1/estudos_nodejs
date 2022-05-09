const express = require("express");
const app = express();
const connection = require("./config/connection");
const Article = require("./app/articles/Articles");
const Category = require("./app/categories/Category");
const categoriesController = require("./app/categories/categoryController");
const articlesController = require("./app/articles/articlesController");
// View Engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Database
connection
    .authenticate()
    .then(() => {
        console.log('conectado ao banco de dados')
    }).catch((error) => {
    console.log(error)
})

app.use("/", categoriesController);
app.use("/", articlesController);

app.get('/', (req, res) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index", {articles: articles, categories: categories})
        })
    })
})

app.get("/:slug", (req, res) => {
    var slug = req.params.slug
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if (article !== undefined) {
            Category.findAll().then(categories => {
                res.render("articles", {article: article, categories: categories })
            })
        } else {
            res.redirect("/")
        }
    })
})

app.listen(8000, () => {
    console.log('o servidor está rodando')
});
