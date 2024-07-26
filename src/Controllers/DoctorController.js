const { apiClient } = require("../lib/Config/api.config");

class DoctorController {
  static fetchAllDoctor() {
    new Promise((resolve, reject) => {
      apiClient.get({});
    });
  }
}
