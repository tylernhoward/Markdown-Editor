<template>
  <div id="app">
    <div class = "content">
      <h1>Markup Editor</h1>
      <div class = "text-editor">
        <TextEditor/>
      </div>
      <div class = "save-button">Save</div>

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
h1 {
  width: 100%;
  background-color: whitesmoke;
  padding:40px;
  text-align: center;
  border-bottom: 1px solid lightgrey;
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
  width: auto;
  
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);


}
 .save-button{
  border: 1px solid black;
  color:black;
  margin-bottom: 40px;
  width:100px;
  padding: 5px;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

}
 .save-button:hover{
  border: 1px solid black;
  color:white;
  background-color: #537699;
}
.save-button:active{
    border: 1px solid black;
  color:white;
  background-color:#2c3e50;
}

footer img {
  height:50px;
  width:50px;
}
</style>
