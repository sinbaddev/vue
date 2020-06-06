<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <section class="col-lg-10">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Month</h3>
            </div>

            <div class="card-body">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-3">
                  <div class="info-box">
                    <span class="info-box-icon bg-info elevation-1"
                      ><font-awesome-icon :icon="['fa', 'money-bill-wave']"
                    /></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Bet Amount</span>
                      <span class="info-box-number">
                        {{ amountMonth.total_bet_amount }}
                        <small>vnđ</small>
                      </span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                  <div class="info-box">
                    <span class="info-box-icon bg-warning elevation-1"
                      ><font-awesome-icon :icon="['fa', 'trophy']"
                    /></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Bet Amount Win</span>
                      <span class="info-box-number">
                        {{ amountMonth.total_bet_amount_win }}
                        <small>vnđ</small>
                      </span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="info-box">
                    <span class="info-box-icon bg-danger elevation-1"
                      ><font-awesome-icon :icon="['fa', 'money-bill-wave']"
                    /></span>

                    <div class="info-box-content">
                      <span class="info-box-text"
                        >Bet Amount Win - Bet Amount</span
                      >
                      <span class="info-box-number">
                        {{ amountMonth.total_sub_amount }}
                        <small>vnđ</small>
                      </span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <!-- ./col -->
              </div>
            </div>
          </div>
        </section>
        <!-- Small boxes (Stat box) -->
        <section class="col-lg-10">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">AllTime</h3>
            </div>

            <div class="card-body">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-3">
                  <div class="info-box">
                    <span class="info-box-icon bg-info elevation-1"
                      ><font-awesome-icon :icon="['fa', 'money-bill-wave']"
                    /></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Bet Amount</span>
                      <span class="info-box-number">
                        {{ amountAll.total_bet_amount }}
                        <small>vnđ</small>
                      </span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                  <div class="info-box">
                    <span class="info-box-icon bg-warning elevation-1"
                      ><font-awesome-icon :icon="['fa', 'trophy']"
                    /></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Bet Amount Win</span>
                      <span class="info-box-number">
                        {{ amountAll.total_bet_amount_win }}
                        <small>vnđ</small>
                      </span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <div class="col-12 col-sm-6 col-md-4">
                  <div class="info-box">
                    <span class="info-box-icon bg-danger elevation-1"
                      ><font-awesome-icon :icon="['fa', 'money-bill-wave']"
                    /></span>

                    <div class="info-box-content">
                      <span class="info-box-text"
                        >Bet Amount Win - Bet Amount</span
                      >
                      <span class="info-box-number">
                        {{ amountAll.total_sub_amount }}
                        <small>vnđ</small>
                      </span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <!-- ./col -->
              </div>
            </div>
          </div>
        </section>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import RoundService from "../services/RoundService.js";

export default {
  data() {
    return {
      amountMonth: [],
      amountAll: [],
      errors: [],
    };
  },
  methods: {
    getAmountMonth() {
      var now = new Date();
      var params = {
        month: now.getMonth() + 1,
      };
      RoundService.getAmount(params)
        .then((response) => {
          this.amountMonth = response.data.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    getAmountAll() {
      RoundService.getAmount()
        .then((response) => {
          this.amountAll = response.data.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  mounted() {
    this.getAmountMonth();
    this.getAmountAll();
  },
};
</script>
