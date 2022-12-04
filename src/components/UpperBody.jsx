import React from "react";

function UpperBody() {
  return (
    <div>
      <form className="form">
        <input type="text" className="form__input_top" placeholder="Top Text" />
        <input
          type="text"
          className="form__input_bottom"
          placeholder="Bottom Text"
        />
        <button type="button" class="btn btn-primary" className="form__button">
          <i class="bi bi-image">Generate a Meme</i>
        </button>
      </form>
    </div>
  );
}

export default UpperBody;
