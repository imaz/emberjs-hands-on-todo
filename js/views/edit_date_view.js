Todos.EditDateView = Ember.TextField.extend({
  type: 'date',
  didInsertElement: function(){
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-date', Todos.EditDateView);
