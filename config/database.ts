import * as moongose from "mongoose";

class Database {
  private dbHost = process.env.DB_HOST;

  createConnection() {
    moongose
      .connect(this.dbHost, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Database;
