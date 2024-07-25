import useInvitations from "../../Lib/Hooks/useInvitations";
import InvitationController from "../../Controllers/InvitationController";
import { useAUth } from "../../Lib/Hooks/useAuth";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../Components/Ui/table";
import { Button } from "../../Components/Ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../Components/Ui/dropdown-menu";

import InvitationDoctorDialog from "./InvitationDoctorDialog";
import { TableSkelton } from "../../Components/Shared/Skelton/tableSkelton";

const InvitationDoctorStatusTable = () => {
  const { invitationData, loading } = useInvitations();

  return (
    <div className="w-full ">
      <div className="flex flex-col justify-between w-full gap-5 mb-8 sm:items-center sm:flex-row">
        <h2 className="text-lg font-bold uppercase sm:text-xl ">
          A list of invitations to doctors
        </h2>
        <InvitationDoctorDialog>
          <Button className="text-white bg-blue-600">Invite Doctor</Button>
        </InvitationDoctorDialog>
      </div>
      <div className="rounded-md shadow-md">
        <Table className="rounded-md shadow-md">
          <TableHeader>
            <TableRow>
              <TableHead className="">Email</TableHead>
              <TableHead className="text-left">Status</TableHead>
              <TableHead className="text-left">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableSkelton />
            ) : (
              invitationData?.invitations?.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium ">
                      {item?.email}
                    </TableCell>

                    <TableCell className="font-medium ">
                      {item?.status}
                    </TableCell>
                    <TableCell className="font-medium ">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="hover:outline-none hover:border-none">
                            ...
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuCheckboxItem className="cursor-pointer">
                            Reinvite doctor
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InvitationDoctorStatusTable;
