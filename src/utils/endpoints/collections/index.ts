import { EndPoint } from "@/types/index";

const collectionsEndpoints: EndPoint = {
  addCollections: {
    uri: "/collection",
    method: "POST",
    version: "",
  },
  getAllCollections: {
    uri: "/collection",
    method: "GET",
    version: "",
  },
  getSingleCollections: {
    uri: "/collection/:id",
    method: "GET",
    version: "",
  },
  updateCollections: {
    uri: "/collection/:id",
    method: "PUT",
    version: "",
  },
  deleteCollections: {
    uri: "/collection/:id",
    method: "DELETE",
    version: "",
  },
};
export default collectionsEndpoints;
