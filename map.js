export default function Map({ props }) {
  return (
    <div>
      <p>width:{props[0].width}</p>
      <p>height:{props[0].length}</p>
      {(() => {
        let x = "";
        for (let i = 0; i < props[0].width; i++) {
          x+="*";
        }
        return(x);
      })()}
    </div>
  );
}
