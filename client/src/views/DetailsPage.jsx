import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from "axios"

const DetailsPage = () => {
    const [product, setProduct] = useState()

    const { id } = useParams()

    const navigate = useNavigate()

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(response => navigate (`/products`))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            {
                product ?
                    <div>
                        <p>Title: {product.title}</p>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                    </div> :
                    <p>....loading....</p>
            }
            <Link to={`/products/${id}/edit`}>Update Coffee</Link> <p></p>
            <button type="button" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DetailsPage