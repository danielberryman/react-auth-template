import { useAuth } from "./AuthProvider"

export default function Logout() {
  const auth = useAuth()

  function handleLogout() {
    auth.logout()
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
