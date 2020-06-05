<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Posts</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Posts</li>
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
          <h3 class="card-title">Posts</h3>

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
                <th style="width: 1%">
                  #
                </th>
                <th style="width: 20%">
                  Post Name
                </th>
                <th style="width: 30%">
                  Content
                </th>
                <th style="width: 8%" class="text-center">
                  Status
                </th>
                <th style="width: 20%"></th>
              </tr>
            </thead>
            <tbody v-if="posts && posts.length">
              <tr v-for="(post, key) in posts" :key="key">
                <td>
                  #
                </td>
                <td>
                  <router-link to="post/1">
                    {{ post.title }}
                  </router-link>
                  <br />
                  <small> Created {{ post.created_at }} </small>
                </td>
                <td>
                  {{ post.content }}
                </td>
                <td class="project-state">
                  <span class="badge badge-success">Success</span>
                </td>
                <td class="project-actions text-right">
                  <a class="btn btn-primary btn-sm" href="#">
                    <i class="fas fa-folder"> </i>
                    View
                  </a>
                  <a class="btn btn-info btn-sm" href="#">
                    <i class="fas fa-pencil-alt"> </i>
                    Edit
                  </a>
                  <a class="btn btn-danger btn-sm" href="#">
                    <i class="fas fa-trash"> </i>
                    Delete
                  </a>
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
import axios from "axios";
import PostService from "../services/PostService.js";

export default {
  data() {
    return {
      posts: [],
      errors: [],
    };
  },
  methods: {
    getList() {
      PostService.getAll()
        .then((response) => {
          this.posts = response.data.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  mouted() {
    this.getList();
  },
};
</script>
