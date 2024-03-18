import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./src/pages/HomePage/HomePage"
import AuthPage from "./src/pages/AuthPage/AuthPage"
import PageLayout from "./src/Layout/PageLayout/PageLayout"
import ProfilePage from "./src/pages/ProfilePage/ProfilePage"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./src/firebase/firebase"

function App() {
  const [authUser] = useAuthState(auth);
  return (
    <PageLayout> 
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
  
}

export default App
