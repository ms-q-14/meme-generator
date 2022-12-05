import React from "react";
import memesData from "../memesData";

function UpperBody() {
  function getImage() {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;
    console.log(url);
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

        <img src={getImage} />
      </div>
    </div>
  );
}

export default UpperBody;
