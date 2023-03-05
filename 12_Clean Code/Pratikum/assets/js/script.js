

function addUser() {
    // mengambil nilai yang diisi oleh pengguna
    // event.preventDefault()
    const prouductName = document.getElementById("pName");
    const prouductCategory = document.getElementById("pCategory");
    const imageCategory = document.getElementById("imageCategory").files[0].name;
    const productFreshness = document.getElementsByName("productfreshness");
    const additionalDescription = document.getElementById("additionaldescription");
    const prouductPrice = document.getElementById("pprice");

    let i = 0
    let v = ""
    while (i < productFreshness.length) {
    if (productFreshness[i].checked) {
      formValid = productFreshness[i].value
      v = formValid
    }
    i++
    }

    console.log(prouductName);
    console.log(prouductCategory);
    console.log(imageCategory);
    console.log(additionalDescription);
    console.log(prouductPrice);

    const table = document.getElementById("table");
    const newRow = document.createElement("tr");
    const newCellProductName = document.createElement("td");
    const newCellProuductCategory = document.createElement("td");
    const newCellImageCategory = document.createElement("td");
    const newCellProductFreshness = document.createElement("td");
    const newCellAdditionalDescription= document.createElement("td");
    const newCellProuductPrice = document.createElement("td");
    

    newCellProductName.innerHTML = prouductName.value;
    newCellProuductCategory.innerHTML = prouductCategory.value;
    newCellImageCategory.innerHTML = imageCategory.value;
    newCellProductFreshness.innerHTML = v;
    newCellAdditionalDescription.innerHTML = additionalDescription.value;
    newCellProuductPrice.innerHTML = prouductPrice.value;
    newRow.append(
        newCellProductName,
        newCellProuductCategory,
        newCellImageCategory,
        newCellProductFreshness,
        newCellAdditionalDescription,
        newCellProuductPrice
    );

    if(prouductName.value === ""){
      alert("minimal 6 karakter");
      return;
    }

    if(prouductCategory.value === ""){
      alert("Harus di klik");
      return;
    }


    table.appendChild(newRow);

    prouductName.value = "";
    prouductCategory.value = "";
    imageCategory.value = "";
    productFreshness.value = "";
    additionalDescription.value = "";
    prouductPrice.value = "";


}

