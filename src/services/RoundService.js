import http from "../http-common";

class RoundService {
  getAll(params) {
    return http.get("/round", {params});
  }

  get(id) {
    return http.get(`/round/${id}`);
  }

  getAmount(params) {
    return http.get("/round/get-amount", {params});
  }
}

export default new RoundService();