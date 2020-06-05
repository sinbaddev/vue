import http from "../http-common";

class RoundService {
  getAll() {
    return http.get("/round");
  }

  get(id) {
    return http.get(`/round/${id}`);
  }
}

export default new RoundService();