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

const packageDefinition = grpc.loadPackageDefinition(clientPackage);

class Client {
  me = new packageDefinition.Client(URL, grpc.credentials.createInsecure());

  async startFlow() {
    return new Promise((resolve, reject) => {
      this.me.startFlow(null, (err, response) => {
        if (err) {
          reject(err);
        }

        console.log("Response", response);

        resolve(response);
      });
    });
  }
}

export const client = new Client();

client.startFlow();
