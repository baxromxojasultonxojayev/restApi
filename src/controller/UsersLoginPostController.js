const { compare } = require('../modules/bcrypt')
const LoginValidation = require('../validation/LoginValidation')

module.exports = async (req, res) =>{
  // let validation = SignUpValidation(req.body) 
  try{
    let {id, password} = await LoginValidation.validateAsync(req.body)
    let user = await req.psql.users.findOne({
        where: {
          id: id,

        } 
      })
    // user = {
    //   id: user.id,
    //   name: user.name
    // }
    if(!user) throw new Error ('user is not defined')
    let isTrue = await compare(password, user.dataValues.password)
    console.log(isTrue);
    res.status(200).json({
      ok: true,
      message: 'Nice !!'
    })
  }
  catch(e){
    res.status(400).json({
      ok: false,
      message: e + ''
    })
  }
}