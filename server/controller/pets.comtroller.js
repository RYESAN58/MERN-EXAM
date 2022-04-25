const { response, request } = require('express');
const Pet = require('../model/pets.model')

module.exports = {
	createPet: (request, response) => {
		Pet.create(request.body)
			.then(pet => response.json(pet))
			.catch(err => response.status(400).json(err))
	},
	getAllPets: (request, response) => {
		Pet.find({})
			.then( allPets => {
				console.log(allPets)
				response.json(allPets)
			})
			.catch((err)=> {
				console.log(err)
				response.json(err)
			})
},
	finndOnePet: (request, response)=> {
		Pet.findOne({_id:request.params.id})
			.then(pet => response.json(pet))
			.catch(err => response.status(400).json(err))
	},
  updatePet: (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updatedPet => response.json(updatedPet))
        .catch(err=> response.json(err))
},
	deletePet: (request, response) => {
		Pet.deleteOne({_id: request.params.id})
			.then(deleteConfirmation => response.json(deleteConfirmation))
			.catch(err => response.json(err))
},
  findPetName: (request, response)=> {
    Pet.findOne({petName:request.params.name})
      .then(pet => response.json(pet))
      .catch(err => response.status(400).json(err))
    }
  }