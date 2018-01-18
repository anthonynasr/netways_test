import Ember from 'ember';

export default Ember.Component.extend({
    onInit:function(){
        var data = JSON.stringify(this.get("data")).replace(/value/g, "id");;
        this.set("options",JSON.parse(data));
        Ember.run.schedule("afterRender",this,function() {
          this.send("setData", this.get("value"));
        });
    }.on("init"),
    didInsertElement: function() {
        var self = this;
        self.$(".combo").select2({
            placeholder: self.get("tooltip"),
            data: self.get("options"),
            allowClear: true,
            width: '100%'
        });
    },
    actions: {
        setData:function(value){
            var self=this;
            self.$(".combo").val(value).trigger("change");
        }
    }
});
