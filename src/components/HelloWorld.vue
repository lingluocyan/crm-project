<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-input placeholder="请输入内容"></el-input>
    <el-button @click="click">发送请求</el-button>
  </div>
</template>

<script>
  import { getPostDdd } from "@/utils/demo.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    async click() {
      let res = await getPostDdd(10)
      console.log(res,'res')
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
