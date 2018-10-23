var app = new Vue({
  el: "#app1",
  data: {
    message: "hello world"
  }
});
var app1 = new Vue({
  el: "#app2",
  data: {
    message: "hello world"
  }
});

var app3 = new Vue({
  el: "#app3",
  data: {
    seen: false
  }
});

var app4 = new Vue({
  el: "#app4",
  data: {
    todos: [{
      text: "学习JavaScript"
    }, {
      text: "学习Vue"
    }, {
      text: "学习JAVA"
    }]
  }
});

var app5 = new Vue({
  el: "#app5",
  data: {
    message: "就发生了加夫里什加夫里什肌肤"
  },
  methods: {
    revertMessage: function () {
      this.message = this.message.split("").reverse().join("");
    }
  }
});

var app6 = new Vue({
  el: "#app6",
  data: {
    message: "双向绑定测试"
  },
  methods: {
    revertMessage: function () {
      this.message = this.message.split("").reverse().join("");
    }
  }
});


Vue.component('todo-item', {
  props: ['todo1'],
  template: '<li>{{ todo1.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [{
        id: 0,
        text: '蔬菜'
      },
      {
        id: 1,
        text: '奶酪'
      },
      {
        id: 2,
        text: '随便其它什么人吃的东西'
      }
    ]
  }
})