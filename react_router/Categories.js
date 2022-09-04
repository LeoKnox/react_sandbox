import { Outlet } from "react-router-dom";

export default function Categories() {
  return (
    <>
    <h2>List of Categories</h2>
    <ul>
      <li>One</li>
      <li>Two</li>
    </ul>
    <Outlet />
    </>
  )
}
