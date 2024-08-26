import { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkCoverArtAdd } from "../../redux/image";


const UploadPicture = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(""); // store image preview URL
  const [filename, setFilename] = useState(""); // store the image file name
  const [game_id, setGameId] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState(""); // store error messages

  const fileWrap = (e) => {
    e.stopPropagation();

    const tempFile = e.target.files[0];

    if (tempFile.size > 5000000) {
      setError("Selected image exceeds the maximum file size of 5MB");
      return;
    }

    const newImageURL = URL.createObjectURL(tempFile); // generate a local URL for the image preview
    setImageURL(newImageURL);
    setImage(tempFile);
    setFilename(tempFile.name);
    setError(""); // clear any previous errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setError("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("game_id", game_id);

    setImageLoading(true);

    try {
      await dispatch(thunkCoverArtAdd(formData));
    } catch (err) {
      setError("Image upload failed");
    }

    setImageLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <input
        type="file"
        accept="image/*"
        onChange={fileWrap}
      />
      {imageURL && (
        <div>
          <img
            src={imageURL}
            alt="image-preview"
            style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }}
          />
          <p>{filename}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        placeholder="Enter Game ID"
        value={game_id}
        onChange={(e) => setGameId(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
      {imageLoading && <p>Loading...</p>}
    </form>
  );
};


export default UploadPicture;
