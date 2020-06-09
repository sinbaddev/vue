import http from "../http-common";

class JackpotService {
  getAll(params) {
    return http.get("/jackpot", {params});
  }

  get(id) {
    return http.get(`/jackpot/${id}`);
  }
}

export default new JackpotService();