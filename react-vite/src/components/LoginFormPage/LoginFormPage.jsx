import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./LoginForm.css";


function LoginFormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
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
    <div id="container-login-page-background">

      <div id="container-login-page">
        <h1>Sign In</h1>
        {errors.length > 0 &&
          errors.map((message) => <p key={message}>{message}</p>)}

        <form onSubmit={handleSubmit}>
          <label style={{ color: "#1999FF" }}>
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
        </form>
      </div >
    </div>
  );
}

export default LoginFormPage;
