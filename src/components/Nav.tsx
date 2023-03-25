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
              Logo
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <div>
            <a
              href="https://github.com/Kelxety/car-test-app"
              className="text-gray-800 text-lg font-semibold"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
