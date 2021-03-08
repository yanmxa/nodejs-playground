import http from "http";

http
  .createServer((request, response) => {
    response.end("Hello, typescript3");
  })
  .listen(3000, () => console.log("server Start"));
