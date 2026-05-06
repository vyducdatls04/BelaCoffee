import { useEffect, useState } from "react";
import menuApi from "../api/menuApi";
import MenuCard from "../components/MenuCard";
import { useNavigate } from "react-router-dom";

export default function MenuPage() {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  menuApi.getAll().then(res => {
    setMenus(Array.isArray(res.data) ? res.data : []);
  });
}, []);


  return (
    <div className="px-6 lg:px-32 py-20 bg-orange-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">
        Tất cả Menu
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menus.map(menu => (
          <MenuCard
            key={menu._id}
            menu={menu}
            onView={() => navigate(`/menu/${menu._id}`)}
            onBuy={() => alert("Đã thêm vào giỏ hàng")}
          />
        ))}
      </div>
    </div>
  );
}
