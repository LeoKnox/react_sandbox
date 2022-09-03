import { Link } from "react-router-dom";

export default function Bar() {
  return (
    <>
    <nav>
        <Link to="/categories">Categories</Link>
        <Link to="/"> | Home</Link>
    </nav>
    </>
  )
}
