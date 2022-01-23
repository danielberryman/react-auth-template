import {
  useNavigate,
  useLocation
} from "react-router-dom";
import { useRef } from "react"
import { useAuth } from "./AuthProvider"

const BASE_URL = "http://localhost:4000";
const LOGIN_ACTION = "login";

export default function Login() {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const auth = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault()
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    const url = `${BASE_URL}/${LOGIN_ACTION}`
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(res => {
      return res.json()
    })
    .then(jsonRes => {
      if (jsonRes.AccessToken) {
        auth.login(jsonRes.AccessToken)
        navigate(from, { replace: true });
      }
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }

  return (
    <div>
      <div class="login-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" ref={emailInputRef} required />
          <input type="password" name="password" placeholder="Password" ref={passwordInputRef} required />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}