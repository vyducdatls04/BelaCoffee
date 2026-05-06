import React from "react";

const About = () => {
  return (
    <main className="bg-[#f5ece4]">

      {/* SECTION 1 – HERO */}
      <section className="px-6 lg:px-32 py-28 text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-[#3b1f0f] mb-6">
          Về Bela Coffee
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Bela Coffee là nơi khởi nguồn của những khoảnh khắc chậm rãi, 
          nơi hương cà phê hòa quyện cùng cảm xúc và sự kết nối.
        </p>
      </section>

      {/* SECTION 2 – STORY */}
      <section className="px-6 lg:px-32 py-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Câu chuyện của chúng tôi
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bela Coffee được tạo nên từ mong muốn xây dựng một không gian
              nơi mọi người có thể tạm gác lại nhịp sống hối hả và tận hưởng
              những giây phút bình yên bên tách cà phê.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Chúng tôi tin rằng cà phê không chỉ là thức uống, 
              mà còn là cầu nối của cảm xúc, kỷ niệm và những cuộc trò chuyện ý nghĩa.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/image/About.png"
              alt="Bela Coffee Story"
              className="w-[90%] max-w-md rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* SECTION 3 – QUALITY */}
      <section className="px-6 lg:px-32 py-24 bg-[#f5ece4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Chất lượng trong từng tách cà phê
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Bela Coffee lựa chọn nguồn hạt cà phê chất lượng, 
            được rang xay cẩn thận để giữ trọn hương vị tự nhiên.
            Mỗi tách cà phê được pha chế với sự tận tâm và niềm đam mê,
            mang đến trải nghiệm trọn vẹn cho khách hàng.
          </p>
        </div>
      </section>

      {/* SECTION 4 – SPACE */}
      <section className="px-6 lg:px-32 py-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/image/Store.png"
              alt="Bela Coffee Space"
              className="w-[90%] max-w-md rounded-2xl shadow-xl"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Không gian & trải nghiệm
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Không gian tại Bela Coffee được thiết kế ấm áp, tinh tế,
              phù hợp cho học tập, làm việc và gặp gỡ bạn bè.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Chúng tôi mong muốn mỗi lần ghé thăm Bela Coffee
              đều mang lại cảm giác thư giãn và dễ chịu cho bạn.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 5 – MISSION */}
      <section className="px-6 lg:px-32 py-28 text-center bg-[#3b1f0f] text-white">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Sứ mệnh của Bela Coffee
        </h2>
        <p className="max-w-3xl mx-auto leading-relaxed text-lg text-orange-100">
          Chúng tôi hướng đến việc xây dựng một cộng đồng yêu cà phê,
          nơi mọi người có thể kết nối, chia sẻ và tận hưởng những giá trị tích cực
          thông qua những tách cà phê chất lượng và dịch vụ tận tâm.
        </p>
      </section>

    </main>
  );
};

export default About;
