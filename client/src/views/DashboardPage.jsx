import React, { useState, useEffect } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const [productList, setProductsList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => setProductsList(response.data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const removeFromDom = (deleteId) => {
        const filteredList = productList.filter((eachProduct, idx) => eachProduct._id !== deleteId )
        setProductsList(filteredList)
    }

    const handleDelete = (deleteId) =>{
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
        // .then(response => 
        //     navigate(`/products`)
        //     ) --->this method will only show you the deleted ones when you refresh because it has the same link as the dashboard
        .then(response => {
            removeFromDom(deleteId);
        })
        .catch(err => console.log(err))
    }



    return (

        <div>
            <h2>All Coffee Drinks</h2>
            {productList.map((eachProduct, indx) => {
                return (
                    <p key={eachProduct._id}>
                        <Link to={`/products/${eachProduct._id}`}>{eachProduct.title}</Link> <button type="button" onClick={() => handleDelete(eachProduct._id)}>Delete</button>
                    </p>
                )
            })}
             {/* <button type="button" onClick={handleDelete}>Delete</button> */}
        </div>
    )
}

export default DashboardPage