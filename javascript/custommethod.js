jQuery.validator.addMethod("non_numeric", function (value, element) {
  return this.optional(element) || /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/i.test(value);
}, "Please use alphabets only.");

jQuery.validator.addMethod("mail", function (value, element) {
  return this.optional(element) || /^[a-zA-Z0-9.-]+@+tntra.io*$/i.test(value);
}, "Valid email : abc@tntra.io");

jQuery.validator.addMethod("phnregex", function (value, element) {
  return this.optional(element) || /^[6-9]\d{9}$/i.test(value);
}, "Invalid mobile number");