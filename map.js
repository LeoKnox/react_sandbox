export default function Map({ props }) {
  return (
    <div>
      <p>width:{props[0].width}</p>
      <p>height:{props[0].length}</p>
      {(() => {
        let y = "";
        for (let j = 0; j < props[0].length; j++) {
          for (let i = 0; i < props[0].width; i++) {
            y += "*";
          }
          y += "\n";
        }
        return y;
      })()}
    </div>
  );
}
