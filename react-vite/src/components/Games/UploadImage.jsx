import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { thunkCoverArtAdd } from "../../redux/coverArt";
import "./UploadImage.css"


const UploadImage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // so that you can redirect after the image upload is successful
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImageLoading(true);
    await dispatch(thunkCoverArtAdd(formData));
    navigate("/images");
  }

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">Submit</button>
      {(imageLoading) && <p>Loading...</p>}
    </form>
  )
}


export default UploadImage;
