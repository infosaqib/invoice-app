const invoices = document.getElementById("invoice-coll");
const CreateBtn = document.getElementById("create-btn");
let sideBar = document.getElementById("side-container");
let overlay = document.getElementById("overlay");

//Sidebar Events

function showSidebar() {
  sideBar.classList.add("toggle");
  overlay.classList.add("toggle");
}
function hideSidebar() {
  sideBar.classList.remove("toggle");
  overlay.classList.remove("toggle");
}

//Generate invoice function
function generateInvoice() {
  let listCounter = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
  invoices.innerHTML += `  <div onclick="openInvoice()" id="invoice-list" class="flex flex-row items-center justify-between border border-gray-200 hover:border-purple-500 cursor-pointer rounded-lg my-4 py-6 px-4  bg-white gap-7">
      <div class="flex flex-col lg:flex-row gap-3 lg:gap-12 items-center justify-center"><p class="text-black text-sm lg:text-base mb-2"><b class="text-blue-300">#</b>${listCounter}</p>
        <p class="text-gray-400 text-sm lg:text-sm">Date</p>
        <p class="text-gray-400 text-sm lg:text-sm">Name</p></div> 
   <div class="flex flex-col lg:flex-row gap-3 lg:gap-12 items-center justify-center">
        <p class="text-gray-400 text-sm lg:text-sm">Item</p>
        <p class="text-gray-400 text-sm lg:text-sm">Price</p>
        <svg class="svgicon" width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
        </div>
    </div>
`;
document.myForm.reset();
}

//Setting Error
function setError(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("error")[0].innerHTML = error;
}

//Prevent form to reload the window on submission
document.myForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

//Form Validation
function formValidate() {
  // Name Validation
  let name = document.myForm.name.value;
  if (name.length < 5) {
    setError("name", "Name is too short");

    return false;
  }

  //Item selection validation
  let item = document.myForm.items.value;
  if (item == 0) {
    setError("items", "select an item here");
    return false;
  }

  //Item weight validation
  let itemWeight = document.myForm.weight.value;
  if (itemWeight <= 0) {
    setError("weight", "weight can't be zero");
    return false;
  }
  generateInvoice();
  hideSidebar();
}

//invoice view
let invoiceView = document.getElementById("invoice-view");
function openInvoice() {
  invoiceView.classList.add('toggle');
  overlay.classList.add('toggle')

}
function closeInvoice() {
  invoiceView.classList.remove('toggle');
  overlay.classList.remove('toggle')

}

//Download invoice as Jpg