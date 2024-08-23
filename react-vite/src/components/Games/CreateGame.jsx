import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkGameCreate } from "../../redux/game";
import "./CreateGame.css";


function CreateGame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.session.user);

  const [title, setTitle] = useState("The Legend of Zelda: Breath of the Wild");
  const [price, setPrice] = useState("35.99");
  const [release_date, setReleaseDate] = useState("2024/08/01");
  const [description, setDescription] = useState('The Legend of Zelda: Breath of the Wild" is an open-world action-adventure game that emphasizes exploration, player freedom, and immersive environmental interactions. As developers, one of the key design principles involves creating a dynamic, expansive world where players can explore without predefined paths, discovering hidden locations and solving puzzles organically. The game engine supports a physics-based system that allows interactions like climbing, gliding, and combat mechanics to feel seamless. The game also features a stamina-based resource management system, diverse weather conditions, and an intricate AI for enemies and NPCs, all contributing to a fluid and engaging player experience. The overarching goal is to deliver a sense of adventure and wonder by combining innovative mechanics with a richly detailed environment.'
  );
  const [min_requirements, setMinRequirements] = useState("Requires a 64-bit processor and operating system");
  const [min_os, setMinOS] = useState("Windows 10 64-bit");
  const [min_processor, setMinProcessor] = useState("Intel Core i5-8400 / AMD Ryzen 5 1600");
  const [min_memory, setMinMemory] = useState("16 GB RAM");
  const [min_graphics, setMinGraphics] = useState("NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB");
  const [min_directx, setMinDirectX] = useState("Version 11");
  const [min_storage, setMinStorage] = useState("130 GB available space");
  const [min_sound_card, setMinSoundCard] = useState("Windows Compatible Audio Device");
  const [min_additional_notes, setMinAdditionalNotes] = useState(
    "HDD Supported, SSD Recommended. The above specifications were tested with DLSS/FSR/XeSS enabled."
  );
  const [rec_requirements, setRecRequirements] = useState("Requires a 64-bit processor and operating system");
  const [rec_os, setRecOS] = useState("Windows 10 64-bit");
  const [rec_processor, setRecProcessor] = useState("Intel Core i7-9700 / AMD Ryzen 5 5500");
  const [rec_memory, setRecMemory] = useState("32 GB RAM");
  const [rec_graphics, setRecGraphics] = useState("NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT / INTEL Arc A750");
  const [rec_directx, setRecDirectX] = useState("Version 12");
  const [rec_storage, setRecStorage] = useState("160 GB available space");
  const [rec_sound_card, setRecSoundCard] = useState("Windows Compatible Audio Device");
  const [rec_additional_notes, setRecAdditionalNotes] = useState(
    "SSD Required. The above specifications were tested with DLSS/FSR/XeSS enabled."
  );

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGame = {
      title: title,
      user_id: Number(currentUser.id),
      price: parseFloat(price),
      release_date: release_date,
      description: description,
      min_requirements: min_requirements,
      min_os: min_os,
      min_processor: min_processor,
      min_graphics: min_graphics,
      min_directx: min_directx,
      min_storage: min_storage,
      min_sound_card: min_sound_card,
      min_additional_notes: min_additional_notes,
      rec_requirements: rec_requirements,
      rec_os: rec_os,
      rec_processor: rec_processor,
      rec_memory: rec_memory,
      rec_graphics: rec_graphics,
      rec_directx: rec_directx,
      rec_storage: rec_storage,
      rec_sound_card: rec_sound_card,
      rec_additional_notes: rec_additional_notes
    }

    dispatch(thunkGameCreate(newGame));
  };

  if (!currentUser) return null;

  return (
    <section id="container-create-game-page">
      <form onSubmit={handleSubmit} id="container-create-game-form">
        <h1>Create A Game</h1>

        <div id="container-create-form-input-fields">

          <h3>Basic information</h3>
          <div className="input-containers">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="post-inputs"
              required
            />
            <div className="floating-placeholders" style={title ? { top: "-20.5px" } : null}>
              <label>Game Title</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="post-inputs"
              required
            />
            <div className="floating-placeholders" style={price ? { top: "-20.5px" } : null}>
              <label>Price</label>
            </div>
          </div>

          <div className="input-containers">
            <input
              type="date"
              value={release_date}
              onChange={(e) => setReleaseDate(e.target.value)}
              className="post-inputs"
              required
            />
            <div className="floating-placeholders" style={release_date ? { top: "-20.5px" } : null}>
              <label>Release Date</label>
            </div>
          </div>

          <div className="input-containers">
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="post-inputs"
              required
            />
            <div className="floating-placeholders" style={description ? { top: "-20.5px" } : null}>
              <label>About the game</label>
            </div>
          </div>

          <h3>Minimum Requirements</h3>
          {renderInputField("Minimum requirements", min_requirements, setMinRequirements)}
          {renderInputField("Minimum OS", min_os, setMinOS)}
          {renderInputField("Minimum processor", min_processor, setMinProcessor)}
          {renderInputField("Minimum memory", min_memory, setMinMemory)}
          {renderInputField("Minimum graphics", min_graphics, setMinGraphics)}
          {renderInputField("Minimum DirectX", min_directx, setMinDirectX)}
          {renderInputField("Minimum storage", min_storage, setMinStorage)}
          {renderInputField("Minimum sound card", min_sound_card, setMinSoundCard)}
          {renderInputField("Minimum additional notes", min_additional_notes, setMinAdditionalNotes)}

          <h3>Recommended Requirements</h3>
          {renderInputField("Recommended requirements", rec_requirements, setRecRequirements)}
          {renderInputField("Recommended OS", rec_os, setRecOS)}
          {renderInputField("Recommended processor", rec_processor, setRecProcessor)}
          {renderInputField("Recommended memory", rec_memory, setRecMemory)}
          {renderInputField("Recommended graphics", rec_graphics, setRecGraphics)}
          {renderInputField("Recommended DirectX", rec_directx, setRecDirectX)}
          {renderInputField("Recommended storage", rec_storage, setRecStorage)}
          {renderInputField("Recommended sound card", rec_sound_card, setRecSoundCard)}
          {renderInputField("Recommended additional notes", rec_additional_notes, setRecAdditionalNotes)}

          <button
            type="submit"
            id="create-game-submit-button"
          >
            Create game
          </button>
        </div>
      </form>
    </section>
  );
}

// Helper function to render input fields
function renderInputField(label, value, setValue) {
  return (
    <div className="input-containers">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="post-inputs"
        required
      />
      <div className="floating-placeholders" style={value ? { top: "-20.5px" } : null}>
        <label>{label}</label>
      </div>
    </div>
  );
}

export default CreateGame;
