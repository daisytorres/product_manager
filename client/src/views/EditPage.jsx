import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

const EditPage = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const {id} = useParams()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                console.log(response.data)
                const product = response.data
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/products/${id}`,
            {
                title: title,
                price: price,
                description: description
            })
            .then(response => {
                navigate(`/products/${response.data._id}`)
            })
            .catch(err => console.log(err))
    }



  return (
    <div>
    <h4>Edit Coffee</h4>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
            <label>Price</label>
            <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <div>
            <label>Description</label>
            <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="submit">Update</button>
    </form>
</div>
  )
}

export default EditPage