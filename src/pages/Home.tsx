import { RouteTable } from "../components/RouteTable";
import { sampleRoutes } from "../utils/sampleRoutes";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-5">Маршруты IPv4</h1>
      <RouteTable routes={sampleRoutes} />
    </div>
  );
}
