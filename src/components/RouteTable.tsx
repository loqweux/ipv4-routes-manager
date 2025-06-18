import React, { useState, useMemo } from "react";
import type { Route } from "../types/route";
import { compareIpv4 } from "../utils/ipCompare";
import { SortableHeader } from "./SortableHeader";

interface Props {
  routes: Route[];
}

export const RouteTable: React.FC<Props> = ({ routes }) => {
  const [sortColumn, setSortColumn] = useState<string>("destination");
  const [isAscending, setIsAscending] = useState<boolean>(true);

  const sortedRoutes = useMemo(() => {
    return [...routes].sort((a, b) => {
      let diff = 0;
      switch (sortColumn) {
        case "destination":
          diff = compareIpv4(a.destination, b.destination);
          break;
        case "nextHop":
          diff = compareIpv4(a.nextHop, b.nextHop);
          break;
        case "device":
          diff = a.device.localeCompare(b.device);
          break;
        case "prefixLength":
          diff = Number(a.prefixLength) - Number(b.prefixLength);
          break;
        default:
          break;
      }
      return isAscending ? diff : -diff;
    });
  }, [routes, sortColumn, isAscending]);

  const handleSort = (key: string) => {
    if (key === sortColumn) {
      setIsAscending((prev) => !prev);
    } else {
      setSortColumn(key);
      setIsAscending(true);
    }
  };

  return (
    <table className="w-full bg-white shadow-md rounded overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <SortableHeader
            title="Адрес назначения"
            columnKey="destination"
            currentSort={sortColumn}
            ascending={isAscending}
            onClick={handleSort}
          />
          <SortableHeader
            title="Маска"
            columnKey="prefixLength"
            currentSort={sortColumn}
            ascending={isAscending}
            onClick={handleSort}
          />
          <SortableHeader
            title="Шлюз"
            columnKey="nextHop"
            currentSort={sortColumn}
            ascending={isAscending}
            onClick={handleSort}
          />
          <SortableHeader
            title="Интерфейс"
            columnKey="device"
            currentSort={sortColumn}
            ascending={isAscending}
            onClick={handleSort}
          />
        </tr>
      </thead>
      <tbody>
        {sortedRoutes.map((route) => (
          <tr key={route.id} className="border-t border-gray-100 border-2 hover:bg-gray-50">
            <td className="px-4 py-2">
              {route.destination}/{route.prefixLength}
            </td>
            <td className="px-4 py-2">{route.prefixLength}</td>
            <td className="px-4 py-2">{route.nextHop}</td>
            <td className="px-4 py-2">{route.device}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
