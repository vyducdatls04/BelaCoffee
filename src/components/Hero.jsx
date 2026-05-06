import { useNavigate } from "react-router-dom";
import cafeImg from "../assets/cafe.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative px-5 lg:px-32 py-28 bg-gradient-to-r from-[#f5ece4] via-[#d6b8a5] to-[#8b4a24] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div>
          <p className="text-[#8b4a24] font-semibold mb-4">
            Chào mừng tới Bela Coffee
          </p>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Hãy thưởng thức hương vị nồng nàn tại Bela Coffee
          </h1>

          <p className="text-gray-800 mb-8 max-w-xl">
            Không gian ấm áp – hương vị nguyên bản – trải nghiệm trọn vẹn
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/menu")}
              className="bg-[#c56a1a] text-white px-7 py-3 rounded-lg hover:bg-[#a55515] transition"
            >
              Xem Menu
            </button>

            <button
              onClick={() => navigate("/about")}
              className="border border-[#c56a1a] text-[#c56a1a] px-7 py-3 rounded-lg hover:bg-[#c56a1a] hover:text-white transition"
            >
              Tìm hiểu ngay
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={cafeImg}
            alt="Coffee"
            className="w-[85%] max-w-md drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
