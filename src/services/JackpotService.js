import http from "../http-common";

class JackpotService {
  getAll() {
    return http.get("/jackpot");
  }

  get(id) {
    return http.get(`/jackpot/${id}`);
  }
}

export default new JackpotService();