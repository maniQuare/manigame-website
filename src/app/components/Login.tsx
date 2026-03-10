"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", userName);
    console.log("Password:", password);
  };

  return (
    <div className="app-body login-agbody login-body">
      <div className="login-wrap">
        <div className="kv"></div>

        <dl className="login-panel">
          <div className="logo-main-div">
            <Image
              src="https://ag.dreamz444.club/api/users/images/theme-1709726553578-dream444.png"
              alt="logo"
              width={180}
              height={80}
              className="logo-main"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <dd>
              <div className="d-flex align-items-center position-relative">
                <input
                  id="loginName"
                  placeholder="Username"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />

                <button type="button" className="eyebtn">
                  <i className="fas fa-user"></i>
                </button>
              </div>
            </dd>

            <dd>
              <div className="d-flex align-items-center position-relative">
                <input
                  id="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="eyebtn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className="far fa-eye"></i>
                </button>
              </div>
            </dd>

            <dd>
              <button id="loginBtn" type="submit" className="btn-send">
                Login
                <svg
                  width="10"
                  height="11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.71 7.706l1.432-1.604H1.778V4.898h5.39L5.71 3.294l.781-.86L9.278 5.5 6.49 8.565l-.78-.86zM1.12 0C.825 0 .564.124.339.372a1.24 1.24 0 0 0-.339.86v8.536c0 .325.113.611.339.86.225.248.486.372.78.372H8.88c.295 0 .556-.124.781-.372a1.24 1.24 0 0 0 .339-.86V7.333H8.88v2.435H1.12V1.232h7.76v2.435H10V1.232a1.24 1.24 0 0 0-.339-.86C9.436.124 9.175 0 8.881 0H1.12z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </dd>
          </form>
        </dl>
      </div>
    </div>
  );
}