window.addEventListener("load", function () {
  let { addressline1, addressline2, city, state, country, zip } = JSON.parse(
    localStorage.getItem("currentUserData")
  );
  document.querySelector("#header_left_div>img").src = "../images/logo.jpeg";
  document.querySelector("#header_right_div_address_line1>h3").textContent =
    addressline1 + " ,";
  document.querySelector("#header_right_div_apartment>h3").textContent =
    addressline2 + " ,";
  document.querySelector("#header_right_div_city>h3").textContent = city + " ,";
  document.querySelector("#header_right_div_state>h3").textContent =
    state + " ,";
  document.querySelector("#header_right_div_country>h3").textContent =
    country + " ,";
  document.querySelector("#header_right_div_zipcode>h3").textContent =
    zip + ".";

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
