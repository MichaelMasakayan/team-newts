import React, { useState } from "react";
import MyImage from './upload2.png';
import './styles.css';
import './upload.css'

// const getDisplayUrl = (name = "Default-filename") => {
//   return imgbbUploader({
//     apiKey: "1676a31ac649c413165855a3c08a82ea",
//     name,
//   })
//     .then((res) => {
//       console.log(`Handle success: ${res.url}`);
//       return res.url;
//     })
//     .catch((e) => {
//       console.error(`Handle error: ${e}`);
//       return "http://placekitten.com/300/300";
//     });
// };

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div class="mainContainer">
      <h1 class="container2">Upload and Display Image usign React Hook's</h1>
      <img  class="upload" src={MyImage} alt="upload "/>
      {selectedImage && (
        <div>
        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
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