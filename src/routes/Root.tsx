import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

export default function Root() {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <>
      <h1>Appointment Booker</h1>
      <nav>
        <ul>
          <li>
            <Link to={`doctor`} onClick={() => changeTheme("doctor")}>
              Doctor POV
            </Link>
          </li>
          <li>
            <Link to={`patient`} onClick={() => changeTheme("patient")}>
              Patient POV
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
