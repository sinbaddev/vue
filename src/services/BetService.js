import http from "../http-common";

class BetService {
  getAll() {
    return http.get("/bet");
  }

  get(id) {
    return http.get(`/bet/${id}`);
  }
}

export default new BetService();