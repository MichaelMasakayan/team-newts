import React, { useState } from "react";
import MyImage from './upload2.png';
import './styles.css';
import './upload.css'

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div class="mainCountainer">
     <input type="file" onChange={this.fileChangedHandler}>
      <button onClick={this.uploadHandler}>Upload!</button>
      state = { selectedFile: null }

fileChangedHandler = event => {
  this.setState({ selectedFile: event.target.files[0] })
}


uploadHandler = () => {
  const formData = new FormData()
  formData.append(
    'myFile',
    this.state.selectedFile,
    this.state.selectedFile.name
  )
  axios.post('my-domain.com/file-upload', formData, {
    onUploadProgress: progressEvent => {
      console.log(progressEvent.loaded / progressEvent.total)
    }
  })
}
</div>

export default UploadAndDisplayImage;