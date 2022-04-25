import React , {useState, useEffect}from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const CreatePet = () => {
	const [petName , setPetName] = useState('')
  const [petType, setPetType] = useState('')
  const [ description, setDescription ] = useState('')
  const[skill1, setSkill] = useState('')
  const[skill2, setSkill2] = useState('')
  const[skill3, setSkill3] = useState('')
  const[Validator, setValidator] = useState(0)
	const [errors, setErrors] = useState([]);
  const navigate = useNavigate()
	
	
	const handlePetName = (e) => {
		setPetName(e.target.value)
	}

  const handleSkill = (e) => {
		setSkill(e.target.value)
	}
  const handleSkill2 = (e) => {
		setSkill2(e.target.value)
	}
  const handleSkill3 = (e) => {
		setSkill3(e.target.value)
	}

  const handlePetType = (e) => {
		setPetType(e.target.value)
	}
  const handleDescription = (e) => {
		setDescription(e.target.value)
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8000/api/create', {
			petName,
      petType,
      description,
      skill1,
      skill2,
      skill3
		})
			.then((res)=>{
				console.log('Success', res)
        setValidator(null)
        navigate('/')
			})
			.catch((err) => {
				console.log('ERROR!', err.response);
        setValidator(err)
				setErrors(err.response.data.errors)
        console.log(err.response.data.code)
        setValidator(err.response.data.code)
        console.log(Validator)
				})
	}

	return(
		<div style={{
      display: 'flex',
      flexDirection: "column"
    }}>
      <div style={{
        display: 'flex',
        justifyContent:'space-between'
      }}>
        <h1>Pet Shelter</h1>
        <Link to='/'>Back to home</Link>
      </div>
      <h2>Know a pet needing a home ?</h2>
      <div style={{
        border: '2px solid black',
        display: 'flex',
      }}>
			<form onSubmit={onSubmitHandler}>
			{errors &&
				Object.keys(errors).map((errKey, index) => {
          return(
            <div>
            <p style={{color: "red"}} key= {index}>{errors[errKey].message}</p>
            </div>
          )
			})}
      {/* This is my way of checking if the name is unique also in models I used a true validator that doesn't use the same error as the others so I created a custom error based on the error code I recieved. I can't seem to figure out how to get them all to show up at once however you cannot add a pet without a unique name lol */}
        {
          Validator ? 
          <p style={{color: 'red'}}>Name must be unique!</p>:
          ''
          }
        <div>
          <p>
            <label>Pet's Name:</label>
            <br />
            <input type="text" onChange={handlePetName}></input>
          </p>
          <p>
            <label>Pet Type:</label>
            <br />
            <input type="text" onChange={handlePetType}></input>
          </p>
          <p>
          <label>description of pet: </label>
          <br />
          <input type="text" onChange={handleDescription}></input>
          </p>
        </div>
        <div style={{
          marginLeft: '200px',
          marginTop: '-150px'
        }}>
          <p>
            <label>Skill 1:</label>
            <br />
            <input type="text" onChange={handleSkill}></input>
          </p>
          <p>
          <label>Skill 2:</label>
          <br />
          <input type="text" onChange={handleSkill2}></input>
          </p>
          <p>
          <label>Skill 3:</label>
          <br />
          <input type="text" onChange={handleSkill3}></input>
          </p>
        </div>
				<button type="submit" style={{
          backgroundColor: 'blue',
          color: "white"
        }}>Add Pet</button>
			</form>
      </div>
		</div>
	)

}


export default CreatePet;