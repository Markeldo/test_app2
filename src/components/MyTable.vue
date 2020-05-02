<template>
  <div class="grid">
    <div class="grid__header" ref="header" id="sasdasdasd">
      <table class="grid__table">
        <colgroup>
          <col />
          <col class="grid__col-size-1" />
          <col class="grid__col-size-1" />
          <col class="grid__col-size-1" />
          <col class="grid__col-size-2" />
        </colgroup>
        <thead>
          <tr>
            <th class="grid__th">Product Name</th>
            <th class="grid__th">Unit Price</th>
            <th class="grid__th">Units in Stock</th>
            <th class="grid__th">Discontinued</th>
            <th class="grid__th">&nbsp;</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="grid__scrollable" ref="scrollable">
      <table class="grid__table">
        <colgroup>
          <col />
          <col class="grid__col-size-1" />
          <col class="grid__col-size-1" />
          <col class="grid__col-size-1" />
          <col class="grid__col-size-2" />
        </colgroup>
        <tbody>
          <tr v-for="product in products" :key="product.id" :product="product">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.units }}</td>
            <td>{{ product.discontinued }}</td>
            <td>
              <button class="grid__btn" @click="onEdit(product.id)">✏️ Edit</button>
              <button class="grid__btn btn--delete" @click="onDelete(product.id)">🔴 Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$refs.scrollable.addEventListener("scroll", (e) => {
      this.$refs.header.scrollLeft = e.target.scrollLeft;
    });
  },
  methods: {
    onEdit(id) {
      this.$store.dispatch("editProduct", {id : id});
    },
    onDelete(id) {
      this.$store.dispatch("deleteProduct", {id : id});
    }
  }
};
</script>

<style lang="less" scoped>
col {
  width: 150px;
  @media (min-width: 768px) {
    width: auto;
  }
}
.grid {
  overflow: hidden;
  &__header {
    background: #eee;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    display: flex;
    table {
      border-bottom: 0;
    }
    &:after {
      content: "";
      width: 17px;
      min-width: 17px;
      border-top: 1px solid #ccc;
    }
  }

  &__table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
    tr {
      border-top: 1px solid #ccc;
      &:first-child {
        border-top: 0;
      }
    }
    tbody {
      tr {
        &:nth-child(2n) {
          background: #f9f9f9;
        }
      }
    }
    th,
    td {
      padding: 10px 10px 8px;
      border-left: 1px solid #ccc;
      &:first-child {
        border-left: 0;
      }
    }
  }

  &__col-size-1 {
    width: 120px;
  }

  &__col-size-2 {
    width: 200px;
  }

  &__th {
    text-align: left;
    font-weight: normal;
  }

  &__scrollable {
    max-height: 200px;
    overflow-y: scroll;
    border-bottom: 1px solid #ccc;
    table {
      border-top: 0;
      border-bottom: 0;
    }
  }
}
</style>
