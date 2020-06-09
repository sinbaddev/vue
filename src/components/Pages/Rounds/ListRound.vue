<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Round</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Round</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <section class="content">
      <b-alert
        :show="isError"
        variant="danger"
        dismissible
        @dismissed="!isError"
      >
        <ul>
          <li v-for="(value, key, index) in validationErrors" :key="index">
            {{ value }}
          </li>
        </ul>
      </b-alert>
      <b-table :items="rounds" :fields="fieldRound" striped responsive="sm">
        <template v-slot:cell(action)="row">
          <font-awesome-icon
            size="sm"
            @click="row.toggleDetails"
            :icon="['fa', row.detailsShowing ? 'minus' : 'plus']"
          ></font-awesome-icon>
        </template>
        <template v-slot:row-details="row">
          <b-table
            striped
            hover
            :items="row.item.bets"
            :fields="fieldBet"
          ></b-table>
        </template>
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
import RoundService from "../../../services/RoundService.js";

export default {
  data() {
    return {
      fieldRound: [
        "id",
        "fullname",
        "amount",
        "amount_win",
        "bet_at",
        "status",
        {
          key: "action",
          label: "",
        },
      ],
      fieldBet: ["id", "amount", "rate", "dir", "card"],
      rounds: [],
      errors: [],
      pagination: {},
      params: {
        limit: 2,
        page: 1,
      },
      opened: [],
      isError: false,
      validationErrors: '',
    };
  },
  methods: {
    getList() {
      this.params.page = this.pagination.current_page;
      RoundService.getAll(this.params)
        .then((response) => {
          this.rounds = response.data.data;
          this.pagination = response.data.meta.pagination;
          this.isError = false;
        })
        .catch((error) => {
          this.validationErrors = error.response.data.errors;
          this.isError = true;
        });
    },
    toggle(id) {
      const index = this.opened.indexOf(id);
      if (index > -1) {
        this.opened.splice(index, 1);
      } else {
        this.opened.push(id);
      }
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
