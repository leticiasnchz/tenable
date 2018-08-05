import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

var app = new Vue({
  el: '#app',

  data: {
    hosts: '',
    hostdataitems: [],
    paginate: ['hostitems']
  },

  mounted: function() {
    this.getURLParams();

    $.ajax({
      url: '/download/request.json',
      type: 'get',
      dataType: 'json',
      async: true,
      success: function(data) {
        if (!data) {
          this.error = true;
          return; // no results
        } else {
          var hostdata = [];
          if (data.configurations && !$.isEmptyObject(data.configurations))
          hostdata = $.isArray(data.configurations) ? data.configurations : [data.configurations];

          this.hostdatacomputed(hostdata);
        }
      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });
  },

  methods: {
    getURLParams: function(){
      // host
      if (this.getQueryVariable("host")) {
        let hosts = this.getQueryVariable("host");

        this.hosts = hosts;
      }
    },
    getQueryVariable: function(variable){
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){ return pair[1]; }
      }
      return(false);
    },

    hostdatacomputed(hostdata) {
      this.hostdataitems = hostdata.splice(0, this.hosts);
    },
  }
})