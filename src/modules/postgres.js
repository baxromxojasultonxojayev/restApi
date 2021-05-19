const {Sequelize, DataTypes} = require('sequelize')
const UserModel = require('../models/UserModel')

const sequelize = new Sequelize('postgres://postgres:new_password@localhost:5432/usersystem', {
  logging: e => console.log('SQL:', e)
})
module.exports = postgres()

async function postgres() {
  try {
    let db = {}
    db.users = UserModel(Sequelize, sequelize)
    // let user = await db.users.create({name: 'John', password: 'salom'})
    // console.log(user);
    // sequelize.sync({force:true})
    return db
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
