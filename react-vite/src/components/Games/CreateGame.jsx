import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { thunkGameCreate } from "../../redux/game";
import "./CreateGame.css";


function CreateGame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.session.user);

  const [formData, setFormData] = useState({
    title: "The Legend of Zelda: Breath of the Wild",
    price: "35.99",
    release_date: "",
    description: 'The Legend of Zelda: Breath of the Wild” is an open-world action-adventure game focused on exploration, player freedom, and immersive interactions. The dynamic world lets players explore without set paths, uncovering hidden areas and solving puzzles naturally. The game’s physics-based engine supports seamless climbing, gliding, and combat, while a stamina system, varied weather, and complex AI enhance the experience. The goal is to evoke adventure and wonder through innovative mechanics and a richly detailed world.',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGame = {
      ...formData,
      user_id: Number(currentUser.id),
    };

    dispatch(thunkGameCreate(newGame));

    // navigate(`/games/${gameId}`);
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
    <section id="container-create-game-page">
      <form
        onSubmit={handleSubmit}
        // encType="multipart/form-data"
        id="container-create-game-form"
      >

        <div id="container-create-game-form-left">
          <h1>Create A Game</h1>

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

        <div id="container-create-game-form-right">
          <h4>Upload image</h4>
        </div>

        <button type="submit">Create Game</button>
      </form>
    </section>
  );
}

export default CreateGame;
