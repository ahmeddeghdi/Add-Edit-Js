var EmaillElement = document.getElementById("ShowEmaill");
var inputPhone = document.getElementById("phone");
var FullNameElement = document.getElementById("exampleFormControlInput1");
var AddressElement = document.getElementById("cahngAddres");
var inputCheck = document.getElementById("ChooseInput");
var InputChecked = document.getElementById("ChooseInputElement");
var locationElement = document.getElementById("cahngAddres");
var ShowChangeData = document.getElementById("Changedata");
var ShowChangedata = document.getElementById("ChangeData");
var showTotalEmergency = document.getElementById("showEmergency");
var showTotalFavorites = document.getElementById("showFavorites");
var SaveButn = document.querySelector(".SaveButn");
var UpdateButn = document.querySelector(".UpdateButn");
var SelectChoose = document.querySelector(".Select-option");
var descraption = document.getElementById("floatingTextarea");
var SearchInput = document.getElementById("FilterSearch");
var alertEmail = document.getElementById("alerEmail");
var alertPhone = document.getElementById("alerPhone");
var alertAddress = document.getElementById("alerAddress");
var alertDescraption = document.getElementById("alerDescraption");
var alertName = document.getElementById("alerName");
console.log(
  EmaillElement,
  alertDescraption,
  alertAddress,
  alertPhone,
  alertEmail,
  SearchInput,
  descraption,
  SelectChoose,
  UpdateButn,
  SaveButn,
  showTotalFavorites,
  showTotalEmergency,
);

 var ArrayCardes = [];
 if (localStorage.getItem("Cardes") == null) {
   ArrayCardes =JSON.parse(localStorage.getItem("Cardes"));
   DisplayShow();
 }
// Validates the form and saves a new contact to local storage.
function AddCard() {
    if(HandleValidEmaill() && HandleValidphone() && HandleValidadress() && HandleValidDesc() && HandleValidName()){
    var cardes = {
      tittle: EmaillElement.value,
      Phone: Number(inputPhone.value),
      FullName: FullNameElement.value,
      Address: AddressElement.value,
      Checked: inputCheck.checked,
      CheckedInput: InputChecked.checked,
      location: locationElement.value,
      choose: SelectChoose.value,
      desc: descraption.value,
      isFavorite: false,
      isEmergency: false,
    };
    DisplayShow();
    ArrayCardes.push(cardes);
    localStorage.setItem("Cardes",JSON.stringify(ArrayCardes));        
    SaveButn.classList.add("d-none");
    UpdateButn.classList.remove("d-none");
  }
}

// Renders all saved contacts in the contacts list.
function DisplayShow() {
  var temp = "";
  for (var i =0; i<ArrayCardes.length; i++) {
    temp += `<div class="d-flex">
                 <div class="width border flex-wrap d-flex">
                    <div class="card-one">
                        <div class="header-name ">
                            <h5 class="paddaing-name">${ArrayCardes[i].FullName}</h5>
                            <div class="ps-3 mtop">
                                <h5 id="name">a</h5>
                                <i class="fa-solid fa-phone phone"></i>
                                <a href="tel" class="tel text-secondary" id="phone">${ArrayCardes[i].Phone}</a>
                            </div>
                            <div class="icon-one d-flex  ">
                                <i class="fa-solid fa-envelope  envelope"></i>
                                <p class="ms-2" id="email">${ArrayCardes[i].tittle}</p>
                            </div>
                            <div class="icon-two d-flex  Margin">
                                <i class="fa-solid fa-location-dot location"></i>
                                <p class="ms-2" id="cahngelocation">${ArrayCardes[i].location}</p>
                            </div>
                            <div class="ms-2">
                                <span class="paddaing-border">${ArrayCardes[i].choose}</span>
                            </div>
                            <div class="border-card d-flex  mt-5"> 
                                 <button class="btn">
                                        <i class="fa-solid fa-phone Phone mt-1 ms-2">
                                        <a href="tel" class="" id=""></a>
                                        </i>
                                    </button>
                                <button class="btn">
                                    <i class="fa-solid fa-envelope  "></i>
                                </button>
                                </i>
                                <div class="icon-edit mt-2">
                                <button class="btn" onclick="AddFavorite(${i})">
                                    <i class="${ArrayCardes[i].isFavorite ? "fa-solid" : "fa-regular"} fa-star star-one"></i>
                                    </button>
                                    <button class="btn" onclick="AddEmargencey()">
                                        <i class="fa-solid fa-heart heart"></i>
                                    </button>
                                    <button class="btn"  data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button class="btn" onclick="Deletedata()">
                                        <i class="fa-solid fa-trash" ></i>
                                    </button>
                                </div> 
                            </div> 
                        </div>
                        
                    </div>
                </div>`
  }
  document.getElementById("ShowData").innerHTML = temp;
}

// Removes the contact at the given index and saves the updated list.
function Deletedata(x) {
    if(HandleValidEmaill() && HandleValidphone() && HandleValidadress() && HandleValidDesc() && HandleValidName()){

  ArrayCardes.splice(x, 1);
  EmaillElement.value = "";
  inputPhone.value = "";
  FullNameElement.value = "";
  AddressElement.value = "";
  locationElement.value = "";
 localStorage.setItem("Cardes",JSON.stringify(ArrayCardes));
  DisplayShow();
    }
}

var CurrentIndex = 0;
// Loads the selected contact's data into the form for editing.
function EditDataNew(index) {
    if(HandleValidEmaill() && HandleValidphone() && HandleValidadress() && HandleValidDesc() && HandleValidName()){
  
    CurrentIndex = index;
    console.log(ArrayCardes[index].tittle);
    EmaillElement.value = ArrayCardes[index].tittle;
    inputPhone.value = ArrayCardes[index].Phone;
    FullNameElement.value = ArrayCardes[index].FullName;
    AddressElement.value = ArrayCardes[index].Address;
    inputCheck.checked = ArrayCardes[index].Checked;
    InputChecked.checked = ArrayCardes[index].CheckedInput;
    locationElement.value = ArrayCardes[index].location;
    SelectChoose.value = ArrayCardes[index].choose;
    descraption.value = ArrayCardes[index].desc;
   localStorage.setItem("Cardes",JSON.stringify(ArrayCardes));
    DisplayShow();
  }
}

// Updates the selected contact and saves the changes.
function updateDataCardes() {
  ArrayCardes[CurrentIndex].tittle = EmaillElement.value;
  ArrayCardes[CurrentIndex].Phone = Number(inputPhone.value);
  ArrayCardes[CurrentIndex].FullName = FullNameElement.value;
  ArrayCardes[CurrentIndex].Address = AddressElement.value;
  ArrayCardes[CurrentIndex].Checked = inputCheck.checked;
  ArrayCardes[CurrentIndex].CheckedInput = InputChecked.checked;
  ArrayCardes[CurrentIndex].location = locationElement.value;
  ArrayCardes[CurrentIndex].choose = SelectChoose.value;
  ArrayCardes[CurrentIndex].desc = descraption.value;
  localStorage.setItem("Cardes",JSON.stringify(ArrayCardes));
  DisplayShow();
  UpdateButn.classList.add("d-none");
  SaveButn.classList.remove("d-none");
}

// Renders contacts in the favorites panel.
function AddFavorite() {
  var boxFavorite = "";
  for (var i = 0; i < ArrayCardes.length; i++) {
    boxFavorite += `<h5 class="paddaing-name" >${ArrayCardes[i].FullName}</h5>
                            <div class="ps-3 mtop">
                                <i class="fa-solid fa-phone phone"></i>
                                <a href="tel" class="tel text-secondary" id="phone">${ArrayCardes[i].Phone}</a>
                            </div>`;
  }
  document.getElementById("Changedata").innerHTML = boxFavorite;
}

// Renders contacts in the emergency panel.
function AddEmargencey() {
  var boxEmargencey = "";
  for (var i = 0; i < ArrayCardes.length; i++) {
    boxEmargencey += `<h5 class="paddaing-name" >${ArrayCardes[i].FullName}</h5>
                            <div class="ps-3 mtop">
                                <i class="fa-solid fa-phone phone"></i>
                                <a href="tel" class="tel text-secondary" id="phone">${ArrayCardes[i].Phone}</a>
                            </div>`;
  }
  document.getElementById("ChangeDataEmergency").innerHTML = boxEmargencey;
}

/**
 * 
 1-first one work is to validate email and 
 2- first two desc 
 3-phone number 
 4- name 
 5- address 
 6- location 
 7- choose option 
 8- check box 
 9- check box input
  
 */

EmaillElement.addEventListener("change",HandleValidEmaill);
// Validates the email field and updates its feedback styles.
function HandleValidEmaill() {
  var emailragex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // console.log(emailragex.test(EmaillElement.value))
  if (emailragex.test(EmaillElement.value) == true) {
    alertEmail.classList.remove("d-none");
    EmaillElement.classList.remove("is-invalid");
    EmaillElement.classList.add("is-valid");
    return true;
  } else {
    alertEmail.classList.add("d-none");
    EmaillElement.classList.add("is-invalid");
    EmaillElement.classList.remove("is-valid");
    return false;
  }
}

inputPhone.addEventListener("change",HandleValidphone );
// Validates the phone field and updates its feedback styles.
function HandleValidphone() {
  var PhoneRagex = /^01[0125][0-9]{8}$/;
  if (PhoneRagex.test(inputPhone.value) == true) {
    alertPhone.classList.remove("d-none");
    inputPhone.classList.remove("is-invalid");
    inputPhone.classList.add("is-valid");
    return true;
  } else {
    alertPhone.classList.add("d-none");
    inputPhone.classList.add("is-invalid");
    inputPhone.classList.remove("is-valid");
    return false;

  }
}
FullNameElement.addEventListener("change", HandleValidName);
// Validates the name field and updates its feedback styles.
function HandleValidName() {
  var NameRagex = /^[A-Za-z\s]{2,100}$/;
  if (NameRagex.test(FullNameElement.value) == true) {
    alertName.classList.remove("d-none");
    FullNameElement.classList.remove("is-invalid");
    FullNameElement.classList.add("is-valid");
    return true;
  } else {
    alertName.classList.add("d-none");
    FullNameElement.classList.add("is-invalid");
    FullNameElement.classList.remove("is-valid");
    return false;

  }
}

AddressElement.addEventListener("change", HandleValidadress);
// Validates the address field and updates its feedback styles.
function HandleValidadress() {
  var AddressRagex = /^[A-Za-z0-9\s,.-]{5,100}$/;
  if (AddressRagex.test(AddressElement.value) == true) {
    alertAddress.classList.remove("d-none");
    AddressElement.classList.remove("is-invalid");
    AddressElement.classList.add("is-valid");
    return true;
  } else {
    alertAddress.classList.add("d-none");
    AddressElement.classList.add("is-invalid");
    AddressElement.classList.remove("is-valid");
    return false;
  }
}
descraption.addEventListener("change", HandleValidDesc);
// Validates the description field and updates its feedback styles.
function HandleValidDesc() {
  var AddressRagex = /^[A-Za-z0-9\s.,!?()-]{10,500}$/;
  if (AddressRagex.test(descraption.value) == true) {
    alertDescraption.classList.remove("d-none");
    descraption.classList.remove("is-invalid");
    descraption.classList.add("is-valid");
    return true;
  } else {
    alertDescraption.classList.add("d-none");
    descraption.classList.add("is-invalid");
    descraption.classList.remove("is-valid");
    return false;
  }
}

// Builds the contacts list using the current name search text.
function SearchData() {
  var temp = "";
  setTimeout(() => {
    var SearchVal = SearchInput.value.toLowerCase();
    for (var i = 0; i < ArrayCardes.length; i++) {
      if (ArrayCardes[i].FullName.toLowerCase().includes(SearchVal)) {
        temp += `<div class="width border flex-wrap d-flex">
                    <div class="card-one">
                        <div class="header-name ">
                            <h5 class="paddaing-name" >${ArrayCardes[i].FullName}</h5>
                            <div class="ps-3 mtop">
                                <h5 id="name">a</h5>
                                <i class="fa-solid fa-phone phone"></i>
                                <a href="tel" class="tel text-secondary" id="phone">${ArrayCardes[i].Phone}</a>
                            </div>
                            <div class="icon-one d-flex  ">
                                <i class="fa-solid fa-envelope  envelope"></i>
                                <p class="ms-2" id="email">${ArrayCardes[i].tittle}</p>
                            </div>
                            <div class="icon-two d-flex  Margin">
                                <i class="fa-solid fa-location-dot location"></i>
                                <p class="ms-2">${ArrayCardes[i].location}</p>
                            </div>
                            <div class="ms-2">
                                <span class="paddaing-border">${ArrayCardes[i].choose}</span>

                            </div>
                            <div class="border-card d-flex  mt-5"> 
                                 <button class="btn">
                                        <i class="fa-solid fa-phone Phone mt-1 ms-2">
                                        <a href="tel" class="" id=""></a>
                                        </i>
                                    </button>
                                <button class="btn">
                                    <i class="fa-solid fa-envelope  "></i>
                                </button>
                                </i>
                                <div class="icon-edit mt-2">
                                    <button class="btn" onclick="AddFavorite(${i})">
                                        <i class="${ArrayCardes[i].isFavorite ? "fa-solid" : "fa-regular"} fa-star star-one"></i>
                                    </button>
                                    <button class="btn" onclick="AddEmargencey()    ">
                                        <i class="fa-regular fa-heart heart"></i>
                                    </button>
                                    <button class="btn"  data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button class="btn" onclick="Deletedata()">
                                        <i class="fa-solid fa-trash" ></i>
                                    </button>
                                </div> 
    
                            </div> 
                        </div>
                        
                    </div>
                </div>`;
      }
    }
  });
  document.getElementById("ShowData").innerHTML = temp;
}
