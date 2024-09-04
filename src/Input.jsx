import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore"; 

const Input = () => {
  const [formData, setFormData] = useState({ Name: "", Age: "", Email: "" });

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSave = async () => {
    try {
      await addDoc(collection(db, "students"), formData);
      setFormData({ Name: "", Age: "", Email: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <h2>Input Component</h2>
      <label>Name:</label>
      <input type="text" name="Name" value={formData.Name} onChange={handleChange} /><br /><br />
      <label>Age:</label>
      <input type="text" name="Age" value={formData.Age} onChange={handleChange} /><br /><br />
      <label>Email:</label>
      <input type="text" name="Email" value={formData.Email} onChange={handleChange} /><br /><br />
      <input type="button" value="Save" onClick={handleSave} />
    </>
  );
}

export default Input;
