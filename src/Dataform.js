import React, { useState } from 'react'

const Dataform =  () => {
    let [formData, setFormData] = useState({
        email: '',
        name:'',
        address:'',
        address2:'',
        city:'',
        province:'',
        postalcode:''

    })
    
    let [isData, setIsData] = useState(false);


    const provinces = ["AB", "BC", "MB", 'NB', "NL", "NS", "ON", "PE", "QC", 'SK' ]
    const onSubmitForm = (event) => {
        event.preventDefault()
        setIsData(true);
        console.log("Form Submitted : " +  JSON.stringify(formData))
    }

    const onValueChanged = (event) => {
        setFormData({...formData , [event.target.name]:event.target.value})
    }

    return (
     <>
        <form onSubmit={(e) => onSubmitForm(e)}>
            <label htmlFor="email">Email:
                <input type='text' name="email" placeholder="enter email" onChange={(e) => onValueChanged(e)}></input>
            </label>
            <label htmlFor="name">Name:
                <input type='text' name='name' placeholder="enter name" onChange={(e) => onValueChanged(e)}></input>
            </label>

            <label htmlFor="address">Address:
                <input type='text' name='address' placeholder="123 paper street" onChange={(e) => onValueChanged(e)}></input>
            </label>

            <label htmlFor="address2">Address 2:
                <input type='text' name='address2' placeholder="Apartment studio or floor" onChange={(e) => onValueChanged(e)}></input>
            </label>
            <label htmlFor="city">City:
                <input type='text' name='city' placeholder="enter city" onChange={(e) => onValueChanged(e)}></input>
            </label>
            <label htmlFor="provice">Province:
                <select type='text' name='province' placeholder="select province" onChange={(e) => onValueChanged(e)}>
                {
                    provinces.map((province) => (
                        <option key={province} value={province}>{province}</option>
                ))
                }
                </select>
            </label>

           <label htmlFor="postalcode">Postal code:
                <input type='text' name='postalcode' placeholder="Enter postal code" onChange={(e) => onValueChanged(e)}></input>
            </label>
            <label htmlFor="submit">
             <input type='submit'></input>
            </label>

        </form>
        {isData &&
        <div className="details">
            <p><strong>Email:</strong> <span>{formData['email']}</span></p>
            <p><strong>Full Name:</strong> <span>{formData['name']}</span></p>
            <p><strong>Address:</strong> <span>{formData['address']}</span></p>
            <p><strong>City:</strong> <span>{formData['city']}</span></p>
            <p><strong>Province:</strong> <span>{formData['province']}</span></p>
            <p><strong>Postal Code:</strong> <span>{formData['postalcode']}</span></p>
        </div>
        }

    </> );
}

export default Dataform;