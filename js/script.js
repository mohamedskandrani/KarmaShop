//fonction pour enregistrer/ajouter un client
function signup() {

    //récupération des données
    var firstName = getValue("firstName");

    // console.log('voici la valeur de firstName',firstName);
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var tel = document.getElementById("tel").value;

    //validation 

    //FN at least 3 carac
    var isFNValid = checkLength(firstName, 3);
    // if (isFNValid == false) {
    //     document.getElementById("firstNameError").innerHTML = "FN should have at least 3 carac";
    //     document.getElementById("firstNameError").style.color = "red";
    // }
    // else {
    //     document.getElementById("firstNameError").innerHTML = ""
    // }
    checkCondition(isFNValid, "firstNameError", "FN should have at least 3 carac")
    //LN at least 4 carac
    var isLNValid = checkLength(lastName, 4);
    if (isLNValid == false) {
        document.getElementById("lastNameError").innerHTML = "LN should have at least 4 carac"
        document.getElementById("lastNameError").style.color = "red"
    } else {
        document.getElementById("lastNameError").innerHTML = ""
    }
    //uniqueness of email
    var usersTab = getFromLS("users");
    var isEmailValid = false;
    if (usersTab.length == 0) {
        isEmailValid = true;
    } else {
        for (let i = 0; i < usersTab.length; i++) {
            if (usersTab[i].email == email) {
                document.getElementById('emailError').innerHTML = "this email already exists";
                document.getElementById('emailError').style.color = "red";
                break;
            }
            else {
                document.getElementById('emailError').innerHTML = "";
                isEmailValid = true;
            }
        }
    }


    //pwd at least 5 carac
    var isPwdValid = checkLength(password, 5);
    if (isPwdValid == false) {
        document.getElementById("pwdError").innerHTML = "Pwd should have at least 5 carac"
        document.getElementById("pwdError").style.color = "red"
    } else {
        document.getElementById("pwdError").innerHTML = ""
    }
    //confirmPwd should be the same at pwd
    var isConfirmPwdValid = checkPwd(password, confirmPassword);
    if (isConfirmPwdValid == false) {
        document.getElementById("confirmPwdError").innerHTML = "Please check pwd"
        document.getElementById("confirmPwdError").style.color = "red"
    } else {
        document.getElementById("confirmPwdError").innerHTML = ""
    }

    //tel should be = 8
    var isTelValid = checkTel(tel, 8);
    if (isTelValid == false) {
        document.getElementById("telError").innerHTML = "tel should have 8 carac"
        document.getElementById("telError").style.color = "red"
    } else {
        document.getElementById("telError").innerHTML = ""
    }
    if (isFNValid && isLNValid && isEmailValid && isPwdValid && isConfirmPwdValid && isTelValid) {
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");

        //création de l'objet
        var user = {
            id: generateID(usersTab) + 1,
            fN: firstName,
            lN: lastName,
            email: email,
            pwd: password,
            confirmPwd: confirmPassword,
            tel: tel,
            role: "client"

        }
    }
        // console.log("here is my user object", user)
        //save into LS
        // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        usersTab.push(user);
        // localStorage.setItem("users", JSON.stringify(usersTab));
        setToLS("users", usersTab);
        location.replace("login.html")
    
}
//enregistrer un store
function signupStore() {
    //récupération des données
    var firstName = getValue("firstNameStore");

    // console.log('voici la valeur de firstName',firstName);
    var lastName = document.getElementById("lastNameStore").value;
    var email = document.getElementById("emailStore").value;
    var password = document.getElementById("passwordStore").value;
    var tel = document.getElementById("telStore").value;
    var storeName = document.getElementById("storeName").value;
    var address = document.getElementById("address").value;

    //validation 

    //FN at least 3 carac
    var isFNValid = checkLength(firstName, 3);
    // if (isFNValid == false) {
    //     document.getElementById("firstNameError").innerHTML = "FN should have at least 3 carac";
    //     document.getElementById("firstNameError").style.color = "red";
    // }
    // else {
    //     document.getElementById("firstNameError").innerHTML = ""
    // }
    checkCondition(isFNValid, "firstNameStoreError", "FN should have at least 3 carac")
    //LN at least 4 carac
    var isLNValid = checkLength(lastName, 4);
    if (isLNValid == false) {
        document.getElementById("lastNameStoreError").innerHTML = "LN should have at least 4 carac"
        document.getElementById("lastNameStoreError").style.color = "red"
    } else {
        document.getElementById("lastNameStoreError").innerHTML = ""
    }
    //uniqueness of email
    var usersTab = getFromLS("users");
    var isEmailValid = false;
    if (usersTab.length == 0) {
        isEmailValid = true;
    } else {
        for (let i = 0; i < usersTab.length; i++) {
            if (usersTab[i].email == email) {
                document.getElementById('emailStoreError').innerHTML = "this email already exists";
                document.getElementById('emailStoreError').style.color = "red";
                break;
            }
            else {
                document.getElementById('emailStoreError').innerHTML = "";
                isEmailValid = true;
            }
        }
    }


    //pwd at least 5 carac
    var isPwdValid = checkLength(password, 5);
    if (isPwdValid == false) {
        document.getElementById("pwdStoreError").innerHTML = "Pwd should have at least 5 carac"
        document.getElementById("pwdStoreError").style.color = "red"
    } else {
        document.getElementById("pwdStoreError").innerHTML = ""
    }


    //tel should be = 8
    var isTelValid = checkTel(tel, 8);
    if (isTelValid == false) {
        document.getElementById("telStoreError").innerHTML = "tel should have 8 carac"
        document.getElementById("telStoreError").style.color = "red"
    } else {
        document.getElementById("telStoreError").innerHTML = ""
    }
    if (isFNValid && isLNValid && isEmailValid && isPwdValid && isTelValid) {
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");

        //création de l'objet
        var user = {
            id: generateID(usersTab) + 1,
            fN: firstName,
            lN: lastName,
            email: email,
            pwd: password,
            storeName: storeName,
            address: address,
            tel: tel,
            role: "store",
            status: "Not validated"

        }
        // console.log("here is my user object", user)
        //save into LS
        // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        usersTab.push(user);
        // localStorage.setItem("users", JSON.stringify(usersTab));
        setToLS("users", usersTab);
        location.replace("login.html")
    }
}
//enregistrer un admin
function signupAdmin() {
    //récupération des données
    var firstName = getValue("firstNameAdmin");

    // console.log('voici la valeur de firstName',firstName);
    var lastName = document.getElementById("lastNameAdmin").value;
    var email = document.getElementById("emailAdmin").value;
    var password = document.getElementById("passwordAdmin").value;
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");

    //création de l'objet
    var user = {
        id: generateID(usersTab) + 1,
        fN: firstName,
        lN: lastName,
        email: email,
        pwd: password,

        role: "admin"

    }
    // console.log("here is my user object", user)
    //save into LS
    // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    usersTab.push(user);
    // localStorage.setItem("users", JSON.stringify(usersTab));
    setToLS("users", usersTab);
    location.replace("login.html")
}

function setToLS(key, T) {
    localStorage.setItem(key, JSON.stringify(T));
}

function getValue(id) {
    return document.getElementById(id).value;
}
function getFromLS(key) {
    return JSON.parse(localStorage.getItem(key) || "[]")
}

function checkCondition(a, id, msg) {
    if (a == false) {
        document.getElementById(id).innerHTML = msg;
        document.getElementById(id).style.color = "red";
    }
    else {
        document.getElementById(id).innerHTML = ""
    }
}

//fonction pour générer auto l'ID : chercher l'id max
function generateID(T) {
    if (T.length == 0) {
        max = 0;
    } else {
        var max = T[0].id;
        for (let i = 0; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
            }

        }

    }
    return max;
}

//comparer la longueur d'une chaine % à une valeur
function checkLength(ch, x) {

    // if (ch.length<x) {
    //    return false;
    // } else {
    //    return true;
    // }

    return (ch.length >= x);

    //if (ch.length>=x){
    //     return true;
    //     else {
    //         return false;
    //     }
    // }
}
//comparer l'égalité de 2 chaines
function checkPwd(ch1, ch2) {
    return (ch1 == ch2);
}
//compparer l'égalité de la longueur d'une chaine % à une valeur
function checkTel(ch, x) {
    return ch.length == x;
}

//fct pour ajouter un produit dans LS
function addProduct() {
    //récupération des données
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var stock = document.getElementById('stock').value;
    var category = document.getElementById('category').value;
    var connectedUserID = localStorage.getItem("connectedUserID");
    //validation
    var isNameValid = checkLength(name, 2);
    if (isNameValid == false) {
        document.getElementById("nameError").innerHTML = "name should have at least 2 carac"
        document.getElementById("nameError").style.color = "red"
    } else {
        document.getElementById("nameError").innerHTML = ""
    }
    var isPriceValid = checkNumber(price, 0);
    if (isPriceValid == false) {
        document.getElementById("priceError").innerHTML = "Price should be >0"
        document.getElementById("priceError").style.color = "red"
    } else {
        document.getElementById("priceError").innerHTML = ""
    }
    var isStockValid = checkNumber(stock, 20);
    if (isStockValid == false) {
        document.getElementById("stockError").innerHTML = "Stock should be >20"
        document.getElementById("stockError").style.color = "red"
    } else {
        document.getElementById("stockError").innerHTML = ""
    }
    if (isNameValid && isPriceValid && isStockValid) {
        var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
        //création de l'objet
        var product = {
            id: generateID(productsTab) + 1,
            prName: name,
            prPrice: price,
            prStock: stock,
            prCategory: category,
            storeId: connectedUserID
        }

        //save into LS
        // var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
        productsTab.push(product);
        localStorage.setItem("products", JSON.stringify(productsTab));
    }


}

function checkNumber(n1, n2) {
    return Number(n1) > n2;
}

//fonction pour se connecter 
function login() {
    //récupération des données
    var email = document.getElementById("emailValue").value;
    var pwd = document.getElementById("pwdValue").value;

    //récupérer tous les users enregistrés dans LS
    var usersTab = JSON.parse(localStorage.getItem('users') || '[]');
    var foundUser;
    //vérifier
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email == email && usersTab[i].pwd == pwd) {
            //connected
            foundUser = usersTab[i];
            break;

        }
    }
    if (foundUser) {
        if (foundUser.role == "client") {
            localStorage.setItem("connectedUserID", foundUser.id);
            location.replace("products.html")
        }
        else if (foundUser.role == "admin") {
            localStorage.setItem("connectedUserID", foundUser.id);
            location.replace("admin.html")
        }
        else {
            if (foundUser.status == "Not validated") {
                document.getElementById('loginError').innerHTML = "account not yet validated"
            } else {
                localStorage.setItem("connectedUserID", foundUser.id);
                location.replace("store.html")
            }
        }
    }
    else {
        document.getElementById('loginError').innerHTML = "please check email/pwd";
        document.getElementById('loginError').style.color = "red";
    }
}



//fct pour afficher dynamiquement les produits enregistrés dans LS
function displayProducts() {
    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    var content = ``;
    for (let i = 0; i < productsTab.length; i++) {

        content = content + `<div class="col-lg-3 col-md-6" >
     <div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt="">
							<div class="product-details">
								<h6>${productsTab[i].prName}</h6>
								<div class="price">
									<h6>${productsTab[i].prPrice} DT</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								
							</div>
                            <button class="btn primary-btn" onclick="goToDisplay(${productsTab[i].id})">Display</button>
						</div>
                        </div>
                        `

    }
    document.getElementById("productsDiv").innerHTML = content;
}
//fonction pour ajouter l'id du prdt sélectionné au LS et rediriger vers une autre page
function goToDisplay(id) {

    localStorage.setItem("displayedProductId", id);
    location.replace("productDetails.html");
}
//afficher dyn les détails du prdt sélectionné
function displayProductDetails() {
    var displayedProductId = localStorage.getItem("displayedProductId");
    var foundProduct = searchObjByIdAndKey(displayedProductId, "products");
    // console.log("foundProduct", foundProduct);
    document.getElementById("productName").innerHTML = foundProduct.prName;
    document.getElementById("productPrice").innerHTML = foundProduct.prPrice;
    if (foundProduct.prStock > 0) {
        document.getElementById("productStock").innerHTML = "In stock";
        document.getElementById("productStock").style.color = "green";
    } else {
        document.getElementById("productStock").innerHTML = "Out of stock";
        document.getElementById("productStock").style.color = "red";
    }

    document.getElementById("productCategory").innerHTML = foundProduct.prCategory;
}

function addCategory() {
    //récup des données
    var categoryName = document.getElementById("categoryName").value;
    //validation
    var isNameValid = maxLength(categoryName, 5);
    if (isNameValid == false) {
        document.getElementById("categoryError").innerHTML = "max 5"
    } else {
        document.getElementById("categoryError").innerHTML = "";
    }
    //création de l'obj
    if (isNameValid) {
        var categoriesTab = JSON.parse(localStorage.getItem("categories") || "[]")
        var obj = {
            id: generateID(categoriesTab) + 1,
            category: categoryName
        };
        //save into LS
        categoriesTab.push(obj);
        localStorage.setItem("categories", JSON.stringify(categoriesTab));
        location.replace("addProduct.html");
    }
}

function maxLength(ch, n) {
    return (ch.length <= n);
}
//fonction qui cherche un objet par son id 
function searchObjByIdAndKey(id, key) {
    var T = getFromLS(key);
    var obj;
    for (let i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            obj = T[i];
            break;
        }
    }
    return obj;
}

//fonction pour ajouter une commande au panier
function addToBasket() {

    var connectedUserID = localStorage.getItem("connectedUserID");
    var displayedProductId = localStorage.getItem("displayedProductId");
    // var productsTab = getFromLS("products");
    // var product = {};
    // for (let i = 0; i < productsTab.length; i++) {
    //     if (productsTab[i].id == displayedProductId) {
    //         product = productsTab[i];

    //         break;
    //     }

    // }
    var product = searchObjByIdAndKey(displayedProductId, "products");
    var qty = document.getElementById("qty").value;
    if (Number(qty) > 0 && Number(qty) <= product.prStock) {
        var ordersTab = JSON.parse(localStorage.getItem("orders") || "[]")
        var order = {
            id: generateID(ordersTab) + 1,
            userId: connectedUserID,
            productId: displayedProductId,
            qty: qty
        }
        ordersTab.push(order);
        localStorage.setItem("orders", JSON.stringify(ordersTab));
        //update stock
        updateStock(displayedProductId, qty);
        // var productsTab = getFromLS("products");
        // for (let i = 0; i < productsTab.length; i++) {
        //     if (productsTab[i].id == displayedProductId) {
        //         productsTab[i].prStock = Number(productsTab[i].prStock) - Number(qty);
        //         break;
        //     }

        // }
        // localStorage.setItem("products", JSON.stringify(productsTab));
        location.replace("basket.html");
    }
    else {
        document.getElementById('qtyError').innerHTML = "qty should be >0 or stock unavailable";
        document.getElementById('qtyError').style.color = "red";
    }

}
//soustraire la qté commandée du stock du produit sélectionné
function updateStock(id, qte) {
    var productsTab = getFromLS("products");
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].id == id) {
            productsTab[i].prStock = Number(productsTab[i].prStock) - Number(qte);
            break;
        }

    }
    localStorage.setItem("products", JSON.stringify(productsTab));
}


//afficher dyn toutes les commandes dans LS
function displayOrders() {
    var ordersTab = getFromLS("orders");
    var content = '';
    var s = 0;
    var totalPrice;
    for (let i = 0; i < ordersTab.length; i++) {
        totalPrice = ordersTab[i].qty * searchObjByIdAndKey(ordersTab[i].productId, "products").prPrice;
        s = s + totalPrice;
        content = content + `
        <tr>
        <td>
           ${ordersTab[i].id}
        </td>
        <td>
            <h5>  ${ordersTab[i].productId}</h5>
        </td>
        <td>
        <h5> ${searchObjByIdAndKey(ordersTab[i].productId, "products").prName}</h5>
    </td>

        <td>
        ${ordersTab[i].userId}
        </td>
        <td>
        ${searchObjByIdAndKey(ordersTab[i].userId, "users").fN}  
        ${searchObjByIdAndKey(ordersTab[i].userId, "users").lN}
        </td>
       
      
        <td>
        ${ordersTab[i].qty}
        </td>
        <td>
        ${ordersTab[i].qty * searchObjByIdAndKey(ordersTab[i].productId, "products").prPrice}
        </td>
        <td>
       <button class="btn btn-danger" onclick="deleteMyOrder(${ordersTab[i].id})" >Delete</button>
        </td>
    </tr>

        `

    }
    // console.log('somme', s);
    content = content + `total Sum: ${s}`;
    document.getElementById("ordersAdminDiv").innerHTML = content;
}

function deleteOrder(pos) {
    var ordersTab = getFromLS("orders");
    ordersTab.splice(pos, 1);
    setToLS("orders", ordersTab);
    location.reload();
}

//afficher dyn les commandes dans LS de l'utilisateur connecté (mon panier)
function displayMyOrders() {
    var connectedUserID = localStorage.getItem("connectedUserID");
    var ordersTab = getFromLS("orders");
    var content = '';
    var s = 0;
    var totalPrice;
    for (let i = 0; i < ordersTab.length; i++) {
        if (ordersTab[i].userId == connectedUserID) {
            totalPrice = ordersTab[i].qty * searchObjByIdAndKey(ordersTab[i].productId, "products").prPrice;
            s = s + totalPrice;
            content = content + `
            <tr>
        
       
            <td>
            <h5> ${searchObjByIdAndKey(ordersTab[i].productId, "products").prName}</h5>
        </td>
        <td>
        <h5> ${searchObjByIdAndKey(ordersTab[i].productId, "products").prPrice}</h5>
    </td>
   
    <td>
    <h5> ${searchObjByIdAndKey(ordersTab[i].productId, "products").prCategory}</h5>
    </td>
          
           
            <td>
            ${ordersTab[i].qty}
            </td>
            <td>
            ${ordersTab[i].qty * searchObjByIdAndKey(ordersTab[i].productId, "products").prPrice}
            </td>
            <td>
           <button class="btn btn-danger" onclick="deleteMyOrder(  ${ordersTab[i].id})" >Delete</button>
            </td>
        </tr>
    
            `
        }


    }
    // console.log('somme', s);
    content = content + `total Sum: ${s}`;
    document.getElementById("ordersDiv").innerHTML = content;
}
//supprimer une commande avec l'id
function deleteMyOrder(id) {
    var ordersTab = getFromLS("orders");
    var pos = searchPosByIdAndKey(id, "orders");
    updateStockAfterDelete(id);
    ordersTab.splice(pos, 1);
    setToLS("orders", ordersTab);
    location.reload();
}
//mise à jour du stock du produit après annulation de la commande
function updateStockAfterDelete(id) {
    var order = searchObjByIdAndKey(id, "orders");
    // console.log('order', order);
    var productsTab = getFromLS("products");
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].id == order.productId) {
            productsTab[i].prStock = Number(productsTab[i].prStock) + Number(order.qty);
            break;
        }
    }
    setToLS("products", productsTab);
}
//chercher la position d'un obj dans un tab avec son id
function searchPosByIdAndKey(id, key) {
    var T = getFromLS(key);
    var pos;
    for (let i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            pos = i;
            break;
        }
    }
    return pos;
}

//générer un header dynamique
function generateHeader() {
    var connectedUserID = localStorage.getItem("connectedUserID");
    var connectedUser = searchObjByIdAndKey(connectedUserID, "users");
    var header = "";
    //connecté
    if (connectedUserID) {
        //client
        if (connectedUser.role == "client") {
            header = `<div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light main_box">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
                            <li class="nav-item"><a class="nav-link" href="basket.html">Basket</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            <li class="nav-item"><a class="nav-link" href="profile.html">Hello ${connectedUser.fN} ${connectedUser.lN}</a></li>
                            <li class="nav-item"><a class="nav-link" href="search.html">Search</a></li>
                            <li class="nav-item"><a class="nav-link" href="index.html">LogOut</a></li>
                        
                        </ul>
                        
                    </div>
                </div>
            </nav>
            </div>`
        }
        //store
        else if (connectedUser.role == "store") {
            header = `<div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light main_box">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="addProduct.html">Add Product</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            <li class="nav-item"><a class="nav-link" href="profile.html">Hello ${connectedUser.fN} ${connectedUser.lN}</a></li>
                            <li class="nav-item"><a class="nav-link" href="store.html">Dashboard</a></li>
                            <li class="nav-item"><a class="nav-link" href="index.html">LogOut</a></li>
                        
                        </ul>
                        
                    </div>
                </div>
            </nav>
            </div>`
        }
        else {
            //admin
            header = `<div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light main_box">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                           
                            <li class="nav-item"><a class="nav-link" href="profile.html">Hello ${connectedUser.fN} ${connectedUser.lN}</a></li>
                            <li class="nav-item"><a class="nav-link" href="admin.html">Dashboard</a></li>
                            <li class="nav-item"><a class="nav-link" href="index.html">LogOut</a></li>
                        
                        </ul>
                        
                    </div>
                </div>
            </nav>
            </div>`
        }
    }
    //non connecté
    else {
        header = `<div class="main_menu">
<nav class="navbar navbar-expand-lg navbar-light main_box">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
              >
                <li class="nav-item"><a class="nav-link" href="search.html">Search</a></li>
                <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
            
                <li class="nav-item"><a class="nav-link" href="signup.html">Signup</a></li>
            </ul>
            
        </div>
    </div>
</nav>
</div>`
    }
    document.getElementById("headerDiv").innerHTML = header;
}
//afficher au store connecté ses produits
function displayStoreProducts() {
    var productsTab = getFromLS("products");
    var connectedUserID = localStorage.getItem("connectedUserID");
    var content = '';

    //myProducts
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].storeId == connectedUserID) {
            content = content + `
        <tr>   
        <td>
        <h5>${productsTab[i].id}</h5>
        </td>
        <td>
        <h5> ${productsTab[i].prName}</h5>
        </td>
        <td>
        <h5>${productsTab[i].prPrice}</h5>
        </td>     
        <td>
        ${productsTab[i].prStock}
        </td>
        <td>
        ${productsTab[i].prCategory}
        </td>
      
    </tr>

        `
        }
    }
    document.getElementById("storeProductsDiv").innerHTML = content;
}

//afficher au store les commandes sur ses produits
function displayStoreOrders() {
    var productsTab = getFromLS("products");
    var connectedUserID = localStorage.getItem("connectedUserID");
    var myProducts = [];
    //myProducts
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].storeId == connectedUserID) {
            myProducts.push(productsTab[i]);
        }
    }

    //chercher myOrders
    var ordersTab = getFromLS("orders");
    var content = "";
    for (let i = 0; i < ordersTab.length; i++) {
        for (let j = 0; j < myProducts.length; j++) {
            if (myProducts[j].id == ordersTab[i].productId) {
                //myOrders
                content = content + `
           <tr>
           <td>
              ${ordersTab[i].id}
           </td>
           <td>
               <h5>  ${ordersTab[i].productId}</h5>
           </td>
           <td>
           <h5> ${myProducts[j].prName}</h5>
       </td>
   
           <td>
           ${ordersTab[i].userId}
           </td>
           <td>
           ${searchObjByIdAndKey(ordersTab[i].userId, "users").fN}  
           ${searchObjByIdAndKey(ordersTab[i].userId, "users").lN}
           </td>
          
         
           <td>
           ${ordersTab[i].qty}
           </td>
           <td>
           ${ordersTab[i].qty * myProducts[j].prPrice}
           </td>
          
       </tr>
   
           `
            }

        }

    }
    document.getElementById("storeOrdersDiv").innerHTML = content;
}

//afficher tous les produits à l'admin
function displayAdminProducts() {
    var productsTab = getFromLS("products");
    var content = "";
    for (let i = 0; i < productsTab.length; i++) {

        content = content + `
        <tr>
        <td>
           ${productsTab[i].id}
        </td>
        <td>
            <h5>   ${productsTab[i].prName}</h5>
        </td>
        <td>
        <h5>  ${productsTab[i].prPrice}</h5>
    </td>

        <td>
        ${productsTab[i].prStock}
        </td>
        <td>
        ${productsTab[i].prCategory}
        </td>
       
      
        <td>
        ${productsTab[i].storeId}
        </td>
        <td>
        ${searchObjByIdAndKey(productsTab[i].storeId, "users").fN}
        ${searchObjByIdAndKey(productsTab[i].storeId, "users").lN}
        </td>
        <td>
       <button class="btn btn-danger" onclick="deleteProductByAdmin(${productsTab[i].id})" >Delete</button>
       <button class="btn btn-warning" onclick="editProduct(${productsTab[i].id}) " >Edit</button>
        </td>
    </tr>

        `

    }


    document.getElementById("productsAdminDiv").innerHTML = content;
}

function editProduct(id) {
    var product = searchObjByIdAndKey(id, "products");
    console.log("product", product);

    var form = `<div class="login_form_inner">
    <h3>Log in to enter</h3>
    <div class="row login_form" >
        <div class="col-md-12 form-group">
            <input type="text" class="form-control" id="newPrice"value=${product.prPrice} >
        </div>
        <div class="col-md-12 form-group">
            <input type="text" class="form-control" id="newStock"value=${product.prStock} >
        </div>

        <div class="col-md-12 form-group">
            <button type="submit" value="submit"onclick="validateEdit(${id})" class="primary-btn">validate</button>
            <span id="loginError"></span>
        </div>
    </div>
</div>`;
    document.getElementById('formDiv').innerHTML = form;
}

function validateEdit(id) {
    var newPrice = document.getElementById("newPrice").value;
    var newStock = document.getElementById("newStock").value;
    var productsTab = getFromLS('products');
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].id == id) {
            productsTab[i].prPrice = newPrice;
            productsTab[i].prStock = newStock;
            break
        }

    }
    setToLS("products", productsTab);
    location.reload();
}

function deleteObjByIdAndKey(id, key) {
    var pos = searchPosByIdAndKey(id, key);
    var T = getFromLS(key);
    T.splice(pos, 1);
    setToLS(key, T);
    location.reload();
}

function deleteProductByAdmin(id) {
    var pos = searchPosByIdAndKey(id, "products");
    var productsTab = getFromLS("products");

    var ordersTab = getFromLS("orders");
    for (let i = ordersTab.length-1; i >=0; i--) {
        if (ordersTab[i].productId == id) {
            ordersTab.splice(i, 1);
        }

    }

    setToLS('orders', ordersTab);
    productsTab.splice(pos, 1);
    setToLS('products', productsTab);
    location.reload();
}

function displayAdminUsers() {
    var usersTab = getFromLS('users');
    var content='';
    for (let i = 0; i < usersTab.length; i++) {
       if (usersTab[i].role !='admin') {
        if (usersTab[i].role == "store" &&  usersTab[i].status =="Not validated") {
            content = content + `
            <tr>
            <td>
               ${usersTab[i].id}
            </td>
            <td>
                <h5>   ${usersTab[i].fN}  ${usersTab[i].lN}</h5>
            </td>
            <td>
            <h5>  ${usersTab[i].email}</h5>
        </td>
    
            <td>
            ${usersTab[i].tel}
            </td>
            <td>
            ${usersTab[i].role}
            </td>
           
          
            <td>
            ${usersTab[i].address}
            </td>
            <td>
            ${usersTab[i].storeName}
            </td>
            <td>
            ${usersTab[i].status}
            </td>
            <td>
           <button class="btn btn-danger" onclick="deleteObjByIdAndKey(${usersTab[i].id},'users')" >Delete</button>
           <button class="btn btn-warning" onclick="validateStore( ${usersTab[i].id}) " >Validate</button>
            </td>
        </tr>
    
            `      
        }
        else {
            content = content + `
            <tr>
            <td>
               ${usersTab[i].id}
            </td>
            <td>
                <h5>   ${usersTab[i].fN}  ${usersTab[i].lN}</h5>
            </td>
            <td>
            <h5>  ${usersTab[i].email}</h5>
        </td>
    
            <td>
            ${usersTab[i].tel}
            </td>
            <td>
            ${usersTab[i].role}
            </td>
           
          
            <td>
            ${usersTab[i].address}
            </td>
            <td>
            ${usersTab[i].storeName}
            </td>
            <td>
            ${usersTab[i].status}
            </td>
            <td>
           <button class="btn btn-danger" onclick="deleteObjByIdAndKey(${usersTab[i].id},'users')" >Delete</button>
         
            </td>
        </tr>
    
            `    
        }
       }
        
    }

    document.getElementById('usersAdminDiv').innerHTML=content;
}


function validateStore(id) {
    var usersTab=getFromLS("users");
    for (let i = 0; i < usersTab.length; i++) {
     if (usersTab[i].id == id)   {
        usersTab[i].status = "validated";
        break;
     }
        
    }
    setToLS("users", usersTab);
    location.reload();
}

function searchProduct() {
    var productName = getValue("searchPr");
    var products=getFromLS("products");
    var foundProducts=[];
    var content=''
    for (let i = 0; i < products.length; i++) {
        if (products[i].prName == productName) {
          foundProducts.push(products[i])
        }
        
    }
    for (let i = 0; i < foundProducts.length; i++) {
        
        content = content + `<div class="col-lg-3 col-md-6" >
     <div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt="">
							<div class="product-details">
								<h6>${foundProducts[i].prName}</h6>
								<div class="price">
									<h6>${foundProducts[i].prPrice} DT</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								
							</div>
                            <button class="btn primary-btn" onclick="goToDisplay(${foundProducts[i].id})">Display</button>
						</div>
                        </div>
                        `
    }
document.getElementById('searchDiv').innerHTML=content;
}

function displayProfile() {
    var connectedUserID=localStorage.getItem("connectedUserID");
    var user = searchObjByIdAndKey(connectedUserID,"users");
    document.getElementById('userName').innerHTML = user.fN
    document.getElementById('userEmail').innerHTML = user.email
}
function editProfile() {
    var connectedUserID=localStorage.getItem("connectedUserID")
    var form = `<div class="login_form_inner">
    <h3>Log in to enter</h3>
    <div class="row login_form" >
        <div class="col-md-12 form-group">
            <input type="text" class="form-control" id="newEmail"placeholder="email">
        </div>
        

        <div class="col-md-12 form-group">
            <button type="submit" value="submit"onclick="validateEditProfile(${connectedUserID})" class="primary-btn">validate</button>
            <span id=""></span>
        </div>
    </div>
</div>`;
    document.getElementById('profileDiv').innerHTML = form;
}
function validateEditProfile(id) {
    var newEmail=document.getElementById("newEmail").value
    var users=getFromLS("users")
    for (let i = 0; i < users.length; i++) {
       if (users[i].id == id) {
         users[i].email=newEmail;
       }
        
    }
    setToLS('users', users)
    location.reload()
}




