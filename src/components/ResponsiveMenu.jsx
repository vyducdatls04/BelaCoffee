import React from "react";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({
  open,
  setOpen,
  user,
  totalItems,
  onLogout,
}) => {
  return (
    <div
      className={`${
        open ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 w-[75%] h-screen flex flex-col justify-between bg-slate-900 px-8 pb-6 pt-16 text-white md:hidden rounded-r-xl shadow-md transition-all duration-300`}
    >
      <nav className="mt-12">
        <ul className="flex flex-col gap-7 text-lg font-semibold">
          <Link to="/" onClick={() => setOpen(false)}>
            <li className="cursor-pointer">Trang chủ</li>
          </Link>

          <Link to="/menu" onClick={() => setOpen(false)}>
            <li className="cursor-pointer">Menu</li>
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            <li className="cursor-pointer">Giới thiệu</li>
          </Link>

          {/* CART – chỉ hiện khi login */}
          {user && (
            <Link to="/cart" onClick={() => setOpen(false)}>
              <li className="cursor-pointer flex items-center gap-2">
                🛒 Giỏ hàng
                {totalItems > 0 && (
                  <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </li>
            </Link>
          )}

          {/* AUTH */}
          {!user ? (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>
                <button className="bg-amber-900 text-white hover:bg-amber-800 px-3 py-1 rounded-md w-full">
                  Đăng nhập
                </button>
              </Link>

              <Link to="/signup" onClick={() => setOpen(false)}>
                <button className="bg-amber-900 text-white hover:bg-amber-800 px-3 py-1 rounded-md w-full">
                  Đăng ký
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={onLogout}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md w-full"
            >
              Logout
            </button>
          )}
        </ul>
      </nav>

      <button
        onClick={() => setOpen(false)}
        className="text-white py-2 px-4 bg-gray-700 rounded"
      >
        Close
      </button>
    </div>
  );
};

export default ResponsiveMenu;
