import arrow from "../../../lib/assets/common/arrow.png";


function LigmaButton(className: string, text: string, id: string) {
  return (
    <button className={className} id={id}>
        {text && <span>{text}</span>}
        {arrow && <img src={arrow} alt="img" />}
    </button>
  );
}


export default LigmaButton;