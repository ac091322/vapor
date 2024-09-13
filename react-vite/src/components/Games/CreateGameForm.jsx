import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoRemoveCircle } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { thunkGameCreate } from "../../redux/game";
import { thunkCoverArtAdd } from "../../redux/coverArt";
import { thunkScreenshotsAdd } from "../../redux/screenshot";
import "./CreateGameForm.css";


function CreateGame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.session.user);

  // const [title, setTitle] = useState("The Legend of Zelda: Breath of the Wild");
  // const [price, setPrice] = useState("35.99");
  // const [release_date, setReleaseDate] = useState("2024-07-11")
  // const [description, setDescription] = useState("The Legend of Zelda: Breath of the Wild is an open-world action-adventure game that emphasizes exploration, freedom, and immersive interactions. Players can explore a dynamic world without set paths, discovering hidden areas and solving puzzles organically. Its physics-based engine supports climbing, gliding, and combat, while stamina, weather, and AI systems enrich the experience. The game aims to inspire adventure and wonder through innovative mechanics and a detailed world.");
  // const [min_requirements, setMinRequirements] = useState("Requires a 64-bit processor and operating system");
  // const [min_os, setMinOs] = useState("Windows 10 64-bit");
  // const [min_processor, setMinProcessor] = useState("Intel Core i5-8400 / AMD Ryzen 5 1600");
  // const [min_memory, setMinMemory] = useState("16 GB RAM");
  // const [min_graphics, setMinGraphics] = useState("NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB");
  // const [min_directx, setMinDirectX] = useState("Version 11");
  // const [min_storage, setMinStorage] = useState("130 GB available space");
  // const [min_sound_card, setMinSoundCard] = useState("Windows Compatible Audio Device");
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
  const [coverArtPreviewUrl, setCoverArtPreviewUrl] = useState(""); // store image preview URL
  const [coverArtfilename, setCoverArtFilename] = useState(""); // store the image file name
  const [coverArtLoading, setCoverArtLoading] = useState(false);
  const [screenshot_url, setScreenshotUrl] = useState([]); // state to store multiple files
  const [screenshotPreviewUrls, setScreenshotPreviewUrls] = useState([]); // state to store multiple preview URLs
  const [screenshotsLoading, setScreenshotsLoading] = useState(false);
  const [validations, setValidations] = useState({});
  const [submit, setSumbit] = useState(false);
  const [coverArtfileError, setCoverArtFileError] = useState("");
  const [screenshotsFileError, setScreenshotsFileError] = useState("");

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser, navigate]);

  useEffect(() => {
    const formErrors = {}
    if (title.length > 40) formErrors.title = "Must be between 1 and 40 characters";
    if (price < 0 || price > 999.99) formErrors.price = "Must be between 0 and 999.99";
    if (description.length < 10) formErrors.description = "Your description is too short";
    if (description.length > 2000) formErrors.description = "Your deescription is too long";
    if (min_requirements.length < 2 || min_requirements.length > 100) formErrors.min_requirements = "Must be between 2 and 100 characters";
    if (min_os.length < 2 || min_os.length > 100) formErrors.min_os = "Must be between 2 and 100 characters";
    if (min_processor.length < 2 || min_processor.length > 100) formErrors.min_processor = "Must be between 2 and 100 characters";
    if (min_memory.length < 2 || min_memory.length > 100) formErrors.min_memory = "Must be between 2 and 100 characters";
    if (min_graphics.length < 2 || min_graphics.length > 100) formErrors.min_graphics = "Must be between 2 and 100 characters";
    if (min_directx.length < 2 || min_directx.length > 100) formErrors.min_directx = "Must be between 2 and 100 characters";
    if (min_storage.length < 2 || min_storage.length > 100) formErrors.min_storage = "Must be between 2 and 100 characters";
    if (min_sound_card.length < 2 || min_sound_card.length > 100) formErrors.min_sound_card = "Must be between 2 and 100 characters";
    if (!cover_art_url) formErrors.cover_art_url = "Must include cover art";

    setValidations(formErrors);
  }, [title, price, description, min_requirements, min_os, min_processor, min_memory, min_graphics, min_directx, min_storage, min_sound_card, cover_art_url]);

  const fileWrap = (e) => {
    e.stopPropagation();
    const tempFile = e.target.files[0];

    if (tempFile.size > 5000000) {
      setCoverArtFileError("Image exceeds the maximum file size of 5MB");
      setCoverArtPreviewUrl("");
      setCoverArtFilename("");
      return;
    }

    const newFilename = `cover_art_${Date.now()}.${tempFile.name.split('.').pop()}`;
    const newFile = new File([tempFile], newFilename, { type: tempFile.type });
    const newCoverArtURL = URL.createObjectURL(tempFile); // generate a local URL for the image preview

    setCoverArtPreviewUrl(newCoverArtURL);
    setCoverArtUrl(newFile);
    setCoverArtFilename(newFile.name);
    setCoverArtFileError("");
  };

  const handleScreenshotFiles = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const maxFileSize = 5000000;
    const oversizedFiles = selectedFiles.filter(file => file.size > maxFileSize);

    if (oversizedFiles.length > 0) {
      setScreenshotsFileError("One or more images exceed the maximum file size of 5MB");
      setScreenshotUrl([]); // clear any existing screenshots
      setScreenshotPreviewUrls([]); // clear any existing previews
      return;
    }

    setScreenshotsFileError("");

    const newScreenshots = selectedFiles.map((file, index) => {
      const newFilename = `screenshot_${index}_${Date.now()}_${index}.${file.name.split('.').pop()}`;
      return new File([file], newFilename, { type: file.type });
    });

    const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
    setScreenshotUrl(newScreenshots); // store the updated files
    setScreenshotPreviewUrls(newPreviews); // store the preview URLs
  };

  const handleRemoveScreenshot = (index) => {
    const screenshotToRemove = screenshot_url[index];
    setScreenshotUrl(screenshot_url.filter((screenshot) => screenshot !== screenshotToRemove));
    setScreenshotPreviewUrls(screenshotPreviewUrls.filter((_, i) => i !== index));

    if (screenshot_url.length === 0) {
      setScreenshotUrl([]);
      setScreenshotPreviewUrls([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSumbit(true);

    if (Object.keys(validations).length > 0
      || Object.keys(coverArtfileError).length > 0
      || Object.keys(screenshotsFileError).length > 0
    ) return;

    const newGame = {
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

    const gameReponse = await dispatch(thunkGameCreate(newGame));
    const gameId = gameReponse.id;

    const coverArtData = new FormData();
    coverArtData.append("cover_art_url", cover_art_url);
    coverArtData.append("game_id", gameId);
    coverArtData.append("filename", coverArtfilename);

    setCoverArtLoading(true);
    await dispatch(thunkCoverArtAdd(coverArtData));
    setCoverArtLoading(false);

    if (screenshot_url.length > 0) {
      const screenshotsData = new FormData();
      screenshot_url.forEach((file, index) => {
        screenshotsData.append("screenshot_url", file);
        screenshotsData.append(`filename_${index}`, file.name);
      });
      screenshotsData.append("game_id", gameId);

      setScreenshotsLoading(true);
      await dispatch(thunkScreenshotsAdd(screenshotsData));
      setScreenshotsLoading(false);
    }

    navigate(`/games/${gameReponse.id}`);
  };

  if (!currentUser) return null;

  return (
    <section className="container-create-game-page">
      <form onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="container-create-game-form"
      >
        <div className="container-create-game-form-left">
          <h1>Create a Game</h1>

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

          <div style={{ position: "relative" }} className="input-containers">
            <input
              name="release_date"
              type="date"
              value={release_date}
              onChange={(e) => setReleaseDate(e.target.value)}
              className="post-inputs"
              required
              style={release_date ? { color: "white" } : { color: "transparent" }}
            />
            <FaArrowRightFromBracket id="calendar-arrow" />
            <div id="calendar-circle" />
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
              style={coverArtLoading || screenshotsLoading ? { cursor: "not-allowed" } : { cursor: "pointer" }}
              disabled={coverArtLoading || screenshotsLoading}
            >
              Create Game
            </button>

            <button type="button" onClick={() => { navigate(-1, { replace: true }) }}>
              Go Back
            </button>
          </div>
        </div>

        <div className="container-create-game-form-right">

          <div style={{ position: "relative", height: "240px", marginTop: "6px" }}>
            <div className="container-label-input-image">
              <input
                id="cover-upload"
                type="file"
                accept="image/*"
                name="cover_art"
                onChange={fileWrap}
                className="input-file-image"
              />
              {submit && validations.cover_art_url && <p className="error-game" style={{ top: "0" }}>{validations.cover_art_url}</p>}
              <label htmlFor="cover-upload" className="image-label">
                Upload cover art
              </label>
            </div>

            {coverArtPreviewUrl && (
              <img
                src={coverArtPreviewUrl}
                alt="cover art preview"
                style={{ width: "100%", maxHeight: "135px" }}
              />
            )}
            {coverArtfileError && <p className="error-game" style={{ top: "55px", left: "0" }}>{coverArtfileError}</p>}
            {coverArtfilename && <span style={{ color: "#999", fontSize: "12px" }}>{coverArtfilename}</span>}
            {coverArtLoading && <p style={{ color: "#999", fontSize: "12px" }}>Uploading cover art...</p>}
          </div>

          <div style={{ position: "relative" }}>
            <div className="container-label-input-image">
              <input
                id="screenshot-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleScreenshotFiles}
                className="input-file-image"
              />
              {screenshotsFileError && <p className="error-game" style={{ top: "55px", left: "0" }}>{screenshotsFileError}</p>}
              <label htmlFor="screenshot-upload" className="image-label">
                Upload optional screenshots
              </label>
            </div>

            {screenshotPreviewUrls.length > 0 && (
              <>
                {screenshotPreviewUrls?.map((url, index) => (
                  <div style={{ position: "relative" }} key={index}
                  >
                    <img
                      src={url}
                      alt={`preview ${index + 1}`}
                      style={{ maxHeight: "165px", width: "100%" }}
                    />
                    <IoRemoveCircle
                      onClick={() => handleRemoveScreenshot(index)}
                      style={{
                        fontSize: "3rem",
                        color: "var(--body-background-color)",
                        position: "absolute",
                        left: "0",
                        opacity: "0.7",
                        cursor: "pointer"
                      }} />
                  </div>
                ))}
              </>
            )}
            {screenshotsLoading && <p style={{ color: "#999", fontSize: "12px" }}>Uploading screenshots...</p>}
          </div>

        </div>

      </form>
    </section >
  );
}


export default CreateGame;
