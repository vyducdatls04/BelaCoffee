import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <>
      <Link to="/login">
        <button className="bg-amber-900 px-3 py-1 rounded-md">Đăng nhập</button>
      </Link>
      <Link to="/signup">
        <button className="bg-amber-900 px-3 py-1 rounded-md">Đăng ký</button>
      </Link>
    </>
  );
};

export default Buttons;



