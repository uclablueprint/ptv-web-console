import React from "react";
import { Link } from "react-router-dom";
import { SignOutButton } from "../SignOut";
import * as ROUTES from "../../constants/routes";

export default function NavigationAuth() {
  return (
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.FORUM}>Forum</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  );
}
