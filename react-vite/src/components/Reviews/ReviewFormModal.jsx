import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { IoThumbsUp } from "react-icons/io5";
import { IoThumbsDown } from "react-icons/io5";
import { useModal } from "../../context/Modal"
import { thunkReviewCreate } from "../../redux/review";
import "./ReviewFormModal.css"


function ReviewFormModal({ userId, gameId }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [thumbs_up, setThumbsUp] = useState(true);
  const [thumbs_down, setThumbsDown] = useState(false);
  const [description, setDescription] = useState("");
  const [validations, setValidations] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const formErrors = {}
    if (description.length < 10) formErrors.description = "Your review is too short";
    if (description.length > 2000) formErrors.description = "Your review is too long";

    setValidations(formErrors);
  }, [description]);

  const handleRadioChange = (e) => {
    const { value } = e.target;

    if (value === "thumbs_up") {
      setThumbsUp(true);
      setThumbsDown(false);

    } else if (value === "thumbs_down") {
      setThumbsUp(false);
      setThumbsDown(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);

    if (Object.keys(validations).length > 0) return;

    const reviewData = {
      thumbs_up: thumbs_up,
      thumbs_down: thumbs_down,
      description: description,
      user_id: Number(userId),
      game_id: Number(gameId)
    }

    dispatch(thunkReviewCreate(gameId, reviewData));
    closeModal();
  }

  return (
    <section className="container-submit-review-component">
      <h1 style={{ color: "white", marginBottom: "30px" }}>Write a Review</h1>
      <form onSubmit={handleSubmit}>

        <div className="container-radio-buttons-review-modal">
          <div className="radio-button-set-review-modal">
            <input
              type="radio"
              id="thumbs_up"
              name="recommendation"
              value="thumbs_up"
              checked={thumbs_up}
              onChange={handleRadioChange}
            />
            <label htmlFor="thumbs_up"><span>Thumbs up <IoThumbsUp /></span></label>
          </div>
          <div className="radio-button-set-review-modal">
            <input
              type="radio"
              id="thumbs_down"
              name="recommendation"
              value="thumbs_down"
              checked={thumbs_down}
              onChange={handleRadioChange}
            />
            <label htmlFor="thumbs_down"><span>Thumbs down <IoThumbsDown /></span></label>
          </div>
        </div>

        <label className="container-label-input-review-modal">
          Description
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
          {submit && validations.description && <p className="error">{validations.description}</p>}
        </label>

        <div className="container-buttons-review-modal">
          <button type="submit">Submit</button>
          <button
            onClick={closeModal}
            type="button">Close</button>
        </div>
      </form>
    </section>
  );
}


export default ReviewFormModal;
