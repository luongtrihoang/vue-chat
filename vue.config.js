module.exports = {
  pages: {
    'index': {
      entry: './src/pages/index/index.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'chat': {
      entry: './src/pages/chat/chat.js',
      template: 'public/index.html',
      title: 'Chat Bot',
      chunks: [ 'chunk-vendors', 'chunk-common', 'chat' ]
    },
    'todo': {
      entry: './src/pages/todo/todo.js',
      template: 'public/index.html',
      title: 'To Do List',
      chunks: [ 'chunk-vendors', 'chunk-common', 'list' ]
    }
  }
}