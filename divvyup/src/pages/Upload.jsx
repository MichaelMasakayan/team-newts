import React, { useState } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
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