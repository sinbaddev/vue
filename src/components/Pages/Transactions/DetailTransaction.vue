<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Transaction Detail</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Transaction Detail</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Default box -->
      <div class="col-md-6">
          <div class="card card-secondary">
            <div class="card-body">
              <div class="form-group">
                <label for="round">User</label>
                {{ transaction.fullname }}
              </div>
              <div class="form-group">
                <label for="round">Round</label>
                {{ transaction.round }}
              </div>
              <div class="form-group">
                <label for="round">Amount</label>
                {{ transaction.amount }}
              </div>
              <div class="form-group">
                <label for="round">Ref Id</label>
                {{ transaction.ref_id }}
              </div>
              <div class="form-group">
                <label for="round">IP</label>
                {{ transaction.ip }}
              </div>
              <div class="form-group">
                <label for="round">Action</label>
                {{ transaction.action }}
              </div>
              <div class="form-group">
                <label for="round">Status</label>
                {{ transaction.status }}
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
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
      transaction: [],
      errors: [],
    };
  },
  methods: {
    getDetail(id) {
      TransactionService.get(id)
        .then((response) => {
          this.transaction = response.data.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  mounted() {
    this.getDetail(this.$route.params.id);
  },
};
</script>
