import React from "react";
import memesData from "../memesData";

function UpperBody() {
  const [img, setImg] = React.useState("images/meme-placeholder.png");

  function getImage() {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;
    setImg(url);
  }

  return (
    <div>
      <div className="form">
        <input type="text" className="form__input_top" placeholder="Top Text" />
        <input
          type="text"
          className="form__input_bottom"
          placeholder="Bottom Text"
        />
        <button
          onClick={getImage}
          type="button"
          class="btn btn-primary"
          className="form__button"
        >
          <i class="bi bi-image">Generate a meme image</i>
        </button>
      </div>
      <img className="meme_img" src={img} />
    </div>
  );
}

export default UpperBody;
