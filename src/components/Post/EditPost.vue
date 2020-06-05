<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Post Add</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Post Add</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-6">
          <div class="card card-primary">
            <div class="card-body" v-if="!submitted">
              <div class="form-group">
                <label for="inputName">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  class="form-control"
                  v-model="post.title"
                />
              </div>
              <div class="form-group">
                <label for="inputDescription">Content</label>
                <textarea
                  id="content"
                  name="content"
                  class="form-control"
                  rows="4"
                  v-model="post.content"
                ></textarea>
              </div>
              <div class="col-12">
                <input
                  type="submit"
                  value="Edit"
                  class="btn btn-success"
                  @click="editPost"
                />
                <a href="#" class="btn btn-secondary">Cancel</a>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-body" v-else>
              <h4>You submitted successfully!</h4>
            </div>
          </div>
          <!-- /.card -->
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import PostService from "../../services/PostService.js";

export default {
  data() {
    return {
      post: {},
      submitted: false,
      errors: [],
    };
  },
  methods: {
    getDetail(id) {
      PostService.get(id)
        .then((response) => {
          this.post = response.data.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    editPost() {
        PostService.update(this.post.id, this.post)
        .then(response => {
          console.log(response);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getDetail(this.$route.params.id);
  },
};
</script>
