import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import demoDeveloperAvatar from "../../../public/demo-developer-avatar.png"
import "./LoginForm.css";


function LoginFormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = async (e, isDemoUser = false) => {
    e.preventDefault();

    const credentials = isDemoUser
      ? { email: "demodeveloper@vapor.io", password: "password" }
      : { email, password }

    const serverResponse = await dispatch(thunkLogin(credentials));

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/");
    }
  };

  return (
    <div id="container-login-page">

      <div id="container-login-page-form">
        <h1>Sign In</h1>
        {errors.length > 0 &&
          errors.map((message) => <p key={message}>{message}</p>)}

        <form onSubmit={handleSubmit}>

          <div id="container-login-form-left">
            <label style={{ color: "var(--nav-font-color-selected)" }}>
              SIGN IN WITH EMAIL
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            {errors.email && <p>{errors.email}</p>}

            <label style={{ color: "var(--logo-color)" }}>
              PASSWORD
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {errors.password && <p>{errors.password}</p>}

            <button type="submit">Sign In</button>
          </div>

          <div id="container-login-form-right">
            <span style={{ color: "var(--nav-font-color-selected)" }}>OR SIGN IN WITH DEMO DEVELOPER</span>
            <button
              type="submit"
              onClick={e => handleSubmit(e, true)}
              style={{ backgroundColor: "transparent" }}
            >
              <img src={demoDeveloperAvatar} alt="demo-developer-avatar" />
            </button>
            <span style={{ color: "var(--logo-color)", marginTop: "5px", alignSelf: "center" }}>Click on Wukong's avatar</span>
          </div>

        </form>

      </div >

    </div>
  );
}

export default LoginFormPage;
