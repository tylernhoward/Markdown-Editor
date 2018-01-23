
<template>   
    <div class = "editor-pane">
      <div class = "editor" ref="editor"></div>
      <a class = "save-button" ref = "save" v-on:click= "save" v-bind:href= "textURI" download="README.md" >Save</a>
    </div>
</template>

<script>
import * as fs from 'fs'
import TuiEditor from 'tui-editor'
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import './codemirror.css'

export default {
  name: 'TextEditor',
  data () {
    return {
      textURI : null,
      options : {
            initialValue: `
# Markdown Editor
> A simple single page application to create .MD readme files for projects/repositories
## Getting Started
Quickly framed application written in Vue.js. Uses the WYSIWYG Editor: [ToastUIEditor](https://nhnent.github.io/tui.editor/) as a focal point. Application will save created README.MD file to disk
### Dependencies
This application relies on the following Vue plugins at the moment:
* vue-gh-pages
* vue-tui-editor
### Installation
- - -
\`\`\`
# clone repository
git clone https://github.com/tylernhoward/markdown-editor.git

# install dependencies
npm install

# serve development on localhost:8080
npm run dev

# build for production with docs folder to be served to gh-pages
npm run build
\`\`\`
` ,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: 'auto',
            minHeight: '500px'
      },
    }
  },
  methods: {
    save: function (event) {
      var textBlob = new Blob([this.editor.getMarkdown()],{type: 'text/plain'});
      this.textURI = URL.createObjectURL(textBlob);
    }
  },
 mounted() {
        this.editor = new TuiEditor(Object.assign({
            el: this.$refs.editor,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: 'auto',
            minHeight: '500px'
        }, this.options))
    }
}
</script>

<style scoped>
.editor-pane{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.editor{
  margin-bottom: 20px;
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}
 .save-button{
  border: 1px solid black;
  color:black;
  margin-bottom: 40px;
  width:100px;
  padding: 5px;
  text-decoration: none;
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

</style>
