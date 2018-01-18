(function($) {
    $.fn.jsonify = function(options) {
        var settings = $.extend({
            stringify : false
        }, options);
        var json = {};
        $.each(this.serializeArray(), function() {
            if (json[this.name]) {
                if (!json[this.name].push)
                    json[this.name] = [json[this.name]];
                json[this.name].push(this.value || '');
            } else
                json[this.name] = this.value || '';
        });
        var self = this;
        $(this.find("input[type=checkbox][name]")).each(function(index, checkbox) {
            if($(checkbox).closest("form")[0] === $(self[0])[0]){
                json[$(checkbox).attr("name")] = $(checkbox).prop("checked") ? 1 : 0;
            }
        });
        $(this.find("input[type=number][name]")).each(function(index, number) {
            if($(number).closest("form")[0] === $(self[0])[0]){
                json[$(number).attr("name")] = $(number).val() === "" ? null : parseFloat($(number).val());
            }
        });
        $(this.find(".k-multi-select")).each(function(index, multiselect) {
            if($(multiselect).closest("form")[0] === $(self[0])[0]){
                if($(multiselect).attr("output-type") === 'string'){
                    if(typeof json[$(multiselect).attr("name")] === 'object'){
                        json[$(multiselect).attr("name")] = json[$(multiselect).attr("name")].join();
                    }
                    else if(!json[$(multiselect).attr("name")]){
                        json[$(multiselect).attr("name")] = "";
                    }
                }
                else{
                    if(typeof json[$(multiselect).attr("name")] === 'string'){
                        json[$(multiselect).attr("name")] = [json[$(multiselect).attr("name")]];
                    }
                    else if(!json[$(multiselect).attr("name")]){
                        json[$(multiselect).attr("name")] = [];
                    }
                }
            }
        });
        $(this.find(".k-tags-input")).each(function(index, tagsInput) {
            if($(tagsInput).closest("form")[0] === $(self[0])[0]){
                if($(tagsInput).attr("output-type") !== 'string'){
                    json[$(tagsInput).attr("name")] = json[$(tagsInput).attr("name")].split(",");
                }
            }
        });
        if(settings.stringify)
            return JSON.stringify(json);
        else
            return json;
    };

    $.fn.dejsonify = function(data) {
        if (typeof data === 'string')
            data = JSON.parse(data);
        
        $.each(this.find('*[name]'), function() {
            $(this).val(data[$(this).attr('name')]);
        });
    };
})(jQuery);