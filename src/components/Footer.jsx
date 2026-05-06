import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50 pt-14">
      <div className="px-5 lg:px-32 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
        
        {/* Giới thiệu */}
        <div>
            <h1 className="text-2xl text-white font-cursive">
            Bela Coffee
          </h1>
          <p className="font-inter text-sm text-gray-300">
            Bela Coffee mang đến hương vị cà phê nguyên bản,  
            được pha chế bằng đam mê và sự tinh tế trong từng tách.
          </p>
        </div>

        {/* Form đăng ký */}
        <div>
          <h2 className="text-xl font-bold mb-4">Nhận ưu đãi</h2>
          <p className="text-sm mb-3">
            Đăng ký để nhận thông tin khuyến mãi mới nhất
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="p-3 rounded-lg text-black outline-none"
            />

            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 transition text-white py-2 rounded-lg font-semibold"
            >
              Đăng ký
            </button>
          </form>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h2 className="text-xl font-bold mb-4">Liên hệ</h2>

          <div className="flex items-start gap-3 mb-3">
            <FaMapMarkerAlt className="mt-1" />
            <span>132, Đ.Phan Đình Phùng, TP.Thái Nguyên</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt />
            <span>0974812773</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope />
            <span>belacoffee@gmail.com</span>
          </div>

          <div className="flex gap-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-amber-300" />
            <FaInstagram className="cursor-pointer hover:text-amber-300" />
          </div>
        </div>

        {/* Google Map */}
        <div>
          <h2 className="text-xl font-bold mb-4">Bản đồ</h2>

          <iframe
            title="Bela Coffee Map"
            src="https://www.google.com/maps?q=Thai+Nguyen&output=embed"
            className="w-full h-48 rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm bg-amber-950 py-4">
        © {new Date().getFullYear()} Bela Coffee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
