import React, { useState } from 'react';
import "./BillingForm.css"
import { Link } from 'react-router-dom';

const BillingForm = ({customerData, setCustomerData}) => {
    const [customerName, setCustomerName] = useState("");
    const [orders, setOrders] = useState([{ item: "", quantity: "" }]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const list = [...orders]; 
        list[index][name] = value;
        setOrders(list);
    };

    const handleAddOrder = (event) => {
        event.preventDefault();
        setOrders([...orders, { item: "", quantity: "" }]);
    };

    const handleRemoveOrder = (index) => {
        const list = [...orders];
        list.splice(index, 1);
        setOrders(list);
    };

    const handleSubmit = () => {
        const currentDate = new Date().toLocaleDateString(); // 4/12/2022 MM/DD/YYYY

        if (customerName === "") {
            alert("please Enter Customer Name")
        } else {
            setCustomerData([...customerData, { customerName, orders, currentDate }])
            setCustomerName("");
            setOrders([{ item: "", quantity: "" }])
        }

    };
    return (
        <div className="BillingForm-container">
            <h1>Billing Form</h1>
            <form onSubmit={handleAddOrder}>
                <div className='customer-name-container'>
                    <label>Customer Name</label>
                    <input placeholder='Enter Customer Name...' name='customerName' value={customerName} onChange={e => setCustomerName(e.target.value)} />
                </div>
                {orders.map((order, index) => (
                    <div key={index} className='pro'>
                        <div>
                            <label>Select Product</label>
                            <select name='item' value={order.item} onChange={(event) => handleInputChange(index, event)}>
                                <option value="">Please Select Product</option>
                                <option value="Sugar">Sugar</option>
                                <option value="Oats">Oats</option>
                                <option value="Coffee">Coffee</option>
                                <option value="Snaks">Snaks</option>
                            </select>
                        </div>
                        <div>
                            <label>Product Quantity</label>
                            <input type='number' placeholder='Enter Quantity' value={order.quantity} name='quantity' onChange={(event) => handleInputChange(index, event)} />
                        </div>
                        <div className='btn'>
                            {orders.length === 1 ? null : <button onClick={() => handleRemoveOrder(index)}>Remove</button>}
                            {orders.length - 1 === index ? <input type='submit' value="Add More" /> : null}
                        </div>
                    </div>
                ))}

            </form>
            <div className='submit'>
                <button onClick={handleSubmit}>Create Bill</button>
                <Link to="/create-bill">Show Bill</Link>
            </div>

        </div>
    )
}

export default BillingForm