let phones = [
  { name: "iphone11", price: "100", qty: "1" },
  { name: "iphone12", price: "200", qty: "2" },
  { name: "iphone13", price: "300", qty: "3" },
];
let tbody = document.querySelector("tbody");

let showPhones = () => {
  tbody.innerHTML = "";
  phones.forEach((el, index) => {
    tbody.innerHTML += `
      <tr class="item-row">
        <td><span>${index + 1}</span></td>

        <td>
          <span class="name-text">${el.name}</span>
          <input class="name-input d-none bg-dark text-white border-1 border-light" value="${
            el.name
          }">
        </td>

        <td>
          <span class="price-text">${el.price}</span>
          <input class="price-input d-none bg-dark text-white border-1 border-light" value="${
            el.price
          }">
        </td>

        <td>
          <span class="qty-text">${el.qty}</span>
          <input class="qty-input d-none bg-dark text-white border-1 border-light" value="${
            el.qty
          }">
        </td>

        <td>
          <span>${el.price * el.qty}</span>
        </td>

        <td>
          <button class="btn btn-danger" onclick="del(${index})">delete</button>
          <button class="btn btn-warning edit" onclick="edit(${index})">edit</button>
          <button class="btn btn-success d-none save" onclick="save(${index})">save</button>
        </td>
      </tr>
    `;
  });
};

showPhones();
let nameI = document.querySelector("#nameI");
let priceI = document.querySelector("#priceI");
let qtyI = document.querySelector("#qtyI");
let addPhone = () => {
  let newPhone = {
    name: nameI.value,
    price: priceI.value,
    qty: qtyI.value,
  };
  phones.push(newPhone);
  showPhones();
  nameI.value = "";
  priceI.value = "";
  qtyI.value = "";
};

// let del = (index) => {

//   phones.splice(index, 1);
//   showPhones();
// };

let del = (index) => {
  swal({
    title: "Are you sure?",
    text: "This phone will be deleted!",
    icon: "warning",
    buttons: ["Cancel", "Yes, delete"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      phones.splice(index, 1);
      showPhones();
    }
  });
};


let update = document.querySelectorAll(".update");

let edit = (index) => {
  let row = document.querySelectorAll(".item-row")[index];

  row.querySelector(".name-text").classList.add("d-none");
  row.querySelector(".price-text").classList.add("d-none");
  row.querySelector(".qty-text").classList.add("d-none");
  row.querySelector(".edit").classList.add("d-none");

  row.querySelector(".name-input").classList.remove("d-none");
  row.querySelector(".price-input").classList.remove("d-none");
  row.querySelector(".qty-input").classList.remove("d-none");
  row.querySelector(".save").classList.remove("d-none");
};



let save = (index) => {
  let row = document.querySelectorAll(".item-row")[index];

  let newName = row.querySelector(".name-input");
  let newPrice = row.querySelector(".price-input");
  let newQty = row.querySelector(".qty-input");

  phones[index].name = newName.value;
  phones[index].price = newPrice.value;
  phones[index].qty = newQty.value;
  showPhones();
};

let form =document.querySelector(".formm");
let formStatus=false;
let addBtn=document.querySelector(".addBtn")
let closeBtn=document.querySelector(".closeBtn")
let openForm=()=>{
    if (formStatus==false){
        form.classList.remove("d-none");
        formStatus=true;
        addBtn.classList.add("d-none")
        closeBtn.classList.remove("d-none")
    }else{
        
        addBtn.classList.remove("d-none")
        closeBtn.classList.add("d-none")
        form.classList.add("d-none");
        formStatus=false;

    }
}