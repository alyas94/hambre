import axios from "axios";

export default {
  viewAllUsers: function() {
    return axios.get("/api/user");
  },

  createUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  deleteUser: function(id) {
    return axios.delete("/api/user" + id);
  },

  addFavorite: function(id, truckName) {
    return axios.put("/api/user" + id, truckName);
  },

  addLocation: function(id, userLocation) {
    return axios.put("/api/user" + id, userLocation);
  },
};
