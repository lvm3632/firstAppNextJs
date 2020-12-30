import React from "react";
import Link from "next/link";
import Router from "next/router";

export const Users = (props) => {
  let users = "";
  console.log(props, "de users");

  return (
    <ul className="list-group">
      {props.users.map((user) => (
        <li
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          key={user.id}
          onClick={(e) => {
            Router.push("/users/[id]", `/users/${user.id}`);
          }}
        >
          <div>
            {user.first_name} {user.last_name}
            <p>Email: {user.email}</p>
          </div>
          <div>
            <img
              src={user.avatar}
              alt={user.first_name + user.last_name}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Users;
