import Ember from 'ember';

export default Ember.Route.extend({
     model() {
        var obj = {
        "properties": [
            {
      "id": "title",
      "label": "Title",
      "tooltip": "Title",
      "type": "MultiChoice",
      "viewMode": "edit",
      "required": true,
      "choices": [
        {
          "text": "Mr",
          "value": "Mr"
        },
        {
          "text": "Mrs",
          "value": "Mrs"
        },
        {
          "text": "Miss",
          "value": "Miss"
        }
      ],
      "value": null
    },
    {
      "id": "firstName",
      "label": "First Name",
      "tooltip": "First Name",
      "type": "Text",
      "length": 128,
      "required": true,
      "viewMode": "edit",
      "value": null
    },
    {
      "id": "lastName",
      "label": "Last Name",
      "tooltip": "Last Name",
      "type": "Text",
      "length": 128,
      "required": true,
      "viewMode": "edit",
      "value": null
    },
    {
      "id": "age",
      "label": "Age",
      "tooltip": "Age",
      "type": "integer",
      "minValue": 18,
      "maxValue": 150,
      "viewMode": "edit",
      "required": false,
      "value": null
    }
  ],
  "actions": [
    {
      "id": "save",
      "label": "Save"
    },
    {
      "id": "cancel",
      "label": "Cancel"
    }
  ]
};
        return obj;
    }
});
