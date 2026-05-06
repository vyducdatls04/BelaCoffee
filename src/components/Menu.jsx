import { useEffect, useState } from "react";
import axios from "axios";
import MenuCard from "./MenuCard";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedMenus = async () => {
      try {
        const res = await axios.get("/api/menu/featured");

        setMenus(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Menu error:", err);
        setMenus([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedMenus();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Đang tải menu...</p>;
  }

  if (menus.length === 0) {
    return <p className="text-center py-10">Chưa có món nào</p>;
  }

  return (
    <section className="px-6 lg:px-32 py-20 bg-orange-100">
      <h2 className="text-3xl font-bold text-center mb-12">
        Menu nổi bật
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menus.map((menu) => (
          <MenuCard key={menu._id} menu={menu} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
