import axios from "axios";

export default {
  allTrucks: function() {
    return axios.get("/api/owner");
  },

  findLocation: function(ownerFindbyLocation) {
    return axios.get("/api/owner/", ownerFindbyLocation);
  },

  createOwner: function(ownerData) {
    return axios.post("/api/owner", ownerData);
  },

  filter: function(filterTerms) {
    return axios.get("/api/owner/filter" + filterTerms);
  },

  deleteOwner: function(id) {
    return axios.post("/api/owner/" + id);
  },

  updateInformation: function(id, newInformation) {
    return axios.update("/api/owner/" + id, newInformation);
  },

  newLocation: function(id, newLocation) {
    return axios.put("/api/owner" + id, newLocation);
  },

  truckActive: function(id) {
    return axios.update("/api/owner/" + id + "/active");
  },
  truckInactive: function(id) {
    return axios.update("/api/owner/" + id + "/inactive");
  },

  currentLocation: function(id) {
    return axios.get("/api/owner/" + id + "/location");
  },

  activeTrucks: function() {
    return axios.get("/api/owner/active");
  },
};
