Accounts.ui.config({
  requestPermissions: {},
  extraSignupFields: [{
    fieldName: 'companyName',
    fieldLabel: 'Company name',
    inputType: 'text',
    visible: true,
    validate: function(value, errorFunction) {
      if (!value) {
        errorFunction("Please enter your company name");
        return false;
      } else {
        return true;
      }
    }
  },
    {
    fieldName: 'phone',
    fieldLabel: 'Phone Number',
    inputType: 'text',
    visible: true,
    validate: function(value, errorFunction) {
      if (!value) {
        errorFunction("Please enter your phone number");
        return false;
      } else {
        return true;
      }
    }
  },

  ]
});