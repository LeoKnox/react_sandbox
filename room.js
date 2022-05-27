export default function Room({ props }) {
  return (
    <div>
      <p>width:{props.width}</p>
      <p>height:{props.length}</p>
      {(() => {
        let y = [];
        for (let j = 0; j < props.length; j++) {
          let x = "|";
          for (let i = 0; i < props.width; i++) {
            x += "+";
          }
          y.push(x + "|");
        }
        return y.map((z) => <p>{z}</p>);
      })()}
    </div>
  );
}
