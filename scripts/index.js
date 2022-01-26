window.addEventListener("load", function () {
  document.querySelector("#header_left_div>img").src = "../images/logo.jpeg";
  document.querySelector("#header_right_div_address_line1>h3").textContent =
    "Flat No - 505" + " ,";
  document.querySelector("#header_right_div_apartment>h3").textContent =
    "Gajanan Sankul Society" + " ,";
  document.querySelector("#header_right_div_city>h3").textContent =
    "Thane" + " ,";
  document.querySelector("#header_right_div_state>h3").textContent =
    "Maharashtra" + " ,";
  document.querySelector("#header_right_div_country>h3").textContent =
    "India" + " ,";
  document.querySelector("#header_right_div_zipcode>h3").textContent =
    "421302" + ".";

  document.querySelector("#download_btn").addEventListener("click", () => {
    let options = {
      margin: 0,
      filename: "letterhead.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    const letterhead = document.querySelector("#letterhead_container");
    html2pdf(letterhead, options);
  });
});
