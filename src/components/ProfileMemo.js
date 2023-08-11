import React, { useState, useRef } from 'react';
import EmojiPic from '../assets/Emoji.png';

function ProfileMemo(props) {
  const [editMode, setEditMode] = useState(false);
  const [memo, setMemo] = useState(props.memo);
  const inputRef = useRef(null);

  const handleEdit = () => {
    if (!editMode) {
      // input 요소 생성
      let newInput = document.createElement('input');
      newInput.type = 'text';
      newInput.value = memo;
      newInput.onBlur = handleInputChange;
  
      // 기존 span 요소 대신 생성된 input 요소로 교체
      inputRef.current.replaceWith(newInput);
      inputRef.current = newInput;
      newInput.focus();
    } else {
      inputRef.current.contentEditable = false;
    }
    
    setEditMode(!editMode);
  };

  const handleInputChange = (event) => {
    setMemo(event.target.innerText);
  };

  return (
    <div>
      <div
        ref={inputRef}
        type="text"
        value={memo}
        onChange={handleInputChange}
        contentEditable={false}
        style={{ marginRight: '10px' }}
      />
      <span
        role="img"
        aria-label="dream-emoji"
        style={{
          backgroundImage: `url(${EmojiPic})`,
          backgroundSize: '24px 24px',
          display: 'inline-block',
          width: '24px',
          height: '24px',
        }}
        onClick={handleEdit}
      />
    </div>
  );
}

export default ProfileMemo;