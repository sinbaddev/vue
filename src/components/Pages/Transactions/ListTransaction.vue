<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Transaction</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Transaction</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <section class="content">
      <b-table :items="transactions" :fields="fields" striped responsive="sm">
      </b-table>
      <vue-pagination
        :pagination="pagination"
        @paginate="getList()"
        :offset="4"
      >
      </vue-pagination>
    </section>
  </div>
</template>

<script>
import TransactionService from "../../../services/TransactionService.js";

export default {
  data() {
    return {
      fields: [
        { key: "fullname", label: "User" },
        "round",
        "amount",
        "ref_id",
        "ip",
        "action",
        "sync",
      ],
      transactions: [],
      pagination: {},
      params: {
        limit: 2,
        page: 1,
      },
      errors: [],
    };
  },
  methods: {
    getList() {
      this.params.page = this.pagination.current_page;
      TransactionService.getAll(this.params)
        .then((response) => {
          this.transactions = response.data.data;
          this.pagination = response.data.meta.pagination;
        })
        .catch((error) => {
          this.errors.push(error.response.data.errors);
        });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
