import React, { useEffect, useState } from "react";
import { useAUth } from "./useAuth";
import InvitationController from "@/Controllers/InvitationController";
import { useDispatch, useSelector } from "react-redux";
import { getAllInvitations } from "@/Store/Slices/InvitationsSlice";
const useInvitations = () => {
  const { accessToken } = useAUth();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [inviteData, setInviteData] = useState([]);
  const invitationData = useSelector((state) => state.invitations);
  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        setLoading(true);
        const response = await InvitationController.getAllInvitation(
          accessToken
        );
        console.log(response, "response");
        dispatch(getAllInvitations(response?.data));
        setInviteData(response?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error, "catch error");
      }
    };

    fetchInvitations();
  }, []);
  return {
    invitationData: invitationData,
    loading,
  };
};

export default useInvitations;
