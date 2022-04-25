import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Pets = () => {
	const navigate= useNavigate()
	const [pets, setPets] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:8000/api/allpets')
			.then((response) => {
        // Sorting the data so that they appeear in alpabetical order 
        const result = response.data.sort((a,b)=> a.petType.localeCompare(b.petType))
				console.log(response.data)
        setPets(result)
			})
			.catch((err) => console.log(err.response));
}, []);
	return (
		<div style={{
      display: 'flex',
      flexDirection:'column',
      padding: '40px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent:'space-between'
      }}>
        <h1>Pet Shelter</h1>
        <Link to='/create'>Add a pet to the shelter</Link>
      </div>
      <h2>These Pets Are looking For a good home!</h2>
			<table>
				<tr>
					<th>Name</th>
					<th>Type</th>
          <th>Actions</th>
				</tr>
				{pets.map((pet, index) => {
					return(
            <tr key={index}>
              <td>
                {pet.petName}
              </td>
              <td>
                {pet.petType}
              </td>
              <td>
                <Link to = {`/details/${pet._id}`}>Details     </Link>
                |
                <Link to= {`/update/${pet._id}`}>     Edit</Link>
              </td>
            </tr>
					)
				})}
			</table>
		</div>
	)
}

export default Pets;