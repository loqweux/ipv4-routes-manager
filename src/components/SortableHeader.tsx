import React from "react";

interface Props {
  title: string;
  columnKey: string;
  currentSort: string;
  ascending: boolean;
  onClick: (key: string) => void;
}

export const SortableHeader: React.FC<Props> = ({
  title,
  columnKey,
  currentSort,
  ascending,
  onClick,
}) => {
  const isActive = currentSort === columnKey;
  const arrow = isActive ? (ascending ? "▲" : "▼") : "";

  return (
    <th
      className="px-4 py-2 cursor-pointer"
      onClick={() => onClick(columnKey)}
    >
      <div className="flex items-center justify-between">
        <span>{title}</span>
        <span className="ml-1">{arrow}</span>
      </div>
    </th>
  );
};
