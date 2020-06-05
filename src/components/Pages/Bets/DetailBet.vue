<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Bet Detail</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Bet Detail</li>
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
                <label for="round">Round</label>
                {{ bet.round }}
              </div>
              <div class="form-group">
                <label for="round">Amount</label>
                {{ bet.amount }}
              </div>
              <div class="form-group">
                <label for="round">Rate</label>
                {{ bet.rate }}
              </div>
              <div class="form-group">
                <label for="round">Dir</label>
                {{ bet.dir }}
              </div>
              <div class="form-group">
                <label for="round">Card</label>
                {{ bet.card }}
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
import BetService from "../../../services/BetService.js";

export default {
  data() {
    return {
      bet: [],
      errors: [],
    };
  },
  methods: {
    getDetail(id) {
      BetService.get(id)
        .then((response) => {
          this.bet = response.data.data;
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
