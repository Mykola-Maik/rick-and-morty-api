import { NavLink } from "react-router-dom";

export const Incode = () => {
  return (
    <NavLink to='https://www.incode-group.com/'>
      <img 
        src="./images/IncodeLogo.png" 
        alt="incode logo"
        style={{
          position: "absolute",
          top: 30,
          left: 20,
        }}
      />
    </NavLink>
  );
}