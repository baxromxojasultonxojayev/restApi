
module.exports = async (req, res) =>{
  try{
    const {id: sessionId} = req.params
    const session = await req.psql.sessions.findOne({
      where: {
        id: sessionId 
      }
    })
    if(session.dataValues.createdAt > req.session.createdAt ){
      throw new Error ('Permission denied')
    };
    await req.psql.sessions.destroy({
      where: {
        id: sessionId
      }
    })
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