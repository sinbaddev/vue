<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
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

    <!-- Main content -->
    <section class="content">
      <!-- Default box -->
      <div class="card">
        <div class="card-body p-0">
          <table class="table table-striped projects">
            <thead>
              <tr>
                <th style="width: 1%">#</th>
                <th>User</th>
                <th>Round</th>
                <th>Amount</th>
                <th>Ref Id</th>
                <th>Ip</th>
                <th>Action</th>
                <th>Sync</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="transactions && transactions.length">
              <tr v-for="(transaction, key) in transactions" :key="key">
                <td>#</td>
                <td>{{ transaction.fullname }}</td>
                <td>{{ transaction.round }}</td>
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.ref_id }}</td>
                <td>{{ transaction.ip }}</td>
                <td>{{ transaction.action }}</td>
                <td>{{ transaction.sync }}</td>
                <td class="project-actions text-right">
                  <router-link
                    :to="`/transaction/${transaction.id}`"
                    class="btn btn-primary btn-sm"
                  >
                    <font-awesome-icon :icon="['fa', 'folder']" />
                    View
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <vue-pagination  :pagination="pagination"
                  @paginate="getList()"
                  :offset="4">
      </vue-pagination>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import TransactionService from "../../../services/TransactionService.js";

export default {
  data() {
    return {
      transactions: [],
      pagination: {},
      params: {
        limit: 2,
        page: 1
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
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
