import { Skeleton } from "../../Ui/skeleton";
import { TableCell, TableRow } from "../../Ui/table";

export const TableSkelton = ({ rowsNumber, columnNumber, bgColor }) => {
  const makeRowsNumber = rowsNumber ?? 5;
  const makeColumnNumber = columnNumber ?? 5;
  return new Array(makeRowsNumber).fill("").map((ls, index) => {
    const baseColor = bgColor ?? index % 2 ? "#EFEFEF" : "#EFEFEF";
    return (
      <TableRow key={index}>
        {new Array(makeColumnNumber).fill("").map((ls, index) => {
          return (
            <TableCell key={index}>
              <Skeleton
                className={`w-full !min-w-[70px] !h-[10px]`}
                style={{ backgroundColor: baseColor }}
              />
            </TableCell>
          );
        })}
      </TableRow>
    );
  });
};
