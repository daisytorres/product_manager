import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MainDashboard = (props) => {

    const handleDelete = (deleteId) =>{
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
        .then(response => {
            props.removeFromDom(deleteId);
        })
        .catch(err => console.log(err))
    }


  return (
    <div>
    <h2>All Coffee Drinks</h2>
    {props.productList.map((eachProduct, indx) => {
        return (
            <p key={eachProduct._id}>
                <Link to={`/products/${eachProduct._id}`}>{eachProduct.title}</Link> 
                <button type="button" onClick={() => handleDelete(eachProduct._id)}>Delete</button>
            </p>
        )
    })}
</div>
  )
}

export default MainDashboard