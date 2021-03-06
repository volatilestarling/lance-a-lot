// Router

/*
Look at app.js to see where this router comes into play.
Based on the specified route (eg '/', '/add'), the router
will render the appropriate view (eg 'AppView', 'JobEntryView')
*/

Lancealot.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$el = options.el;
  },

  routes: {
    'jobslist': 'index',
    'addjob': 'addJob',
    'addclient': 'addClient',
    'clientslist': 'showClients',
    'productivity': 'showTimes'
  },

  swapView: function(view){
    this.$el.html(view.render().el);
  },

  index: function(){
    $('#bargraph').remove();
    var jobs = new Lancealot.Jobs();
    var appView = new Lancealot.AppView({ collection: jobs });
    this.swapView(appView);

  },

  addJob: function(){
    $('#bargraph').remove();
    var clients = new Lancealot.Clients();
    this.swapView(new Lancealot.JobEntryView({collection: clients}));

  },

  addClient: function(){
    $('#bargraph').remove();
    this.swapView(new Lancealot.ClientEntryView());
  },

  showClients: function(){
    $('#bargraph').remove();
    var clients = new Lancealot.Clients();
    var clientsView = new Lancealot.ClientsListView({ collection: clients });
    this.swapView(clientsView);

  },

  showTimes: function() {
    $('#sidebar').next().empty();
    var times = new Lancealot.Times();
    var timesView = new Lancealot.TimesView({ collection: times });
    $("#container").append(timesView.el)
    // this.swapView(timesView.el);
  }
});
