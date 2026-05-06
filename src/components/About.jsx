import aboutImg from "../assets/About.png";

const About = () => {
  return (
    <section className="px-5 lg:px-32 py-28 bg-[#f5ece4]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About Bela Coffee"
            className="w-[90%] max-w-md rounded-2xl shadow-xl"
          />
        </div>

        <div>
          <p className="text-[#8b4a24] font-semibold mb-4">
            Về chúng tôi
          </p>

          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
            Bela Coffee – Hơn cả một tách cà phê
          </h2>

          <p className="text-gray-700 mb-4">
            Bela Coffee là nơi hội tụ của không gian ấm áp và hương vị cà phê nguyên bản.
          </p>

          <p className="text-gray-700">
            Không chỉ là một quán cà phê, Bela Coffee còn là nơi bạn có thể chậm lại và tận hưởng.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
