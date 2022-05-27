import Room from "./room.js";

export default function Map({ props }) {
  const data = { width: 5, length: 5 };
  return <Room props={data} />;
}
