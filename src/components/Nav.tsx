import React from "react";

function Nav() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div>
            <a
              href="/"
              className="text-gray-800 text-lg font-semibold hover:text-gray-400"
            >
              Home
            </a>
          </div>
          <div>
            <a href="/cars" className="text-gray-800 text-lg font-semibold">
              Cars
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <div>
            <a href="/login" className="text-gray-800 text-lg font-semibold">
              Login
            </a>
          </div>
          <div>
            <a href="/register" className="text-gray-800 text-lg font-semibold">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
