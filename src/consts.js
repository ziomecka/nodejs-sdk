import grpc from "@grpc/grpc-js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

export const PROTO_PATH = path.resolve(
  path.dirname(__filename),
  "./proto/client.proto"
);

export const URL = "0.0.0.0:50051";
