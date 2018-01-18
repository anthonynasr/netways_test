import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
		var self = this;
		self.$('[data-toggle="tooltip"]').tooltip();
		$(".form").submit(function(e){
		    e.preventDefault();
		  });
	},
	actions:{
		save: function(){
			var self = this;
			if(self.$(".form input")[0].checkValidity() && self.$(".form select")[0].checkValidity()) {
				self.set("saveData", JSON.stringify(self.$("form").jsonify()));
			}
		},
		cancel:function(){
			var self = this;
			this.$("form")[0].reset();
			self.$(".combo").val("").trigger("change");
			this.set("saveData",undefined);
		}
	}
});
