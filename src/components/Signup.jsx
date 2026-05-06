import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-200 to-amber-500">

      {/* Navbar giống Login */}
      <header className="h-16 bg-amber-900 flex items-center justify-between px-10 text-white">
        <div className="text-xl font-bold">☕ Bela Coffee</div>

        <nav className="flex items-center gap-6">
          <a href="/" className="hover:text-amber-300">Trang chủ</a>
          <a href="/menu" className="hover:text-amber-300">Menu</a>
          <a href="/about" className="hover:text-amber-300">Giới thiệu</a>
          <a href="/contact" className="hover:text-amber-300">Liên hệ</a>

          <a
            href="/login"
            className="bg-amber-700 px-4 py-1.5 rounded-md font-semibold"
          >
            Đăng nhập
          </a>
        </nav>
      </header>

      {/* Signup Form */}
      <div className="flex items-center justify-center mt-12 px-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

          {/* Title giống Login */}
          <h2 className="text-3xl font-bold text-center text-amber-700 mb-6">
            Đăng ký
          </h2>

          <form className="space-y-5">

            <div>
              <label className="block font-semibold mb-1">Họ và tên</label>
              <input
                type="text"
                placeholder="Nhập họ tên..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Nhập email..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập mật khẩu..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Xác nhận mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập lại mật khẩu..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="w-full bg-amber-700 text-white py-2 rounded-lg font-semibold hover:bg-amber-800 transition"
            >
              Đăng ký
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Đã có tài khoản?{" "}
            <a href="/login" className="text-amber-700 font-semibold hover:underline">
              Đăng nhập
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;
