<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
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

    <!-- Main content -->
    <section class="content">
      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Projects</h3>

          <div class="card-tools">
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="collapse"
              data-toggle="tooltip"
              title="Collapse"
            >
              <i class="fas fa-minus"></i>
            </button>
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="remove"
              data-toggle="tooltip"
              title="Remove"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-0">
          <table class="table table-striped projects">
            <thead>
              <tr>
                <th>Round</th>
                <th>User</th>
                <th>Amount</th>
                <th>Amount Win</th>
                <th>Bet At</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="rounds && rounds.length">
              <template v-for="round in rounds">
                <tr :key="round.id">
                  <td>{{ round.id }}</td>
                  <td>{{ round.fullname }}</td>
                  <td>{{ round.amount }}</td>
                  <td>{{ round.amount_win }}</td>
                  <td>{{ round.bet_at }}</td>
                  <td>{{ round.status }}</td>
                  <td class="project-actions text-right">
                    <router-link
                      :to="`/round/${round.id}`"
                      class="btn btn-primary btn-sm"
                    >
                      <font-awesome-icon :icon="['fa', 'folder']" />
                      View
                    </router-link>
                    <font-awesome-icon
                      :icon="[
                        'fa',
                        opened.includes(round.id) ? 'minus' : 'plus',
                      ]"
                      @click="toggle(round.id)"
                      :class="{ opened: opened.includes(round.id) }"
                    />
                  </td>
                </tr>
                <tr
                  style="padding-left: 20px"
                  v-if="
                    opened.includes(round.id) && round.bets && round.bets.length
                  "
                  :key="`i-${round.id}`"
                >
                  <table>
                    <thead>
                      <tr>
                        <th style="width: 1%">
                          #
                        </th>
                        <th>Amount</th>
                        <th>Rate</th>
                        <th>Dir</th>
                        <th>Card</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody v-if="round.bets && round.bets.length">
                      <tr v-for="(bet, keyBet) in round.bets" :key="keyBet">
                        <td>{{ keyBet + 1 }}</td>
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
                </tr>
              </template>
            </tbody>
          </table>
          <div class="pagination">
            <button
              class="btn btn-default"
              @click="fetchStories(pagination.prev_page_url)"
              :disabled="!pagination.prev_page_url"
            >
              Previous
            </button>
            <span
              >Page {{ pagination.current_page }} of
              {{ pagination.last_page }}</span
            >
            <button
              class="btn btn-default"
              @click="fetchStories(pagination.next_page_url)"
              :disabled="!pagination.next_page_url"
            >
              Next
            </button>
          </div>
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
import RoundService from "../../../services/RoundService.js";

export default {
  data() {
    return {
      rounds: [],
      errors: [],
      pagination: {},
      opened: [],
    };
  },
  methods: {
    getList() {
      RoundService.getAll()
        .then((response) => {
          this.rounds = response.data.data;
        })
        .catch((e) => {
          this.errors.push(e);
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
    makePagination: function(data) {
      let pagination = {
        current_page: data.current_page,
        last_page: data.total_pages,
        next_page_url: data.links.next,
        prev_page_url: data.links.previous,
      };
      this.$set("pagination", pagination);
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
