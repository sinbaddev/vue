<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Post Detail</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Post Detail</li>
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
          <h3 class="card-title">{{ post.title }}</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-8 order-2 order-md-1">
              <div class="row">
                {{ post.content }}
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4 order-1 order-md-2">
              <h3 class="text-primary">
                <i class="fas fa-paint-brush"></i> AdminLTE v3
              </h3>
              <p class="text-muted">
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua butcher retro keffiyeh
                dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.
              </p>
              <br />
              <div class="text-muted">
                <p class="text-sm">
                  Client Company
                  <b class="d-block">Deveint Inc</b>
                </p>
                <p class="text-sm">
                  Project Leader
                  <b class="d-block">Tony Chicken</b>
                </p>
              </div>

              <h5 class="mt-5 text-muted">Project files</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="" class="btn-link text-secondary"
                    ><i class="far fa-fw fa-file-word"></i>
                    Functional-requirements.docx</a
                  >
                </li>
                <li>
                  <a href="" class="btn-link text-secondary"
                    ><i class="far fa-fw fa-file-pdf"></i> UAT.pdf</a
                  >
                </li>
                <li>
                  <a href="" class="btn-link text-secondary"
                    ><i class="far fa-fw fa-envelope"></i>
                    Email-from-flatbal.mln</a
                  >
                </li>
                <li>
                  <a href="" class="btn-link text-secondary"
                    ><i class="far fa-fw fa-image "></i> Logo.png</a
                  >
                </li>
                <li>
                  <a href="" class="btn-link text-secondary"
                    ><i class="far fa-fw fa-file-word"></i>
                    Contract-10_12_2014.docx</a
                  >
                </li>
              </ul>
              <div class="text-center mt-5 mb-3">
                <a href="#" class="btn btn-sm btn-primary">Add files</a>
                <a href="#" class="btn btn-sm btn-warning">Report contact</a>
              </div>
            </div>
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
import PostService from "../../services/PostService.js";

export default {
  data() {
    return {
      post: [],
      errors: [],
    };
  },
  methods: {
    getDetail(id) {
      PostService
      .get(id)
      .then((response) => {
        this.post = response.data.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
    }
  },
  mounted() {
      this.getDetail(this.$route.params.id);
  }
};
</script>
