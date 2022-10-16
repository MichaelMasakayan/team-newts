import React, { useState } from "react";
import MyImage from './upload2.png';
import './styles.css';
import './upload.css'

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div class="mainCountainer">
      <h1 class="container2">Upload and Display Image usign React Hook's</h1>
      <img  class="upload" src={MyImage} alt="upload "/>
      {selectedImage && (
        <div >
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <input 
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          console.log(event.target.files[0].name);
          setSelectedImage(event.target.files[0]);
        }}/>
    </div>
  );
};

export default UploadAndDisplayImage;