import { Outlet, Link, Route } from "react-router-dom";

export default function Categories() {
  return (
    <>
    <h2>List of Categories</h2>
    <ul>
      <li key="1"><Link to="1">One</Link></li>
      <li key="2"><Link to="2">Two</Link></li>
    </ul>
    <Outlet />
    </>
  )
}
