import { initServer } from "./app";
import colors from "colors";

async function init() {
  const app = await initServer();
  
  app.listen(8000,() => console.log(colors.cyan(`server started at port:8000`)));
}

init();