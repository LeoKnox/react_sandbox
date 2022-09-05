import { NavLink } from "react-router-dom";

export default function Bar() {
  return (
    <>
    <nav>
        <NavLink 
          style={({ isActive }) => ({
            color:isActive ? "red" : "sienna",
            fontWeight:isActive ? "normal" : "bold",
          })}
          to="/categories">Categories</NavLink>
        <NavLink
          style={({ isActive }) => ({
            color:isActive ? "red" : "sienna",
            fontWeight:isActive ? "normal" : "bold",
          })}
          to="/"> | Home</NavLink>
    </nav>
    </>
  )
}
