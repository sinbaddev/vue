<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Bet</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Bet</li>
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
                <th style="width: 1%">
                  #
                </th>
                <th>Round</th>
                <th>Amount</th>
                <th>Rate</th>
                <th>Dir</th>
                <th>Card</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="bets && bets.length">
              <tr v-for="(bet, key) in bets" :key="key">
                <td>#</td>
                <td>{{ bet.round }}</td>
                <td>{{ bet.amount }}</td>
                <td>{{ bet.rate }}</td>
                <td>{{ bet.dir }}</td>
                <td>{{ bet.card }}</td>
                <td class="project-actions text-right">
                  <router-link
                    :to="`/bet/${bet.id}`"
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
        <!-- /.card-body -->
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
      bets: [],
      errors: [],
    };
  },
  methods: {
    getList() {
      BetService.getAll()
        .then((response) => {
          this.bets = response.data.data;
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
