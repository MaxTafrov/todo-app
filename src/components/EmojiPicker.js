import Picker from "emoji-picker-react";
import React, { useState } from "react";
import { BsEmojiNeutral } from "react-icons/bs";

const EmojiPicker = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const [isPickerActive, setIsPickerActive] = React.useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const showEmoji = () => {
    setIsPickerActive(!isPickerActive);
  };

  const showEmojiPicker = () => {
    setIsPickerActive(!isPickerActive);
  };

  return (
    <div className="open-panel">
      {chosenEmoji ? (
        <span className="input-emoji" onClick={showEmojiPicker}>
          {chosenEmoji.emoji}
        </span>
      ) : (
        ""
      )}
      <BsEmojiNeutral
        onClick={showEmoji}
        className="emoji-icon"
        color="white"
      />
      <div
        id="picker"
        className={`picker ${
          isPickerActive ? "picker-active" : "picker-deactive"
        }`}
      >
        <Picker onEmojiClick={onEmojiClick} />
      </div>

      {/* <div
        id="picker"
        className={`picker ${
          isPickerActive ? "picker-active" : "picker-deactive"
        }`}
      >
        <Picker onEmojiClick={onEmojiClick} />
      </div> */}
    </div>
  );
};

export default EmojiPicker;
