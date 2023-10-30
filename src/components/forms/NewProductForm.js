import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

function NewProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: ""
  });

  const [photoName, setPhotoName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    console.log("Photo uploaded:", e.target.files[0]);
    setPhotoName(e.target.files[0]?.name || ''); 
    // Set photo name if a file was selected
    // Handle the file upload here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit data as needed
  };

  return (
    <Box component="form" className="form" onSubmit={handleSubmit} spacing={2}>
      <div className="upload-btn-wrapper">
        <button className="upload-btn">Upload a Photo</button>
        <input type="file" onChange={handlePhotoUpload} />
      </div>
      {photoName && <p>{photoName}</p>} {/* Display photo name if available */}
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
      <TextField label="Description" name="description" value={formData.description} onChange={handleChange} fullWidth />
      <TextField label="Category" name="category" value={formData.category} onChange={handleChange} fullWidth />
      <TextField label="Quantity" name="quantity" type="number" value={formData.quantity} onChange={handleChange} fullWidth />
      <TextField label="Price" name="price" type="number" value={formData.price} onChange={handleChange} fullWidth />
      <Box display="flex" justifyContent="flex-end" gap={2}>
        <Button type="submit" variant="contained" color="primary">Submit</Button>
        <Button variant="contained">Cancel</Button>
      </Box>
    </Box>
  );
}

export default NewProductForm;
