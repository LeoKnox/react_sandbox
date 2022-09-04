import { useParams } from "react-router-dom";

export default function Category() {
  const { catId } = useParams();

  return(
    <h2>Cat me {catId}</h2>
  )
}
