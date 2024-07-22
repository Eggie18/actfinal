import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}: {item.email}: {item.phonenumber}: {item.telephone}: {item.birthday}: {item.age}: {item.sex}: {item.bloodtype}: {item.weight}: {item.height}: {item.gsis}: {item.pagibig}: {item.civilsts}: {item.citizenship}: {item.residentialaddress}: {item.permanentaddress}: {item.zipcode}: {item.mothername}: {item.occupation}: {item.fathername}: {item.occupation2}: {item.description}
                        
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
