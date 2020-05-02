<template>
  <div class="editor">
    <button class="btn--new" @click="onCreateNew">➕ Create New Record</button>
    <div class="editor__modal" v-if="modalOpened">
      <div class="editor__modal-wrapper">
        <div class="editor__modal-header">
          <span>{{ formTitle }} record</span>
          <button class="btn" @click="onClose">✖️</button>
        </div>
        <div class="editor__modal-content">
          <form class="editor__form">
            <div class="editor__field">
              <label class="editor__label">Product Name</label>
              <span class="editor__input-wrapper">
                <input type="text" class="editor__input"  v-model="product.name"/>
              </span>
            </div>
            <div class="editor__field">
              <label class="editor__label">Unit Price</label>
              <span class="editor__input-wrapper">
                <input type="number" class="editor__input" step=".01" v-model="product.price"/>
              </span>
            </div>
            <div class="editor__field">
              <label class="editor__label">Units in Stock</label>
              <span class="editor__input-wrapper">
                <input type="number" class="editor__input" v-model="product.units"/>
              </span>
            </div>
            <div class="editor__field">
              <label class="editor__label">Discontinued</label>
              <span class="editor__input-wrapper">
                <input type="checkbox" class="editor__input"  v-model="product.discontinued"/>
              </span>
            </div>
          </form>
        </div>
        <div class="editor__modal-footer">
          <button class="btn btn--new" v-if="isNew" @click="onSave">✅ Create</button>
          <button class="btn btn--primary" v-if="isEdit" @click="onSave">💾 Save</button>
          <button class="btn" @click="onClose">✖️ Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

const defaultProduct = {
  id: null,
  name : "",
  price: 0.00,
  units: 0,
  discontinued: false
};

export default {
  data() {
    return {
      product: {},
      modalOpened: false
    };
  },
  watch: {
    // эта функция запускается при любом изменении вопроса
    editId(newValue) {
      if(newValue) {
        this.modalOpened = true;
        let index = this.$store.state.products.findIndex(x => x.id == newValue);
        this.product = Vue.util.extend({}, this.$store.state.products[index]);
      }
    }
  },
  computed: {
    editId() {
      return this.$store.state.idToEdit;
    },
    isNew() {
      return !this.editId;
    },
    isEdit() {
      return this.editId;
    },
    formTitle() {
      return this.editId ? "Edit" : "New";
    }
  },
  methods: {
    onCreateNew() {
      this.modalOpened = true;
      this.product = Vue.util.extend({}, defaultProduct);
    },
    onClose() {
      this.$store.dispatch("editProduct", {id : null});
      this.modalOpened = false;
    },
    onSave() {
      this.$store.dispatch("saveProduct", this.product);
      this.onClose();
    }
  }
};
</script>

<style lang="less" scoped>
.editor {
  background: #eee;
  border: 1px solid #ccc;
  border-bottom: 0;
  padding: 10px;

  &__modal {
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__modal-wrapper {
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border: 1px solid #ccc;
    min-width: 400px;
  }
  &__modal-header {
    background: #eee;
    border-bottom: 1px solid #ccc;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 1.2rem;
    }
  }
  &__modal-footer {
    background: #eee;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: flex-end;
    padding: 10px 15px;
  }
  &__modal-content {
    background: #fff;
    padding: 10px 15px;
  }
  &__field {
    display: flex;
    align-content: stretch;
    align-items: center;
    flex: 2;
    padding: 7px 0;
  }

  &__label {
    width: 33%;
  }

  &__input {
    box-sizing: content-box;
    display: inline-block;
    margin: 0;
    width: 100%;
    border: 1px solid #ccc;
    padding: 6px 10px 4px;
    &[type="checkbox"] {
      width: 16px;
      cursor: pointer;
    }
    &[type="number"] {
      width: 50px;
    }
  }
}
</style>
