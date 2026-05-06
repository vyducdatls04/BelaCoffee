import { useEffect, useState } from "react";
import API from "../utils/api";

const useMenus = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await API.get("/menu"); // ✅ GỌI API
        setMenus(res.data);                 // ✅ CÓ res
      } catch (err) {
        console.error("Fetch menu error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  return { menus, loading };
};

export default useMenus;
