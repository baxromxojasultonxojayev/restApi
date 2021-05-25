module.exports = async (req, res) =>{
  try{
    const blogs = await req.psql.blog.findAll({
      include: [
        { 
          model: req.psql.users,
          attributes: ['name']
        },
        {
          model: req.psql.files
        }
      ]
    })
    res.status(200).json({
      ok: true,
      data: blogs
    })
  }
  catch(e){
    res.status(400).json({
      ok: false,
      message: e +''
    })
  }
}