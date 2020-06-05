<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Jackpot Detail</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Jackpot Detail</li>
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
                {{ jackpot.fullname }}
              </div>
              <div class="form-group">
                <label for="round">Round</label>
                {{ jackpot.round }}
              </div>
              <div class="form-group">
                <label for="round">Amount</label>
                {{ jackpot.bet_amount }}
              </div>
              <div class="form-group">
                <label for="round">Amount</label>
                {{ jackpot.amount }}
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
import JackpotService from "../../../services/JackpotService.js";

export default {
  data() {
    return {
      jackpot: [],
      errors: [],
    };
  },
  methods: {
    getDetail(id) {
      JackpotService.get(id)
        .then((response) => {
          this.jackpot = response.data.data;
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
