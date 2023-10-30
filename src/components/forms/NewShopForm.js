import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

function NewShopForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  const [logoName, setLogoName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogoUpload = (e) => {
    console.log("Logo uploaded:", e.target.files[0]);
    setLogoName(e.target.files[0]?.name || '');
    // Set logo name if a file was selected
    // Handle the file upload here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit data as needed
  };

  return (
    <Box component="form" className="form" onSubmit={handleSubmit} spacing={2}>
      <div className="upload-btn-wrapper">
        <button className="upload-btn">Upload a Logo</button>
        <input type="file" onChange={handleLogoUpload} />
      </div>
      {logoName && <p>{logoName}</p>} {/* Display logo name if available */}
      <TextField 
        label="Name" 
        name="name" 
        value={formData.name} 
        onChange={handleChange}
        fullWidth
      />
      <TextField 
        label="Description" 
        name="description" 
        value={formData.description} 
        onChange={handleChange}
        fullWidth
      />
      <Box display="flex" justifyContent="flex-end" gap={2}>
        <Button type="submit" variant="contained" color="primary">Submit</Button>
        <Button variant="contained">Cancel</Button>
      </Box>
    </Box>
  );
}

export default NewShopForm;
