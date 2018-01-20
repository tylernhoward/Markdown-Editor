<template>
    <tui-editor :options="options"/>
</template>

<script>
export default {
  name: 'TextEditor',
  data () {
    return {
      options : {
            initialValue: `# Project Title
One Paragraph of project description goes here
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
What things you need to install the software and how to install them
\`\`\`
git clone REPO_URL
\`\`\`
            `,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: 'auto',
            minHeight: '500px'
      },
    }
  }
}
</script>
<style scoped>

</style>
