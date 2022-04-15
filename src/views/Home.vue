<template>
  <div class="main-page">
    <h2>Рассчитать расходы</h2>
    <v-form class="expense-form" ref="form">
      <expense-form-item
          v-for="(item,index) in expensesList"
          :expenseName.sync="item.expenseName"
          :expenseValue.sync="item.expenseValue"
          :index-item="index"
          @deleteItem="deleteExpenseItem"
          :key="item.id"
      />
      <div class="expense-form__add-button" @click="addExpenseItem">
        <v-icon>mdi-plus-circle</v-icon>
        <span>Добавить категорию</span>
      </div>
      <div class="expense-form__buttons">
        <v-btn class="expense-form__calculate-button" @click="clearExpenses">Сбросить</v-btn>
        <v-btn class="expense-form__calculate-button" @click="calculateExpenses">Рассчитать</v-btn>
      </div>
    </v-form>
    <div class="expense-statistic" v-if="result">
      <span>Всего расходов: {{ result }}</span>
      <ul>
        <li v-for="item in statisticList" :key="item.id">
          <span>{{ item.expenseName }}: {{ item.expensePersent }}%</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ExpenseFormItem from "@/components/ExpenseFormItem";

export default {
  name: 'Home',
  components: {
    ExpenseFormItem
  },
  data() {
    return {
      expensesList: [],
      result: 0,
      statisticList: []
    }
  },
  methods: {
    addExpenseItem() {
      this.expensesList.push({expenseName: "", expenseValue: "", id: `${Math.random() * 2 * Math.random()}`});
    },
    calculateExpenses() {
      this.result = this.getTotalValue(this.expensesList);
      this.statisticList = this.expensesList.map(item => {
        const newItem = Object.assign({}, item);
        newItem.expensePersent = Math.round((newItem.expenseValue / this.result) * 100);
        return newItem
      })
    },
    getTotalValue(array) {
      return array.reduce((acc, curr) => acc + Number(curr.expenseValue), 0);
    },
    clearExpenses() {
      this.$refs.form.reset();
      this.result = 0;
    },
    deleteExpenseItem(index) {
      this.expensesList.splice(index, 1);
    }
  }
}
</script>

<style lang="scss">
.main-page {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.expense-form {
  width: 500px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  &__buttons {
    align-self: flex-end;
    margin-top: auto;
  }

  &__add-button {
    margin-bottom: 20px;
    align-self: flex-end;
  }

  &__calculate-button {
    margin-left: 20px;
  }
}

</style>
