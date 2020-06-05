<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Round Detail</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Round Detail</li>
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
                {{ round.fullname }}
              </div>
              <div class="form-group">
                <label for="round">Round</label>
                {{ round.id }}
              </div>
              <div class="form-group">
                <label for="round">Amount</label>
                {{ round.amount }}
              </div>
              <div class="form-group">
                <label for="round">Amount Win</label>
                {{ round.amount_win }}
              </div>
              <div class="form-group">
                <label for="round">Bet At</label>
                {{ round.bet_at }}
              </div>
              <div class="form-group">
                <label for="round">Status</label>
                {{ round.status }}
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
import RoundService from "../../../services/RoundService.js";

export default {
  data() {
    return {
      round: [],
      errors: [],
    };
  },
  methods: {
    getDetail(id) {
      RoundService.get(id)
        .then((response) => {
          this.round = response.data.data;
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
