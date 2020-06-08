<template>
  <div class="login-box">
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in</p>
        <b-alert :show="errorMsg != ''" variant="danger">{{
          errorMsg
        }}</b-alert>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            v-model="username"
            placeholder="Username"
          />
          <div class="input-group-append">
            <div class="input-group-text">
              <font-awesome-icon :icon="['fa', 'user']" />
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input
            type="password"
            class="form-control"
            v-model="password"
            placeholder="Password"
          />
          <div class="input-group-append">
            <div class="input-group-text">
              <font-awesome-icon :icon="['fa', 'lock']" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember" />
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button
              v-on:click="login()"
              type="submit"
              class="btn btn-primary btn-block"
            >
              Sign In
            </button>
          </div>
          <!-- /.col -->
        </div>

        <p class="mb-1">
          <a href="forgot-password.html">I forgot my password</a>
        </p>
        <p class="mb-0">
          <a href="register.html" class="text-center"
            >Register a new membership</a
          >
        </p>
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
</template>

<script>
import LoginService from "../services/LoginService.js";

export default {
  name: "login",
  data() {
    return {
      step: 1,
      username: localStorage.getItem("username"),
      errorMsg: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.errorMsg = "";
      if (!this.username) {
        return (this.errorMsg = "Please enter your Username");
      }
      if (!this.password) {
        return (this.errorMsg = "Please enter your Password");
      }
      LoginService.login({
        username: this.username,
        password: this.password,
      })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          this.$store.commit("setToken", res.data.token);
          this.errorMsg = "";
          window.location.href = '/';
        })
        .catch((err) => {
            this.errorMsg = err.response.error;
            return Promise.reject(err);
        });
    },
  },
};
</script>
