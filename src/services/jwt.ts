import { User } from "@prisma/client";
import JWT from "jsonwebtoken";

const jwt_secret = "super@1234";

class JWTService {
  public static generateTokenForUser(user: User) {
    const payload = {
      id: user?.id,
      email: user?.email,
    };
    const token = JWT.sign(payload, jwt_secret);
    return token;
  }
}

export default JWTService;
