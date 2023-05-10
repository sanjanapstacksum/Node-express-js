const express = require("express");
const router = express.Router();
const path = require("path");
const blogs = require("../data/blogs");

// router.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../templates/index.html'))
// })

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/blog", (req, res) => {
  // blogs.forEach(element => {
  //     console.log(element.title)
  // });
  // res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
  res.render("blogHome", {
    blogs: blogs,
  });
});
router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  console.log(myBlog,"myblog");

  res.render("blogPage", {
    title: myBlog[0]?.title,
    content: myBlog[0]?.content,
  });
  //   res.sendFile(path.join(__dirname, "../templates/blogPage.html"));
});

module.exports = router;
