import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

import { PROTO_PATH, URL } from "./consts.js";

const clientPackage = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

export const server = new grpc.Server();

server.addService(clientPackage.Client, {
  startFlow,
});

server.bindAsync(URL, grpc.ServerCredentials.createInsecure(), () => {
  console.log(["Server running at", URL].join(" "));
  server.start();
});

function startFlow(arg, callback) {
  callback(null, {});
}
