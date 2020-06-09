<template>
  <div class="card-footer clearfix" v-if="pagination.total > 0">
    <ul class="pagination pagination-sm m-0 float-right">
      <li class="page-item" v-if="pagination.current_page > 1">
        <a
          class="page-link"
          href="javascript:void(0)"
          aria-label="Previous"
          v-on:click.prevent="changePage(pagination.current_page - 1)"
        >
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="(page, key) in pagesNumber"
        :class="{ active: page == pagination.current_page }"
        :key="key"
      >
        <a
          class="page-link"
          href="javascript:void(0)"
          v-on:click.prevent="changePage(page)"
          >{{ page }}</a
        >
      </li>
      <li
        class="page-item"
        v-if="pagination.current_page < pagination.total_pages"
      >
        <a
          class="page-link"
          href="javascript:void(0)"
          aria-label="Next"
          v-on:click.prevent="changePage(pagination.current_page + 1)"
        >
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true,
    },
    offset: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    pagesNumber() {
      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset * 2;
      if (to >= this.pagination.total_pages) {
        to = this.pagination.total_pages;
      }
      let pagesArray = [];
      for (let page = from; page <= to; page++) {
        pagesArray.push(page);
      }
      return pagesArray;
    },
  },
  methods: {
    changePage(page) {
      this.pagination.current_page = page;
      this.$emit("paginate");
    },
  },
};
</script>
