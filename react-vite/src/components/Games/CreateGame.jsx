import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { thunkGameCreate } from "../../redux/game";
import { thunkCoverArtAdd } from "../../redux/coverArt";
import "./CreateGame.css";


function CreateGame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.session.user);

  const [cover_art_url, setCoverArtUrl] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(""); // store image preview URL
  const [filename, setFilename] = useState(""); // store the image file name
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState(""); // store error messages

  const [formData, setFormData] = useState({
    title: "The Legend of Zelda: Breath of the Wild",
    price: "35.99",
    release_date: "2024-07-11",
    description: "The Legend of Zelda: Breath of the Wild is an open-world action-adventure game that emphasizes exploration, freedom, and immersive interactions. Players can explore a dynamic world without set paths, discovering hidden areas and solving puzzles organically. Its physics-based engine supports climbing, gliding, and combat, while stamina, weather, and AI systems enrich the experience. The game aims to inspire adventure and wonder through innovative mechanics and a detailed world.",
    min_requirements: "Requires a 64-bit processor and operating system",
    min_os: "Windows 10 64-bit",
    min_processor: "Intel Core i5-8400 / AMD Ryzen 5 1600",
    min_memory: "16 GB RAM",
    min_graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
    min_directx: "Version 11",
    min_storage: "130 GB available space",
    min_sound_card: "Windows Compatible Audio Device",
  });

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser, navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileWrap = (e) => {
    e.stopPropagation();

    const tempFile = e.target.files[0];

    if (tempFile.size > 5000000) {
      setError("Selected image exceeds the maximum file size of 5MB");
      return;
    }

    const newFilename = `cover_art_${Date.now()}.${tempFile.name.split('.').pop()}`;
    const newFile = new File([tempFile], newFilename, { type: tempFile.type });

    const newCoverArtURL = URL.createObjectURL(tempFile); // generate a local URL for the image preview
    setPreviewUrl(newCoverArtURL);
    setCoverArtUrl(newFile);
    setFilename(newFile.name);
    setError(""); // clear any previous errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cover_art_url) {
      setError("No cover art file");
      return;
    }

    const newGame = {
      ...formData,
      user_id: Number(currentUser.id),
    };

    const gameReponse = await dispatch(thunkGameCreate(newGame));
    const gameId = gameReponse.id;

    const coverArtData = new FormData();
    coverArtData.append("cover_art_url", cover_art_url);
    coverArtData.append("game_id", gameId);
    coverArtData.append("filename", filename);

    setImageLoading(true);
    await dispatch(thunkCoverArtAdd(coverArtData));
    setImageLoading(false);
    navigate(`/games/${gameReponse.id}`);
  };

  if (!currentUser) return null;

  const inputFields = [
    { name: "title", label: "Game title", type: "text" },
    { name: "price", label: "Price", type: "number", step: "0.01" },
    { name: "release_date", label: "Release date", type: "date" },
    { name: "description", label: "About the game", type: "textarea" },
    { name: "min_requirements", label: "Minimum Requirements", type: "text" },
    { name: "min_os", label: "Minimum OS", type: "text" },
    { name: "min_processor", label: "Minimum processor", type: "text" },
    { name: "min_memory", label: "Minimum memory", type: "text" },
    { name: "min_graphics", label: "Minimum praphics", type: "text" },
    { name: "min_directx", label: "Minimum DirectX", type: "text" },
    { name: "min_storage", label: "Minimum storage", type: "text" },
    { name: "min_sound_card", label: "Minimum sound card", type: "text" },
  ];

  return (
    <section className="container-create-game-page">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="container-create-game-form"
      >

        <div className="container-create-game-form-left">
          <h1>Create a Game</h1>

          {inputFields.map((field, idx) => (
            <div key={idx} className="input-containers">

              {field.type === "textarea"
                ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    className="post-inputs"
                    required
                  />
                ) : (
                  <input
                    name={field.name}
                    type={field.type}
                    step={field.step}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    className="post-inputs"
                    required
                  />
                )}

              <div
                className="floating-placeholders"
                style={formData[field.name] ? { top: "-20.5px" } : null}
              >
                <label>{field.label}</label>
              </div>
            </div>
          ))}

          <div className="container-buttons-game-form-left">
            <button
              type="submit"
              style={imageLoading ? { cursor: "not-allowed" } : { cursor: "pointer" }}
              disabled={imageLoading}
            >
              Create Game
            </button>

            <button type="button" onClick={() => { navigate("/", { replace: true }) }}>Go Back</button>
          </div>
        </div>

        <div className="container-create-game-form-right">
          <div>
            <span style={{ color: "#999" }}>Upload cover art</span>
            <input
              className="upload-cover-art-input"
              type="file"
              accept="image/*"
              onChange={fileWrap}
            />
          </div>

          {previewUrl && (
            <div>
              <img
                src={previewUrl}
                alt="cover-art-preview"
              />
              <p style={{ fontSize: "13px", color: "#999" }}>{filename}</p>
            </div>
          )}

          {error && <p>{error}</p>}
          {imageLoading && <p>Uploading...</p>}
        </div>

      </form>
    </section>
  );
}

export default CreateGame;
