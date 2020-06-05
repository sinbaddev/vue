import http from "../http-common";

class TransactionService {
  getAll() {
    return http.get("/transaction");
  }

  get(id) {
    return http.get(`/transaction/${id}`);
  }
}

export default new TransactionService();