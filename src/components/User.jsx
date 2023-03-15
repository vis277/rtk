import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../redux/userSlice";
import { Add } from "../redux/userSlice";
const User = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userSlice.userDetails);
  // console.log("ln7", selector);
  const value = useSelector((state) => state.userSlice.value);
  // console.log("ln8", value);
  const add = useSelector((state) => state.userSlice);
  // console.log("ln11", add);
  const handleClick = () => {
    // console.log("etst");
    dispatch(userDetails());
    // console.log("here");
  };
  const handleIncrement = () => {
    dispatch(Add(1));
  };
  const data = [
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
  ];
  const [inpData, setInptData] = useState(data);
  const [index, setIndex] = useState(0);
  const ref = useRef([]);
  const handleChange = (e, id) => {
    console.log(e.target.onkeyup);
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
    }

    let modifiedData = inpData.map((data) => {
      if (data.id === id) {
        data.value = e.target.value;
      }
      return data;
    });
    setInptData(modifiedData);
  };
  return (
    <>
      {" "}
      <div onClick={handleClick}>Test</div>
      <div>{value}</div>
      <button onClick={handleIncrement}>Increment</button>
      <div>
        {inpData.map((inp, index) => {
          return (
            <input
              value={inp.value}
              onChange={(e) => handleChange(e, inp.id)}
              maxLength={1}
              key={inp.id}
            ></input>
          );
        })}
      </div>
    </>
  );
};

export default User;
