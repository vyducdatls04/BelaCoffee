import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-5 lg:px-32 py-20 bg-slate-50" id="contact">
      <h1 className="text-3xl font-bold text-center mb-10">
        Liên hệ với Bela Coffee
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Thông tin liên hệ */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-amber-700 text-xl" />
            <p>132, Đ.Phan Đình Phùng, TP.Thái Nguyên</p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-amber-700 text-xl" />
            <p>0974812773</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-amber-700 text-xl" />
            <p>belacoffee@gmail.com</p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe góp ý và hỗ trợ bạn.  
            Đừng ngần ngại liên hệ với Bela Coffee nhé ☕
          </p>
        </div>

        {/* Form liên hệ */}
        <form className="bg-white p-6 rounded-xl shadow space-y-4">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full border p-3 rounded-lg outline-amber-600"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg outline-amber-600"
          />

          <textarea
            rows="4"
            placeholder="Nội dung liên hệ"
            className="w-full border p-3 rounded-lg outline-amber-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
          >
            Gửi liên hệ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
