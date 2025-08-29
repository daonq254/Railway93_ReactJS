import React from "react";
// ButtonComponent
function ButtonComponent() {
  let handleClick = () => {
    alert("Bạn vừa click vào nút bấm!!!");
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        Click
      </button>
    </>
  );
}

export default ButtonComponent;
