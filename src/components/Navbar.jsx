import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "../context/useCartHook";
import { useAuth } from "../context/useAuthHook";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { totalItems } = useCart();
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setShowUserMenu(false);
    setOpen(false);
  };

  return (
    <header className="bg-amber-950 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Bela Coffee" className="w-10 h-10" />
          <span className="text-2xl text-white font-cursive">
            Bela Coffee
          </span>
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-amber-400">Trang chủ</Link>
          <Link to="/menu" className="text-white hover:text-amber-400">Menu</Link>
          <Link to="/about" className="text-white hover:text-amber-400">Giới thiệu</Link>

          {/* CART – LUÔN HIỂN THỊ */}
          <Link to="/cart" className="relative text-2xl text-white">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* AUTH */}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-white hover:text-amber-400">
                Đăng nhập
              </Link>
              <Link to="/signup" className="text-white hover:text-amber-400">
                Đăng ký
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 text-white"
              >
                <img
                  src={
                    user?.avatar ||
                    `https://ui-avatars.com/api/?name=${user?.name}`
                  }
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span>{user?.name}</span>
                <ChevronDown size={16} />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded shadow-md overflow-hidden">
                  <Link
                    to="/my-orders"
                    onClick={() => setShowUserMenu(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Đơn hàng của tôi
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* MOBILE ICON */}
        <div className="md:hidden">
          {open ? (
            <X
              className="text-white w-7 h-7 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <Menu
              className="text-white w-7 h-7 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <ResponsiveMenu
        open={open}
        setOpen={setOpen}
        user={user}
        totalItems={totalItems}
        onLogout={handleLogout}
      />
    </header>
  );
};

export default Navbar;
