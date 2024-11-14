import createApp from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const server = createApp();

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`🔥 Server running at port: ${port}`);
})