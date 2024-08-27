import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { thunkGameGetId, thunkGameEdit } from "../../redux/game";
import { thunkCoverArtEdit } from "../../redux/coverArt";


function EditGame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gameId } = useParams();
  const currentUser = useSelector(state => state.session.user);
  const game = useSelector(state => state.game[gameId]);
  const coverArt = game?.cover_art?.[0];
  const coverArtId = coverArt?.id

  const [cover_art_url, setCoverArtUrl] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(""); // store image preview URL
  const [filename, setFilename] = useState(""); // store the image file name
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState(""); // store error messages

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    release_date: "",
    description: "",
    min_requirements: "",
    min_os: "",
    min_processor: "",
    min_memory: "",
    min_graphics: "",
    min_directx: "",
    min_storage: "",
    min_sound_card: ""
  });

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser, navigate]);

  useEffect(() => {
    dispatch(thunkGameGetId(gameId));
  }, [dispatch, gameId]);

  useEffect(() => {
    if (game) {
      const formattedReleaseDate = new Date(game.release_date).toISOString().split('T')[0];
      setFormData(prevFormData => ({
        ...prevFormData,
        title: game.title,
        price: game.price,
        release_date: formattedReleaseDate,
        description: game.description,
        min_requirements: game.min_requirements,
        min_os: game.min_os,
        min_processor: game.min_processor,
        min_memory: game.min_memory,
        min_graphics: game.min_graphics,
        min_directx: game.min_directx,
        min_storage: game.min_storage,
        min_sound_card: game.min_sound_card
      }));
    }

    if (coverArt) {
      setPreviewUrl(coverArt.cover_art_url);
      setFilename(coverArt.filename);

    }
  }, [game, coverArt]);

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

    const updatedGame = {
      ...formData,
      id: Number(gameId),
      user_id: Number(currentUser.id),
    };

    dispatch(thunkGameEdit(updatedGame));

    if (cover_art_url) {
      const updatedCoverArtData = new FormData();
      updatedCoverArtData.append("cover_art_url", cover_art_url);
      updatedCoverArtData.append("game_id", gameId);
      updatedCoverArtData.append("filename", filename);

      setImageLoading(true);
      await dispatch(thunkCoverArtEdit(coverArtId, updatedCoverArtData));
      setImageLoading(false);
    }

    navigate(`/games/${gameId}`);
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
          <h1>Edit Game</h1>

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
        </div>

        <div className="container-create-game-form-right">
          <div>
            <span style={{ color: "#999" }}>Upload image</span>
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

        <button
          type="submit"
          style={imageLoading ? { cursor: "not-allowed" } : { cursor: "pointer" }}
          disabled={imageLoading}
        >
          Update Game
        </button>
      </form>
    </section>
  );
}

export default EditGame;
