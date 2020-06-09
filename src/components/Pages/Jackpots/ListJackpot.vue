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

    <section class="content">
      <b-table :items="jackpots" :fields="fields" striped responsive="sm">
      </b-table>
      <vue-pagination
        :pagination="pagination"
        @paginate="getList()"
        :offset="4"
      >
      </vue-pagination>
    </section>
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import JackpotService from "../../../services/JackpotService.js";

export default {
  data() {
    return {
      fields: [{ key: 'fullname', label: 'User'}, 'round', 'bet_amount', 'amount'],
      jackpots: [],
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
      JackpotService.getAll(this.params)
        .then((response) => {
          this.jackpots = response.data.data;
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
