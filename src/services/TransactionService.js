import http from "../http-common";

class TransactionService {
  getAll(params) {
    return http.get("/transaction", {params});
  }

  get(id) {
    return http.get(`/transaction/${id}`);
  }
}

export default new TransactionService();