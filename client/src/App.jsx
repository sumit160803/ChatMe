import React,{lazy} from 'react'
import {BrowserRouter,Routes,Route, Router} from "react-router-dom"
import ProtectRoutes from './components/auth/ProtectRoutes'
const Home = lazy(()=>import("./pages/home"))  //here lazy is used because we dont want to load everypage when link is accessed.Instead we want that only when a link is typed like localhost:xxxx/login then only the login page renders.
const Login = lazy(()=>import("./pages/Login"))
const Chat = lazy(()=>import("./pages/Chat"))
const Groups = lazy(()=>import("./pages/Groups"))
const NotFound = lazy(()=>import("./pages/NotFound"))


let user = true;

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<ProtectRoutes userz={user} />}  >
        <Route path="/" element = {<Home />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
      </Route>
      
      <Route path="/login" element={
        <ProtectRoutes userz={!user} path="/"> 
          <Login />
        </ProtectRoutes>} />

        <Route path='*' element={<NotFound/>} />  
        {/*to handle not found routes */}
    </Routes>
  </BrowserRouter>
  )
}

export default App