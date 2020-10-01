import Boostrap from "./bootstrap";

let port = process.env.PORT || 3000;

Boostrap.app.listen(port, function () {
  console.log(`server exec at ${port}`);
});
