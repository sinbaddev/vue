import http from "../http-common";

class RoundService {
  getAll(params) {
    return http.get("/round", {params});
  }

  get(id) {
    return http.get(`/round/${id}`);
  }
}

export default new RoundService();