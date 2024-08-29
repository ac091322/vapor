import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
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

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [release_date, setReleaseDate] = useState("")
  const [description, setDescription] = useState("")
  const [min_requirements, setMinRequirements] = useState("");
  const [min_os, setMinOs] = useState("");
  const [min_processor, setMinProcessor] = useState("");
  const [min_memory, setMinMemory] = useState("");
  const [min_graphics, setMinGraphics] = useState("");
  const [min_directx, setMinDirectX] = useState("");
  const [min_storage, setMinStorage] = useState("");
  const [min_sound_card, setMinSoundCard] = useState("");
  const [cover_art_url, setCoverArtUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [filename, setFilename] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [validations, setValidations] = useState({});
  const [submit, setSumbit] = useState(false);
  const [fileError, setFileError] = useState("");

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser, navigate]);

  useEffect(() => {
    if (game) {
      const formattedReleaseDate = new Date(game.release_date).toISOString().split('T')[0];
      setTitle(game.title);
      setPrice(game.price);
      setReleaseDate(formattedReleaseDate);
      setDescription(game.description);
      setMinRequirements(game.min_requirements);
      setMinOs(game.min_os);
      setMinProcessor(game.min_processor);
      setMinMemory(game.min_memory);
      setMinGraphics(game.min_graphics);
      setMinDirectX(game.min_directx);
      setMinStorage(game.min_storage);
      setMinSoundCard(game.min_sound_card);
    }

    if (coverArt) {
      setCoverArtUrl(coverArt.cover_art_url);
      setFilename(coverArt.filename);
      setPreviewUrl(coverArt.cover_art_url)
    }
  }, [game, coverArt]);

  useEffect(() => {
    const formErrors = {}
    if (title.length > 40) formErrors.title = "Must be between 1 and 40 characters";
    if (price < 0 || price > 999.99) formErrors.price = "Must be between 0 and 999.99";
    if (description.length < 10) formErrors.description = "Your description is too short";
    if (description.length > 2000) formErrors.description = "Your deescription is too long";
    if (min_requirements.length < 2 || min_requirements.length > 255) formErrors.min_requirements = "Must be between 2 and 255 characters";
    if (min_os.length < 2 || min_os.length > 255) formErrors.min_os = "Must be between 2 and 255 characters";
    if (min_processor.length < 2 || min_processor.length > 255) formErrors.min_processor = "Must be between 2 and 255 characters";
    if (min_memory.length < 2 || min_memory.length > 255) formErrors.min_memory = "Must be between 2 and 255 characters";
    if (min_graphics.length < 2 || min_graphics.length > 255) formErrors.min_graphics = "Must be between 2 and 255 characters";
    if (min_directx.length < 2 || min_directx.length > 255) formErrors.min_directx = "Must be between 2 and 255 characters";
    if (min_storage.length < 2 || min_storage.length > 255) formErrors.min_storage = "Must be between 2 and 255 characters";
    if (min_sound_card.length < 2 || min_sound_card.length > 255) formErrors.min_sound_card = "Must be between 2 and 255 characters";
    if (!cover_art_url) formErrors.cover_art_url = "Must include cover art";

    setValidations(formErrors);
  }, [title, price, description, min_requirements, min_os, min_processor, min_memory, min_graphics, min_directx, min_storage, min_sound_card, cover_art_url]);

  useEffect(() => {
    dispatch(thunkGameGetId(gameId));
  }, [dispatch, gameId]);

  const fileWrap = (e) => {
    e.stopPropagation();

    const tempFile = e.target.files[0];

    if (tempFile.size > 5000000) {
      setFileError("Image exceeds the maximum file size of 5MB");
      setPreviewUrl("");
      setFilename("");
      return;
    }

    const newFilename = `cover_art_${Date.now()}.${tempFile.name.split('.').pop()}`;
    const newFile = new File([tempFile], newFilename, { type: tempFile.type });

    const newCoverArtURL = URL.createObjectURL(tempFile); // generate a local URL for the image preview
    setPreviewUrl(newCoverArtURL);
    setCoverArtUrl(newFile);
    setFilename(newFile.name);
    setFileError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSumbit(true);

    if (Object.keys(validations).length > 0 || Object.keys(fileError).length > 0) return;

    const updatedGame = {
      id: Number(gameId),
      title,
      price,
      release_date,
      description,
      min_requirements,
      min_os,
      min_processor,
      min_memory,
      min_graphics,
      min_directx,
      min_storage,
      min_sound_card,
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

  return (
    <section className="container-create-game-page">
      <form onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="container-create-game-form"
      >
        <div className="container-create-game-form-left">
          <h1>Edit Game</h1>

          <div className="input-containers">
            <input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="post-inputs"
              required
            />
            {submit && validations.title && <p className="error-game">{validations.title}</p>}
            <div
              className="floating-placeholders"
              style={title ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px", position: "relative" }}>Game title</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              name="price"
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="post-inputs"
              required
            />
            {submit && validations.price && <p className="error-game">{validations.price}</p>}
            <div
              className="floating-placeholders"
              style={price ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px" }}>Price</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              name="release_date"
              type="date"
              value={release_date}
              onChange={(e) => setReleaseDate(e.target.value)}
              className="post-inputs"
              required
              style={release_date ? { color: "white" } : { color: "transparent" }}
            />
            <div
              className="floating-placeholders"
              style={release_date ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px" }}>Release date</label>
            </div>
          </div>

          <div className="input-containers">
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="post-inputs"
              required
            />
            {submit && validations.description && <p className="error-game">{validations.description}</p>}
            <div
              className="floating-placeholders"
              style={description ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px" }}>About the game</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              name="min_requirements"
              type="text"
              value={min_requirements}
              onChange={(e) => setMinRequirements(e.target.value)}
              className="post-inputs"
              required
            />
            {submit && validations.min_requirements && <p className="error-game">{validations.min_requirements}</p>}
            <div
              className="floating-placeholders"
              style={min_requirements ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px" }}>Minimum Requirements</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              name="min_os"
              type="text"
              value={min_os}
              onChange={(e) => setMinOs(e.target.value)}
              className="post-inputs"
              required
            />
            {submit && validations.min_os && <p className="error-game">{validations.min_os}</p>}
            <div
              className="floating-placeholders"
              style={min_os ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px" }}>Minimum OS</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              name="min_processor"
              type="text"
              value={min_processor}
              onChange={(e) => setMinProcessor(e.target.value)}
              className="post-inputs"
              required
            />
            {submit && validations.min_processor && <p className="error-game">{validations.min_processor}</p>}
            <div
              className="floating-placeholders"
              style={min_processor ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px" }}>Minimum processor</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              name="min_memory"
              type="text"
              value={min_memory}
              onChange={(e) => setMinMemory(e.target.value)}
              className="post-inputs"
              required
            />
            {submit && validations.min_memory && <p className="error-game">{validations.min_memory}</p>}
            <div
              className="floating-placeholders"
              style={min_memory ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px" }}>Minimum memory</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              name="min_graphics"
              type="text"
              value={min_graphics}
              onChange={(e) => setMinGraphics(e.target.value)}
              className="post-inputs"
              required
            />
            {submit && validations.min_graphics && <p className="error-game">{validations.min_graphics}</p>}
            <div
              className="floating-placeholders"
              style={min_graphics ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px" }}>Minimum graphics</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              name="min_directx"
              type="text"
              value={min_directx}
              onChange={(e) => setMinDirectX(e.target.value)}
              className="post-inputs"
              required
            />
            {submit && validations.min_directx && <p className="error-game">{validations.min_directx}</p>}
            <div
              className="floating-placeholders"
              style={min_directx ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px" }}>Minimum DirectX</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              name="min_storage"
              type="text"
              value={min_storage}
              onChange={(e) => setMinStorage(e.target.value)}
              className="post-inputs"
              required
            />
            {submit && validations.min_storage && <p className="error-game">{validations.min_storage}</p>}
            <div
              className="floating-placeholders"
              style={min_storage ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px" }}>Minimum storage</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              name="min_sound_card"
              type="text"
              value={min_sound_card}
              onChange={(e) => setMinSoundCard(e.target.value)}
              className="post-inputs"
              required
            />
            {submit && validations.min_sound_card && <p className="error-game">{validations.min_sound_card}</p>}
            <div
              className="floating-placeholders"
              style={min_sound_card ? { top: "-20.5px" } : null}
            >
              <label style={{ fontSize: "12px" }}>Minimum sound card</label>
            </div>
          </div>

          <div className="container-buttons-game-form-left">
            <button type="submit"
              style={imageLoading ? { cursor: "not-allowed" } : { cursor: "pointer" }}
              disabled={imageLoading}
            >
              Update Game
            </button>

            <button type="button"
              onClick={() => { navigate(-1, { replace: true }) }}
            >
              Go Back
            </button>
          </div>
        </div>

        <div className="container-create-game-form-right">
          <div style={{ position: "relative" }}>
            <div className="container-label-input-cover-art">
              <input
                id="cover-upload"
                type="file"
                accept="image/*"
                name="cover_art"
                onChange={fileWrap}
                className="input-file-cover-art"
              />
              {fileError && <p className="error-game" style={{ top: "55px", left: "0" }}>{fileError}</p>}
              <label htmlFor="cover-upload" className="cover-art-label">
                Change cover art
              </label>
            </div>

            {previewUrl && (
              <img
                src={previewUrl}
                alt="cover art preview"
                className="cover-art-preview"
              />
            )}
            {filename && <span style={{ color: "#999", fontSize: "12px" }}>{filename}</span>}
            {imageLoading && <p style={{ color: "#999", fontSize: "12px" }}>Uploading file...</p>}
            {submit && validations.cover_art_url && <p className="error-game" style={{ top: "0" }}>{validations.cover_art_url}</p>}
          </div>
        </div>

      </form>
    </section >
  );
}


export default EditGame;
