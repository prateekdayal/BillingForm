import React, { useEffect, useState } from 'react';
import "./CreateBill.css"
import { useNavigate } from 'react-router-dom';

const CreateBill = ({ customerData }) => {
  const [Price, setPrice] = useState(0)
  const navigate = useNavigate()
  
  const handelGotoHomePage = () =>{
    navigate("/")
  }

  const handelPrice = (customerData) =>{
    const finalPrice = customerData.map((singleCustomerData)=>{
      return  singleCustomerData.orders.reduce((acc, curr)=>{
        return acc + (Number(curr.quantity) * 20)
      }, 0)
    })
    setPrice(finalPrice)
  }


  useEffect(()=>{
    handelPrice(customerData)
  },[])

  return (
    <div className='createBill-container'>
      {
        customerData.length > 0 ? customerData.map((singleCustomerData, index) => (
          <table key={index}>
            <thead>
              <tr><td colSpan="4" style={{fontWeight:"bold", fontSize : "18px"}}>Customer Name : {singleCustomerData.customerName}</td></tr>
              <tr><td colSpan="4" style={{fontWeight:"bold", fontSize : "18px"}}>Date : {singleCustomerData.currentDate}</td></tr>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {singleCustomerData.orders.map((singleOrder, i) => (
                <tr key={i + 1}>
                  <td>{singleOrder.item}</td>
                  <td>20</td>
                  <td>{singleOrder.quantity}</td>
                  <td>{singleOrder.quantity * 20}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className='total'>Total </td>
                <td>{Price[index]}</td>
              </tr>
            </tbody>
          </table>
        )) : <div>
          <h2>Plaese Add Some Product</h2>
        </div>
      }
      <button className='gotToHome' onClick={handelGotoHomePage}>Go to Home Page</button>
    </div>
  )
}

export default CreateBill