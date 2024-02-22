import { EndPoint } from "@/types/index";

const bookmarkEndpoints: EndPoint = {
  addBookmark: {
    uri: "/bookmark",
    method: "POST",
    version: "",
  },
  getBookmark: {
    uri: "/bookmark",
    method: "GET",
    version: "",
  },
  getSingleBookmark: {
    uri: "/bookmark/:bookmarkId",
    method: "GET",
    version: "",
  },
  deleteBookmark: {
    uri: "/bookmark/:bookmarkId",
    method: "DELETE",
    version: "",
  },
  addFolder: {
    uri: "/folder",
    method: "POST",
    version: "",
  },
  getFolder: {
    uri: "/folder",
    method: "GET",
    version: "",
  },
  getSingleFolder: {
    uri: "/folder/:folderId",
    method: "GET",
    version: "",
  },
  deleteFolder: {
    uri: "/folder/:folderId",
    method: "DELETE",
    version: "",
  },
};
export default bookmarkEndpoints;
