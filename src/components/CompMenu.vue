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
              class="nav-item has-treeview"
              :class="val.isOpen ? 'menu-open' : ''"
              v-for="(val, key) in menu"
              :key="key"
            >
              <a
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

            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item">
              <router-link to="/widget" class="nav-link">
                <font-awesome-icon :icon="['fa', 'th']" class="fas nav-icon" />
                <p>
                  {{ current_route }}
                  <span class="right badge badge-danger">New</span>
                </p>
              </router-link>
            </li>
            <li class="nav-item has-treeview">
              <a href="#" class="nav-link">
                <font-awesome-icon
                  :icon="['fa', 'copy']"
                  class="fas nav-icon"
                />
                <p>
                  Layout Options
                  <font-awesome-icon
                    :icon="['fa', 'angle-left']"
                    class="fas right"
                  />
                  <span class="badge badge-info right">6</span>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="pages/layout/top-nav.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Top Navigation</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Top Navigation + Sidebar</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/layout/boxed.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Boxed</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/layout/fixed-sidebar.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Fixed Sidebar</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/layout/fixed-topnav.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Fixed Navbar</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/layout/fixed-footer.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Fixed Footer</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="pages/layout/collapsed-sidebar.html"
                    class="nav-link"
                  >
                    <i class="far fa-circle nav-icon"></i>
                    <p>Collapsed Sidebar</p>
                  </a>
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
        cur_route: '',
      menu: [
        {
          name: "Dashboard",
          path: null,
          icon: ["fa", "tachometer-alt"],
          isOpen: false,
          children: [
            {
              name: "Dashboard V1",
              path: "/v1",
            },
            {
              name: "Dashboard V2",
              path: "/v2",
            },
            {
              name: "Dashboard V3",
              path: "/v3",
            },
          ],
        },
        {
          name: "Post",
          path: null,
          icon: ["fa", "tachometer-alt"],
          isOpen: false,
          children: [
            {
              name: "List",
              path: "/post",
            }
          ],
        },
      ],
    };
  },
  methods: {
    isMenuOpen(path) {
        this.menu.forEach(menu => {
            if(menu.children){
                menu.children.forEach(child=>{
                    if(child.path == path){
                        menu.isOpen = true;
                    }
                })
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
