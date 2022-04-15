<template>
  <div class="expense-form-item">
    <v-overflow-btn
        class="expense-form-item__list"
        :items="expensesItems"
        item-text="item"
        v-model="name"
        @change="updateName"
        height="40px"
        flat
        dense
        outlined/>
    <v-text-field
        v-model="value"
        @change="updateValue"
        dense
        outlined/>
    <v-icon @click="deleteExpense">mdi-delete</v-icon>
  </div>
</template>

<script>
export default {
  name: "ExpenseFormItem",
  props: {
    indexItem: Number
  },
  data() {
    return {
      expensesItems: ["Продукты", "Одежда", "Развлечения", "Услуги связи"],
      name: "",
      value: ""
    }
  },
  methods: {
    updateName() {
      this.$emit("update:expenseName", this.name);
    },
    updateValue() {
      this.$emit("update:expenseValue", this.value);
    },
    deleteExpense() {
      this.$emit("deleteItem", this.indexItem);
    }
  }
}
</script>

<style lang="scss">
.expense-form-item {
  display: flex;
  align-items: baseline;
  width: 100%;

  &__list {
    width: 250px;
    margin-right: 15px !important;
  }
}
</style>