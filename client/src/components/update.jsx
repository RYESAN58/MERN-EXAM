import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams , Link} from "react-router-dom";

const Update = () => {
	const {id} = useParams();
	const [petName , setPetName] = useState()
	const [petType , setPetType] = useState()
	const [description, setDescription] = useState()
  const[skill1, setSkill] = useState('')
  const[skill2, setSkill2] = useState('')
  const[skill3, setSkill3] = useState('')
	const navigate = useNavigate()

	useEffect(()=> {
		axios.get(`http://localhost:8000/api/one/${id}`)
			.then(res => {
				setDescription(res.data.description)
				setPetName(res.data.petName)
				setPetType(res.data.petType)
        setSkill(res.data.skill1)
        setSkill2(res.data.skill2)
        setSkill3(res.data.skill3)
				console.log(res.data);
			})
			.catch( err => console.log(err))
	}, [id]);
		const updatePet = (e) => {
			e.preventDefault();
			axios.put(`http://localhost:8000/api/edit/${id}`, {
				petName,
				petType,
				description,
        skill1,
        skill2,
        skill3
			})
				.then(res => {
					console.log(res);
					navigate('/')
				})
				.catch(err => console.log(err))
		}
		const handePetName = (e) => {
			setPetName(e.target.value)
	}
		const handleDescription = (e) => {
			setDescription(e.target.value)
	}
		const handleType = (e) => {
			setPetType(e.target.value)
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
				<h2>Edit {petName}</h2>
        <div style={{
        border: '2px solid black',
        display: 'flex',
      }}>
				<form  onSubmit={updatePet}>
					<p>
						<label>Pet Name</label>
            <br />
						<input type="text" value={petName} name='petname' onChange={handePetName}/>
					</p>
					<p>
						<label>Pet Type</label>
            <br />
						<input type="text" value={petType} name='petType' onChange={handleType}/>
					</p>
					<p>
						<label>description</label>
            <br />
						<input type="text" value={description} name='description' onChange={handleDescription}/>
					</p>
          <div style={{
          marginLeft: '200px',
          marginTop: '-150px'
        }}>
            <p>
              <label>Skill 1:</label>
              <br />
              <input type="text" value={skill1} onChange={handleSkill}></input>
            </p>
            <p>
              <label>Skill 2:</label>
              <br />
              <input type="text" value={skill2} onChange={handleSkill2}></input>
            </p>
            <p>
              <label>Skill 3:</label>
              <br />
              <input type="text" value={skill3} onChange={handleSkill3}></input>
            </p>
          </div>
					<button type="submit" style={{
            color: 'white',
            backgroundColor: 'blue'
          }}> Edit Pet </button>
				</form>
        </div>
			</div>
		)
}


export default Update;