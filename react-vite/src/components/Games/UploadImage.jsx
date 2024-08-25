import { useState } from "react";
import { useDispatch } from "react-redux"
import { thunkCoverArtAdd } from "../../redux/image";


const UploadPicture = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [game_id, setGameId] = useState("");
  const [imageLoading, setImageLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("game_id", game_id);

    // for (let pair of formData.entries()) {
    // console.log("!!!!!", `${pair[0]}: ${pair[1]}`);
    // };

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImageLoading(true);
    await dispatch(thunkCoverArtAdd(formData));
    setImageLoading(false);
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
      <input
        type="text"
        placeholder="Enter Game ID"
        value={game_id}
        onChange={(e) => setGameId(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
      {(imageLoading) && <p>Loading...</p>}
    </form>
  )
}

export default UploadPicture;
