const petController = require('../controller/pets.comtroller')
const Pet = require('../model/pets.model')



module.exports = (app) => {
  app.get('/api/allpets', petController.getAllPets)
  app.get('/api/one/:id', petController.finndOnePet)
  app.get('/api/check/:name', petController.findPetName)
  app.post('/api/create', petController.createPet)
  app.delete('/api/delete/:id', petController.deletePet)
  app.put('/api/edit/:id', petController.updatePet)
}