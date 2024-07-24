import axios from "axios";
import { useDispatch } from "react-redux";

class InvitationController {
  static getAllInvitation(accessToken) {
    console.log(accessToken, "accessToken");
    return new Promise((resolve, reject) => {
      axios({
        url: `${import.meta.env.VITE_API_URL}api/admin/invitations`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          if (res) {
            if (res?.data?.success) {
              resolve(res?.data);
              console.log(res, "invitation data");
            } else {
              reject(res?.data?.error?.message);
            }
          }
        })
        .catch((err) => {
          console.log(err, "error");
          reject(err);
        });
    });
  }
}
export default InvitationController;
