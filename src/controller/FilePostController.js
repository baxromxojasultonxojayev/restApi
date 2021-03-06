const path = require('path')
const fs = require('fs')
module.exports = async (req, res) =>{
  try{
    const {file} = req?.files
    const fileType = file.name.split('.')[file.name.split('.').length-1]

    if(!fileType || file.size > (20*1024)*1024){
      throw new Error('Invalid File')
    }
    const dbFile = await req.psql.files.create({
      user_id: req.user.id
    })
    const filePath = path.join(__dirname, "..", "uploads", dbFile.dataValues.id + "." +fileType)   

    await file.mv(filePath, (err) =>{
      if(err) throw new Error(err)
    })
    let fileuploaded = await req.psql.files.update({name: dbFile.dataValues.id + "." +fileType}, {
      where: {
        id: dbFile.id
      }
    })
    res.status(200).json({
      ok: true,
      data: {
        id: dbFile.id,
        name: dbFile.dataValues.id + "." + fileType
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