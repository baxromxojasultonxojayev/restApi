const {Op} = require('sequelize')
module.exports = async (req, res) =>{
  try{
    console.log(req.session.createdAt);
    const sessions = await req.psql.sessions.findAll({
      where: {
        createdAt: {
          [Op.gte]: req.session.createdAt
        }
      }
    })
    console.log(sessions);
    res.json({
      ok: true,
      message: "User deleted"
    })
  }
  catch(e){
    res.status(404).json({
      ok: false,
      message: e +''
    })
  }
}