const { generateHash } = require('../modules/bcrypt');
const SignUpValidation = require('../validation/SignUpValidation')

module.exports = async (req, res) =>{
  // let validation = SignUpValidation(req.body) 
  try{
    let {name, password} = await SignUpValidation.validateAsync(req.body)
    let user = await req.psql.users.create({
      name: name,
      password: await generateHash(password)
    })
    user = {
      id: user.id,
      name: user.name
    }
    console.log(user);
    res.status(200).json({
      ok: true,
      message: 'Successfully registrated',
      data: user
    })
  }
  catch(e){
    res.status(400).json({
      ok: false,
      message: e + ''
    })
  }
}