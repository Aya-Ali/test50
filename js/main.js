var nameInput = document.getElementById("productName")
var priceInput = document.getElementById("productPrice")
var imageInput = document.getElementById("productImage")
var categoryInput = document.getElementById("productCategory")
var saleInput = document.getElementById("productSale")
var descInput = document.getElementById("productDescription")
var searchInput = document.getElementById("searchInput")

var productList = [];
if (localStorage.getItem("products") != null) {
    productList = JSON.parse(localStorage.getItem("products"))
    display()
}
function addProduct() {
    var product = {
        title: nameInput.value,
        price: Number(priceInput.value),
        imgSrc: imageInput.files[0]?.name,
        category: categoryInput.value,
        sale: saleInput.checked,
        desc: descInput.value
    }
    productList.push(product)
    localStorage.setItem("products", JSON.stringify(productList))
    display()
    clearForm()
}
function clearForm() {
    nameInput.value = ""
    priceInput.value = 0
    categoryInput.value = "tv"
    saleInput.checked = false
    descInput.value = ""
}
var current ;
function updateProduct(x) 
{
    current = x //5
    console.log(x);
    console.log(productList[x]);
    nameInput.value = productList[x].title
    priceInput.value = productList[x].price
    categoryInput.value = productList[x].category
    saleInput.checked = productList[x].sale
    descInput.value = productList[x].desc
    document.getElementById("addData").classList.add("d-none")
    document.getElementById("editData").classList.remove("d-none")
}
function edit() {
    console.log(current);
    
 productList[current].title = nameInput.value
 productList[current].price = Number(priceInput.value)
 productList[current].category = categoryInput.value
 productList[current].sale = saleInput.checked
 productList[current].desc =descInput.value
 display()
 localStorage.setItem("products", JSON.stringify(productList))
 document.getElementById("addData").classList.remove("d-none")
 document.getElementById("editData").classList.add("d-none")
 clearForm()

 
}
function deleteProduct(indx) {
    productList.splice(indx, 1)
    localStorage.setItem("products", JSON.stringify(productList))
    display()
}
function display() {
    var temp = ""
    for (var i = 0; i < productList.length; i++) {
        temp += `<div class="col-md-3">
                <div class="item text-center border border-3">
                    <img src="images/`+ productList[i].imgSrc + `" class="w-100" alt="">
               
                    <h5>index : `+ i + `</h5>
                    <h5>Name : `+ productList[i].title + `</h5>
                    <h5>Price :`+ productList[i].price + `</h5>
                    <h5>Category :`+ productList[i].category + `</h5>
                    <h5>Sale :`+ productList[i].sale + `</h5>
                    <p>Desc`+ productList[i].desc + `</p>
                    <button onclick="updateProduct(`+ i + `)" class="btn btn-outline-warning">update</button>
                    <button onclick="deleteProduct(`+ i + `)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>`
    }

    document.querySelector("#myRow").innerHTML = temp
}


function search() {

    var temp = "";
    var searchVal = searchInput.value.toLowerCase()
    for (var i = 0; i < productList.length; i++) {

        if (productList[i].title.toLowerCase().startsWith(searchVal) == true) {
            temp += `<div class="col-md-3">
            <div class="item text-center border border-3">
                <img src="images/`+ productList[i].imgSrc + `" class="w-100" alt="">
                <h5>index : `+ i + `</h5>
                <h5>Name : `+ productList[i].title + `</h5>
                <h5>Price :`+ productList[i].price + `</h5>
                <h5>Category :`+ productList[i].category + `</h5>
                <h5>Sale :`+ productList[i].sale + `</h5>
                <p>Desc`+ productList[i].desc + `</p>
                <button class="btn btn-outline-warning">update</button>
                <button onclick="deleteProduct(`+ i + `)" class="btn btn-outline-danger">delete</button>
            </div>
        </div>`
        }
    }

    document.querySelector("#myRow").innerHTML = temp
}




// var list = [
//     {title:"iphone",price:70000},
//     {title:"samsung",price:15000},
//     {title:"Oppo",price:3000},
// ]
// list[0].title = "iphone13"
// list[0].price = 80000

// console.log(list);
