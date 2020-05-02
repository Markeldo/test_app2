<template>
  <div id="app">
    <Editor />
    <MyTable msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
import Editor from './components/Editor'

export default {
  name: 'App',
  components: {
    MyTable, Editor
  }
}
</script>

<style lang="less">
* {
  box-sizing: content-box;
}
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  min-width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 5px;
  @media(min-width: 768px) {
    margin: 60px;
  }
}
button {
  background: #e9e9e9;
  border: 1px solid #ccc;
  padding: 5px 10px;
  color: #666;
  margin-left: 6px;
  transition: .4s;
  outline: none;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    box-shadow: inset 0 30px rgba(255,255,255,.5);
    cursor: pointer;
  }
  &:active {
    box-shadow: inset 0 30px rgba(0,0,0,.1);
  }
  &.btn--delete {
    background: rgba(150,0,0,.2);
    border: 1px solid #caa;
  }
  &.btn--new {
    background: rgba(0,150,0,.2);
    border: 1px solid #aca;
  }
  &.btn--primary {
    background: rgba(50,150,200,.4);
    border: 1px solid #aac;
  }
}
</style>
