<template>
  <div class="hello">
    <div class="display">
      <input v-model.number="operand1" name="operand1" />
      <input v-model.number="operand2" name="operand2" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button @click="sum" name="sum">+</button>
      <button @click="result = operand1 - operand2" name="sub">-</button>
      <button @click="div" name="div">/</button>
      <button @click="result = operand1 * operand2" name="mult">*</button>
      <button @click="degree" name="expon">a^b</button>
      <button @click="integ" name="exponwithout">Деление без остатка</button>
    </div>
    <br />
    <div class="checkbox">
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">Отобразить экранную клавиатуру</label> <br />
      <button
        class="btn"
        name="keyboard"
        v-show="checked"
        v-for="(item, index) in keyboard"
        :key="index"
        @click="operandVal(item)"
      >
        {{ item }}
      </button>
      <button v-show="checked" @click="delVal()">delete</button>
      <br />
      <input
        type="radio"
        name="oper"
        id="one"
        value="operand1"
        v-model="picked"
        v-show="checked"
      />
      <label for="one" v-show="checked">Операнд 1</label>
      <input
        type="radio"
        name="oper"
        id="two"
        value="operand2"
        v-model="picked"
        v-show="checked"
      />
      <label for="two" v-show="checked">Операнд 2</label>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcComp",
  props: {
    msg: String,
  },
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      keyboard: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      checked: true,
      picked: "",
    };
  },
  methods: {
    sum() {
      this.result = this.operand1 + this.operand2;
    },
    div() {
      this.result = this.operand1 / this.operand2;
    },
    degree() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    integ() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },
    operandVal(number) {
      let inputCheckVal = document.querySelector(
        'input[name="oper"]:checked'
      ).value;
      if (inputCheckVal == "operand1") {
        if (this.operand1 === 0) {
          this.operand1 = String(number);
        } else {
          this.operand1 += String(number);
        }
      } else if (this.operand2 === 0) {
        this.operand2 = String(number);
      } else {
        this.operand2 += String(number);
      }
    },
    delVal() {
      let inputCheck = document.querySelector(
        'input[name="oper"]:checked'
      ).value;
      if (inputCheck == "operand1") {
        this.str1 = String(this.operand1);
        this.operand1 = this.str1.slice(0, -1);
      } else {
        this.str2 = String(this.operand2);
        this.operand2 = this.str2.slice(0, -1);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
