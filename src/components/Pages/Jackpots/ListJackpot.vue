<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Jackpot</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Jackpot</li>
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
                <th>User</th>
                <th>Round</th>
                <th>Bet Amout</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="jackpots && jackpots.length">
              <tr v-for="(jackpot, key) in jackpots" :key="key">
                <td>#</td>
                <td>{{ jackpot.fullname }}</td>
                <td>{{ jackpot.round }}</td>
                <td>{{ jackpot.bet_amount }}</td>
                <td>{{ jackpot.amount }}</td>
                <td class="project-actions text-right">
                  <router-link
                    :to="`/jackpot/${jackpot.id}`"
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
import JackpotService from "../../../services/JackpotService.js";

export default {
  data() {
    return {
      jackpots: [],
      errors: [],
    };
  },
  methods: {
    getList() {
      JackpotService.getAll()
        .then((response) => {
          this.jackpots = response.data.data;
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
