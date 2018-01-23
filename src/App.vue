<template>
  <div id="app">
    <header class ="header">Markdown Editor</header>
    <div class = "content">
      <div class = "text-editor">
        <TextEditor/>
      </div>
    </div>
    <footer class = "footer">
       <p>Bootstrapped quickly with Vue</p>
       <img src="./assets/logo.png"/>
       <small>Using ToastUIEditor</small>
    </footer>
  </div>
</template>

<script>
import TextEditor from './components/TextEditor'
export default {
    name: 'App',
    components: {
      TextEditor
    }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding:0px;
  margin: 0px;
}
html {
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.text-editor{
  margin:50px;
  margin-bottom: 20px;
  height: 100%;
  width: 90%;
}
.content {
  flex: 1 0 auto;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.footer {
  border-top: 1px solid lightgrey;
  flex-shrink: 0;
  padding-top:10px;
  padding-bottom:10px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height:auto;
  width:100%;
  background-color: whitesmoke;
}
.header {
  width: 100%;
  background-color: whitesmoke;
  padding:40px;
  text-align: center;
  font-size: 20pt;
  font-weight: bold;
  letter-spacing: 4px;
  border-bottom: 1px solid lightgrey;
}
footer img {
  height:50px;
  width:50px;
}
</style>
