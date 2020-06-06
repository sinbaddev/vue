<template>
  <div class="content-wrapper">
    <section class="content">
      <b-table :items="items" :fields="fields" striped responsive="sm">
        <template v-slot:cell(show_details)="row">
          <b-button size="sm" @click="row.toggleDetails" class="mr-2">
            {{ row.detailsShowing ? "Hide" : "Show" }} Details
          </b-button>

          <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
          <b-form-checkbox
            v-model="row.detailsShowing"
            @change="row.toggleDetails"
          >
            Details via check
          </b-form-checkbox>
        </template>

        <template v-slot:row-details="row">
          <b-table striped hover :items="row.item.items"></b-table>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["first_name", "last_name", "show_details"],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
          items: [
            {
              amount: 10,
              rate: 1
            }
          ]
        },
        {
          isActive: false,
          age: 21,
          first_name: "Larsen",
          last_name: "Shaw",
          items: [
            {
              amount: 14,
              rate: 2
            }
          ]
        },
        {
          isActive: false,
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson",
          items: [
            {
              amount: 16,
              rate: 3
            }
          ]
        },
        {
          isActive: true,
          age: 38,
          first_name: "Jami",
          last_name: "Carney",
          items: [
            {
              amount: 15,
              rate: 5
            }
          ]
        },
      ],
    };
  },
};
</script>
