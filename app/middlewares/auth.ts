import * as jwt from "jsonwebtoken";

class Auth {
  handle(req, res, next) {
    let token = req.headers["x-access-token"];

    if (!token) {
      return res.status(401).send({ success: false, message: "Unauthorized" });
    }

    jwt.verify(token, "meu-token", (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .send({ success: false, message: "403 - Token invalid" });
      }
    });

    next();
  }
}

export default new Auth();
