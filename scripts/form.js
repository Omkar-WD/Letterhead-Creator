let fileContent;
let form = document.querySelector("#header_input_form");

// to get the acutal path for client uploaded images
window.addEventListener("load", function () {
  document.getElementById("header_input_form_address_image").onchange =
    function (event) {
      var reader = new FileReader();
      reader.readAsDataURL(event.srcElement.files[0]);
      var me = this;
      reader.onload = function () {
        fileContent = reader.result;
      };
    };
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formobj = {
    addressline1: form.header_input_form_address_line_1.value,
    addressline2: form.header_input_form_address_line_2.value,
    city: form.header_input_form_address_city.value,
    state: form.header_input_form_address_state.value,
    country: form.header_input_form_address_country.value,
    zip: form.header_input_form_address_zip.value,
    img: fileContent,
  };
  localStorage.setItem("currentUserData", JSON.stringify(formobj));
  form.header_input_form_address_line_1.value = "";
  form.header_input_form_address_line_2.value = "";
  form.header_input_form_address_city.value = "";
  form.header_input_form_address_state.value = "";
  form.header_input_form_address_country.value = "";
  form.header_input_form_address_zip.value = "";
  window.location.href = "./index.html";
});
