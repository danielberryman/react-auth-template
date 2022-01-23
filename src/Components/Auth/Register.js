import { useRef } from "react"

const BASE_URL = "http://localhost:4000";
const REGISTER_ACTION = "register";

export default function Register() {
  const usernameInputRef = useRef()
  const passwordInputRef = useRef()
  const emailInputRef = useRef()

  const handleRegister = async (event) => {
    event.preventDefault()
    const username = usernameInputRef.current.value
    const password = passwordInputRef.current.value
    const email = emailInputRef.current.value
    const url = `${BASE_URL}/${REGISTER_ACTION}`
    
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, email })
    })
    .then(res => {
      console.log('Success:', res)
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }

  return (
    <div class="register">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" name="username" placeholder="Username" ref={usernameInputRef} required />
        <input type="password" name="password" placeholder="Password" ref={passwordInputRef} required />
        <input type="email" name="email" placeholder="Email" ref={emailInputRef} required />
        <input type="submit" />
      </form>
    </div>
  );
}