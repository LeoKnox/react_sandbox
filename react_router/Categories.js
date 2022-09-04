import { Outlet, Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
    <h2>List of Categories</h2>
    <ul>
      <li key="1"><Link>One</Link></li>
      <li key="2"><Link>Two</Link></li>
    </ul>
    <Outlet />
    </>
  )
}
