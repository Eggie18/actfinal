//pre dito sa itemform mo ganto gawin mo sa const mo kopyahin mo lang yung comment na gawa ko

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [email, setemail]=useState('');
    const [phonenumber, setphonenumber]=useState('');
    const [telephone,settelephone]=useState('');
    const [birthday,setbirthday]=useState('');
    const [age,setage]=useState('');
    const [sex,setsex]=useState('');
    const [bloodtype,setbloodtype]=useState('');
    const [weight,setweight]=useState('');
    const [height,setheight]=useState('');
    const [gsis,setgsis]=useState('');
    const [pagibig,setpagibig]=useState('');
    const [civilsts,setcivilsts]=useState('');
    const [citizenship,setcitizenship]=useState('');
    const [residentialaddress,setresidentialaddress]=useState('')
    const [permanentaddress,setpermanentaddress]=useState('')
    const [zipcode,setzipcode]=useState('')
    const [mothername,setmothername]=useState('')
    const [occupation,setoccupation]=useState('')
    const [fathername,setfathername]=useState('')
    const [occupation2,setoccupation2]=useState('')
   

    useEffect(() => {
        if (item) {
            setName(item.name);
            setDescription(item.description);
            setemail(item.email);
            setphonenumber(item.phonenumber)
            settelephone(item.telephone);
            setbirthday(item.birthday);
            setage(item.age);
            setsex(item.sex)
            setbloodtype(item.bloodtype);
            setweight(item.weight);
            setheight(item.height);
            setgsis(item.gsis);
            setpagibig(item.pagibig);
            setcivilsts(item.civilsts);
            setcitizenship(item.citizenship)
            setresidentialaddress(item.residentialaddress)
            setpermanentaddress(item.permanentaddress)
            setzipcode(item.zipcode)
            setmothername(item.mothername)
            setoccupation(item.occupation)
            setfathername(item.fathername)
            setoccupation2(item.occupation2)
            
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { name, 
         description,email,phonenumber,telephone,birthday,sex,bloodtype,weight,gsis,civilsts,citizenship,residentialaddress,permanentaddress,zipcode,mothername,occupation,fathername,
        
       };

        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
        
            <div>
                <label>Email: </label>
                <textarea value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>

            <div>
                <label>Phone number: </label>
                <textarea value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)}/>
            </div>

            <div>
                <label>Telephone number: </label>
                <textarea value={telephone} onChange={(e)=>settelephone(e.target.value)}/>
            </div>

            <div>
                <label>Date of Birthday: </label>
                <input type='date' value={birthday} onChange={(e)=>setbirthday(e.target.value)}/>
            </div>

            <div>
                <label>Age: </label>
                <textarea value={age} onChange={(e)=>setage(e.target.value)}/>
            </div>

            <div>
                <label>Sex: </label>
                <textarea value={sex} onChange={(e)=>setsex(e.target.value)}/>
            </div>

            <div>
                <label>Bloodtype: </label>
                <textarea value={bloodtype} onChange={(e)=>setbloodtype(e.target.value)}/>
            </div>

            <div>
                <label>Weight(KG): </label>
                <textarea value={weight} onChange={(e)=>setweight(e.target.value)}/>
            </div>

            <div>
                <label>Height(cm): </label>
                <textarea value={height} onChange={(e)=>setheight(e.target.value)}/>
            </div>

            <div>
                <label>Gsis ID: </label>
                <textarea value={gsis} onChange={(e)=>setgsis(e.target.value)}/>
            </div>

            <div>
                <label>Pag-Ibig ID: </label>
                <textarea value={pagibig} onChange={(e)=>setpagibig(e.target.value)}/>
            </div>

            <div>
                <label>Civil Status: </label>
                <textarea value={civilsts} onChange={(e)=>setcivilsts(e.target.value)}/>
            </div>

            <div>
                <label>Citizenship: </label>
                <textarea value={citizenship} onChange={(e)=>setcitizenship(e.target.value)}/>
            </div>

            <div>
                <label>Residential Address: </label>
                <textarea value={residentialaddress} onChange={(e)=>setresidentialaddress(e.target.value)}/>
            </div>

            <div>
                <label>Permanent Address: </label>
                <textarea value={permanentaddress} onChange={(e)=>setpermanentaddress(e.target.value)}/>
            </div>

            <div>
                <label>Zipcode: </label>
                <textarea value={zipcode} onChange={(e)=>setzipcode(e.target.value)}/>
            </div>

            <div>
                <label>Mother's Name: </label>
                <textarea value={mothername} onChange={(e)=>setmothername(e.target.value)}/>
            </div>

            <div>
                <label>Mother's Occupation: </label>
                <textarea value={occupation} onChange={(e)=>setoccupation(e.target.value)}/>
            </div>

            <div>
                <label>Father's Name: </label>
                <textarea value={fathername} onChange={(e)=>setfathername(e.target.value)}/>
            </div>

            <div>
                <label>Father's Occupation: </label>
                <textarea value={occupation2} onChange={(e)=>setoccupation2(e.target.value)}/>
            </div>
            
           
            
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            

            
            <button type="submit">Submit</button>
        </form>
    );
};

export default ItemForm;
