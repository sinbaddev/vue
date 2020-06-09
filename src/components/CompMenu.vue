<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link to="/v3" class="brand-link">
      <img
        v-bind:src="images.logo"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            v-bind:src="images.user2"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <overlay-scrollbars>
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li
              :class="[val.class, val.isOpen ? 'menu-open' : '']"
              v-for="(val, key) in menu"
              :key="key"
            >
              <router-link
                v-if="val.path"
                :to="val.path"
                class="nav-link"
                v-on:click.prevent="val.isOpen = !val.isOpen"
              >
                <font-awesome-icon :icon="val.icon" class="nav-icon" />
                <p>
                  {{ val.name }}
                </p>
              </router-link>
              <a
                v-else
                :href="val.path"
                class="nav-link"
                v-on:click.prevent="val.isOpen = !val.isOpen"
              >
                <font-awesome-icon :icon="val.icon" class="nav-icon" />
                <p>
                  {{ val.name }}
                  <font-awesome-icon
                    :icon="['fa', 'angle-left']"
                    class="right"
                    v-if="val.children"
                  />
                </p>
              </a>
              <ul class="nav nav-treeview" v-if="val.children">
                <li
                  class="nav-item"
                  v-for="(child, k) in val.children"
                  :key="k"
                >
                  <router-link
                    :to="child.path"
                    class="nav-link"
                    :class="current_route == child.path ? 'active' : ''"
                  >
                    <font-awesome-icon
                      :icon="['fa', 'circle']"
                      class="far nav-icon"
                    />
                    <p>{{ child.name }}</p>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </overlay-scrollbars>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "comp-menu",
  data() {
    return {
      cur_route: "",
      menu: [
        {
          name: "Dashboard",
          path: null,
          icon: ["fa", "tachometer-alt"],
          isOpen: true,
          class: "nav-item has-treeview",
          children: [
            {
              name: "Dashboard",
              path: "/v1",
            },
          ],
        },
        {
          name: "Round",
          path: "/round",
          icon: ["fa", "tachometer-alt"],
          isOpen: false,
          class: "nav-item",
        },
        {
          name: "Jackpot",
          path: "/jackpot",
          icon: ["fa", "tachometer-alt"],
          isOpen: false,
          class: "nav-item",
        },
        {
          name: "Transaction",
          path: "/transaction",
          icon: ["fa", "tachometer-alt"],
          isOpen: false,
          class: "nav-item",
        },
      ],
    };
  },
  methods: {
    isMenuOpen(path) {
      this.menu.forEach((menu) => {
        menu.isOpen = false;
        if (menu.children) {
          menu.children.forEach((child) => {
            if (child.path == path) {
              menu.isOpen = true;
            }
          });
        }
      });
    },
  },
  mouted() {},
  computed: {
    current_route() {
      var cur = this.$store.getters.getCurrentRoute;
      this.isMenuOpen(cur);
      return cur;
    },
  },
};
</script>
