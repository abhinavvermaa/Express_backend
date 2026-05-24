import React, { useState } from "react";

const Signup = () => {
  // 1. State banayi data hold karne ke liye
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    photo:""
  });

  // 2. Input change handle karne ka function
  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setFormData({
        ...formData,
        photo: e.target.files[0], // File yahan hoti hai!
      });
    } else {
      // Normal text inputs ke liye
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // 3. Form submit handle karne ka function (API Call)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page reload rokne ke liye
    const dataToSend = new FormData();
    dataToSend.append("username", formData.username);
    dataToSend.append("email", formData.email);
    dataToSend.append("password", formData.password);
    
    // Yahan naam "image" wahi hona chahiye jo backend mein upload.single('image') mein likha hai
    dataToSend.append("photo", formData.photo);
    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
       
        body: dataToSend
        
      });
      console.log("form submitted bro!!");
      window.alert("form submitted")
      
      
    } catch (error) {
      console.error("Kuch gadbad ho gayi:", error);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>React Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Naam"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="photo"
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
