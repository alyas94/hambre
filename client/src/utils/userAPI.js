import axios from "axios";

export default {
  viewAllUsers: function() {
    return axios.get("/api/user");
  },

  createUser: function(userData) {
    return axios.post("/api/user/signup", userData);
  },

  deleteUser: function(id) {
    return axios.delete("/api/user" + id);
  },

  addFavorite: function(id, truckName) {
    return axios.post("/api/user" + id, truckName);
  },

  addLocation: function(id, userLocation) {
    return axios.post("/api/user" + id, userLocation);
  },

  getUser: function(userData) {
    return axios.get("/api/user/me", userData);
  },

  login: function(userData) {
    return axios.post("/api/user/login", userData);
  },
};
