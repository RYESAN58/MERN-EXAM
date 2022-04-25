const mongoose = require('mongoose')



const PetSchema = new mongoose.Schema({
	petName: {
	type: String,
	required: [true, 'Must have a name!!'],
  unique: [true, 'Name must be unique!'],
	minLength: [3, 'Must be more than 2 characthers!'],
},
	petType: {
		type: String,
		required: [true, "Must have a pet type " ],
    minLength: [3, 'Must be more than 2 characthers!']
	},
  description: {
    type: String,
    required: [true, 'Must Add Description'],
    minLength: [3, 'Must be more than 2 characthers!']
  },
  skill1: {
    type: String
  },
  skill2: {
    type: String
  },
  skill3: {
    type: String
  }

}, {timestamps : true})


module.exports = mongoose.model('Pet', PetSchema)