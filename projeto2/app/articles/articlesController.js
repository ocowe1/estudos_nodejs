const express = require("express");
const router = express.Router();
const Category = require('../categories/Category')
const slugify = require("slugify");
const Articles = require("./Articles")

router.get("/admin/articles/new", (req,res) => {
    const categories = Category.findAll().then(categories => {
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
        console.log("foi")
    }).catch(error => {
        console.log(error)
    })
})

module.exports = router;