Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  timeLimitAt: DS.attr('string')
});
