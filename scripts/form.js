let form = document.querySelector("#header_input_form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formobj = {
    addressline1: form.header_input_form_address_line_1.value,
    addressline2: form.header_input_form_address_line_2.value,
    city: form.header_input_form_address_city.value,
    state: form.header_input_form_address_state.value,
    country: form.header_input_form_address_country.value,
    zip: form.header_input_form_address_zip.value,
    img: form.header_input_form_address_image.value,
  };
  // letterheadData.push(formobj);
  localStorage.setItem("currentUserData", JSON.stringify(formobj));
  console.log(formobj);
  form.header_input_form_address_line_1.value = "";
  form.header_input_form_address_line_2.value = "";
  form.header_input_form_address_city.value = "";
  form.header_input_form_address_state.value = "";
  form.header_input_form_address_country.value = "";
  form.header_input_form_address_zip.value = "";
  window.location.href = "./index.html";
});
