const BlogValidation = require("../validation/BlogValidation")
const slugify = require('slugify')
module.exports = async (req, res) =>{
  try{
    const data = await BlogValidation.validateAsync(req.body)
    const slugified = slugify(data.title, {
      replacement: '-',
      remove: undefined,
      lower: true,
      strict: true,
    })
    const blog = await req.psql.blog.create({
      title: data.title,
      text: data.text,
      media_id: data.mdeia,
      user_id: req.user.id,
      slugify: slugified
    })
    await res.status(200).json({
      ok: true,
      data: blog
    })
  }
  catch(e){
    console.log(e);
  }
}