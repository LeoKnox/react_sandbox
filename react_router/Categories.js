import { Outlet, NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <>
    <h2>List of Categories</h2>
    <ul>
      <li key="1"><NavLink
        style={({ isActive }) => ({
          color:isActive ? "red" : "seagreen",
        })}
        to="1">One</NavLink></li>
      <li key="2"><NavLink
        style={({ isActive }) => ({
          color:isActive ? "red" : "seagreen",
        })}
        to="2">Two</NavLink></li>
    </ul>
    <Outlet />
    </>
  )
}
