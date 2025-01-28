import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";

export default auth = (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (!authorization || !authorization.startsWith("Bearer")) {
    return res.status(401).json({
      message: "Unauthorised : no token found",
    });
  }
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded._id;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorised : no token found",
    });
  }
};
