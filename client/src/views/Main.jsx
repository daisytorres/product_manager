import React, { useState, useEffect }  from 'react'
import axios from "axios"
import { MainForm } from '../components/MainForm'
import MainDashboard from '../components/MainDashboard'

const Main = () => {

    const [productList, setProductsList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => setProductsList(response.data))
            .catch(err => console.log(err))
    }, [])

    const recieveNewProduct = (newProduct) => {
        setProductsList([...productList, newProduct])
    }


    const removeFromDom = (deleteId) => {
        const filteredList = productList.filter((eachProduct, idx) => eachProduct._id !== deleteId )
        setProductsList(filteredList)
    }




  return (
    <div>
        <MainForm onCreate ={recieveNewProduct}></MainForm>
        <MainDashboard productList = {productList} removeFromDom={removeFromDom}></MainDashboard>
    </div>
  )
}

export default Main