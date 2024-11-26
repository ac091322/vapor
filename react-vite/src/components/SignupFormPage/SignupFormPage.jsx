import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css"


function SignupFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [validations, setValidations] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const formErrors = {}
    if (username.length < 2 || username.length > 60) formErrors.username = "Must be between 2 and 60 characters";
    if (email.length < 8 || email.length > 60) formErrors.email = "Must be between 8 and 60 characters";
    if (password.length < 4) formErrors.password = "Must be 4 characters or more";

    setValidations(formErrors);
  }, [username, email, password]);

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    if (Object.keys(validations).length > 0) return;

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Passwords do not match",
      });
    }

    const serverResponse = await dispatch(
      thunkSignup({
        email,
        username,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/");
    }
  };

  return (
    <div id="container-signup-page">
      <div id="container-signup-form">

        <h1>CREATE YOUR ACCOUNT</h1>

        <form onSubmit={handleSubmit}>
          <label>
            EMAIL

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            {submit && validations.email && <p className="error">{validations.email}</p>}
          </label>

          <label style={{ color: "var(--nav-font-color-selected)" }}>
            DEVELOPER NAME
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.username && <p className="error">{errors.username}</p>}
            {submit && validations.username && <p className="error">{validations.username}</p>}
          </label>

          <label>
            PASSWORD
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
            {submit && validations.password && <p className="error">{validations.password}</p>}
          </label>

          <label>
            CONFIRM PASSWORD
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            {errors.server && <p className="error">{errors.server}</p>}
          </label>

          <button type="submit">Sign Up</button>
        </form>

      </div>
    </div>
  );
}


export default SignupFormPage;
