Todos.TodosTrainingController = Todos.TodosController.extend({
  message: function(key, value){
    if (value) {
      return [this.get('remaining'), this.get('inflection'), value].join(' ');
    }
  }.property('message')
});
