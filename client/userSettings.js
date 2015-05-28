Accounts.ui.config({
  requestPermissions: {},
  extraSignupFields: [{
    fieldName: 'company-name',
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
  }]
});