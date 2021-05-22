const { compare } = require('../modules/bcrypt')
const { generateJWTToken } = require('../modules/jwt')
const LoginValidation = require('../validation/LoginValidation')

module.exports = async (req, res) =>{
  // let validation = SignUpValidation(req.body) 
  try{
    let {id, password} = await LoginValidation.validateAsync(req.body)
    let user = await req.psql.users.findOne({
        where: {
          id,
        } 
      })
    // user = {
    //   id: user.id,
    //   name: user.name
    // }
    if(!user) throw new Error ('user is not defined')
    let isTrue = await compare(password, user.dataValues.password)
    let useragent = req.headers["user-agent"]
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

    if(!(useragent && ip)) throw new Error ('Invalid request')
    let {id: sessionId} = await req.psql.sessions.create({
      user_id: user.id,
      ipAdress: ip,
      userAgent: useragent
    })


    // console.log(session);
    let token = generateJWTToken({id: sessionId})

    res.status(200).json({
      ok: true,
      message: 'Nice !!',
      data: {
        token
      }
    })
  }
  catch(e){
    res.status(400).json({
      ok: false,
      message: e + ''
    })
  }
}