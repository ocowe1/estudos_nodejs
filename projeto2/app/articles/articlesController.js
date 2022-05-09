const express = require("express");
const router = express.Router();
const Category = require('../categories/Category')
const slugify = require("slugify");
const Articles = require("./Articles")

router.get("/admin/articles/new", (req,res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories})
    })
})

router.post("/articles/save", (req,res) => {
    let title = req.body.title
    let article = req.body.body
    let category = req.body.category

    Articles.create({
        title: title,
        slug: slugify(title),
        body: article,
        categoryId: category
    }).then(() => {
        res.redirect("/admin/articles")
    }).catch(error => {
        console.log(error)
    })
})

router.get("/admin/articles", (req,res) => {
    Articles.findAll({
        include: [{model: Category}]
    }).then(articles => {
        res.render("admin/articles/index", {articles: articles})
    })
})

router.post("/articles/delete", (req,res) => {
    var id = req.body.id
    if(id !== undefined)
    {
        if(!isNaN(id))
        {
            Articles.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/articles")
            })
        }else{
            res.redirect("/admin/articles")
        }
    }else{
        res.redirect("/admin/articles")
    }
})

router.get("/admin/articles/show/:id", (req,res) => {
    let id = req.params.id
    if(isNaN(id))
    {
        res.redirect("/admin/categories")
    }
    Articles.findByPk(id).then(article => {
        if(article !== undefined)
        {
            res.render("admin/articles/edit", {article: article})
        }else{
            console.log("deu ruim")
            res.redirect("/admin/articles")
        }
    }).catch(error => {
        res.redirect("/admin/articles")
    })
})



module.exports = router;