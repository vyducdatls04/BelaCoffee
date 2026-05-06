import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// giả lập DB (sau này thay bằng MySQL / MongoDB)
const users = [];

// REGISTER
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const exists = users.find((u) => u.email === email);
  if (exists)
    return res.status(400).json({ message: "Email already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    id: users.length + 1,
    name,
    email,
    password: hashedPassword,
  });

  res.json({ message: "Register success" });
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user)
    return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token });
};
