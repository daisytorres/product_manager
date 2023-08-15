import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const MainForm = (props) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`,
            {
                title: title,
                price: price,
                description: description
            })
            .then(response => {
                const newlyCreatedProduct = response.data
                props.onCreate(newlyCreatedProduct);  //remember to pass props at export const MainForm = (props) =>{}
                clearForm()
            })
            .catch(err => console.log(err))
    }

    const clearForm = () => {
        setTitle("")
        setPrice("")
        setDescription("")
    }

    return (
        <div>
            <h4>Add a New Coffee</h4>
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
                <button type="submit">Create</button>
            </form>
        </div>
    )

}
