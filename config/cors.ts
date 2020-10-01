import * as cors from "cors";

class Cors {
  init() {
    const options: cors.CorsOptions = {
      methods: "GET,OPTIONS,PUT,POST,DELETE",
      origin: "*",
    };

    return cors(options);
  }
}

export default Cors;
