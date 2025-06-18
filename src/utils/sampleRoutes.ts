import type { Route } from "../types/route";
import { v4 as uuid } from "uuid";

export const sampleRoutes: Route[] = [
  {
    id: uuid(),
    destination: "0.0.0.0",
    prefixLength: "0",
    nextHop: "193.0.174.1",
    device: "Ethernet",
  },
  {
    id: uuid(),
    destination: "10.1.30.0",
    prefixLength: "24",
    nextHop: "0.0.0.0",
    device: "Guest",
  },
  {
    id: uuid(),
    destination: "192.168.1.0",
    prefixLength: "24",
    nextHop: "0.0.0.0",
    device: "Home",
  },
  {
    id: uuid(),
    destination: "193.0.174.0",
    prefixLength: "24",
    nextHop: "0.0.0.0",
    device: "Ethernet",
  },
  {
    id: uuid(),
    destination: "193.0.175.0",
    prefixLength: "25",
    nextHop: "193.0.174.10",
    device: "Ethernet",
  },
  {
    id: uuid(),
    destination: "193.0.175.22",
    prefixLength: "32",
    nextHop: "193.0.174.1",
    device: "Ethernet",
  },
  {
    id: uuid(),
    destination: "172.16.0.0",
    prefixLength: "16",
    nextHop: "0.0.0.0",
    device: "VPN",
  },
  {
    id: uuid(),
    destination: "8.8.8.0",
    prefixLength: "24",
    nextHop: "8.8.4.4",
    device: "Public DNS",
  },
  {
    id: uuid(),
    destination: "100.64.0.0",
    prefixLength: "10",
    nextHop: "0.0.0.0",
    device: "Carrier",
  },
];
