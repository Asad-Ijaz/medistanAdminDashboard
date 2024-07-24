import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Components/ui/table";
import { Button } from "../Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../Components/ui/dropdown-menu";
const DoctorsView = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col justify-between w-full gap-5 mb-8 sm:items-center sm:flex-row">
        <h2 className="text-lg font-bold uppercase sm:text-xl ">Doctors</h2>
      </div>
      <div className="rounded-md shadow-md">
        <Table className="rounded-md shadow-md">
          <TableHeader>
            <TableRow>
              <TableHead className="">Email</TableHead>
              <TableHead className="text-left">Name</TableHead>
              <TableHead className="text-left">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium ">123@gmail.com</TableCell>

              <TableCell className="font-medium ">Frank</TableCell>
              <TableCell className="font-medium ">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="hover:outline-none hover:border-none">
                      ...
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuCheckboxItem className="cursor-pointer">
                      Delete
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DoctorsView;
