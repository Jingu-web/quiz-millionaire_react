import { useRef } from "react";

export const Login = ({ setUsername }) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        placeholder="ユーザーネーム"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        ゲームスタート
      </button>
    </div>
  );
};
