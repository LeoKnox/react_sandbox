import Room from "./room.js";

export default function Map({ props }) {
  const data = { width: 5, length: 5 };
  return (
    <div>
      <table>
        <tr>
          <td>
            <Room props={data} />
          </td>
          <td>************</td>
          <td>
            <Room props={data} />
          </td>
        </tr>
        <tr>
          <td>
            <Room props={data} />
          </td>
        </tr>
      </table>
    </div>
  );
}
