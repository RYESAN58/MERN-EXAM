import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


const Pet = (props) => {
  const [pet, setPet] = useState({})
  const {id} = useParams();

  useEffect(()=> {
    axios.get(`http://localhost:8000/api/one/${id}`)
      .then(res => {
        console.log(res.data);
        setPet(res.data);
      })
      .catch( err => console.log(err))
}, []);

  const deletePet = (id) => {
    axios.delete(`http://localhost:8000/api/delete/${id}`)
      .then(res => {
        console.log(res)
    })
      .catch(err => console.log(err))
  }

  return (
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
    <div style={{
      display: 'flex',
      justifyContent:'space-between'
    }}>
      <h2>Details about : {pet.petName}</h2>
      <button onClick={(e) => {
        let x = window.confirm('are you sure You Want to adopt?')
          if (x){
            deletePet(pet._id)
          }
        }}
        style={{
          backgroundColor: 'Red',
          color: 'white',
          height: '30px',
          width: '100px'
          }}>adopt </button>
    </div>
    <div style={{
      border: '2px solid black',
      padding: '20px'
    }}>
      <p>type: {pet.petType}</p>
      <p>description: {pet.description}</p>
      <p>Skills: <p>{pet.skill1}</p> <p>{pet.skill2}</p> <p>{pet.skill3}</p> </p>
    </div>      
      </div>
    )
}
export default Pet;