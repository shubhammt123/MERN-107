const fetchProductData = async ()=>{
    try {
        const response = await fetch("http://localhost:3000/products/getAllProducts");
        const data = await response.json();
        console.log(data)
        let tableBody = document.getElementById("product-table-body");
        data.products.forEach((item , index) => {
            let newRow = document.createElement("tr");
            newRow.innerHTML = `<td>${index+1}</td>
            <td>${item.productName}</td>
            <td>${item.productPrice}</td>
            <td>${item.productDescription}</td>
            <td>${item.category}</td>
            <td><button class='update-button'>Update</button><button class='delete-button'>Delete</button></td>`;
            tableBody.appendChild(newRow);
        });
    } catch (error) {
        console.log(error)
    }
}

fetchProductData();



document.getElementById("add-product").addEventListener("click",function(){
    document.getElementById("modal").style.display = "flex";
})
document.getElementById("close-modal-button").addEventListener("click",function(){
    document.getElementById("modal").style.display = "none";
})

const addProduct = (event , productData)=>{
    event.preventDefault();
        fetch("http://localhost:3000/products/createProduct" , {
            method : "POST",
            headers: { "Content-Type": "application/json" },
            body :  JSON.stringify(productData)
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err);
        })
}

document.getElementById("product-form").addEventListener("submit",async function(e){
    e.preventDefault();
    let productName = document.getElementById("product-name").value;
    let productPrice = document.getElementById("product-price").value;
    let productDescription = document.getElementById("product-description").value;
    let category = document.getElementById("product-category").value;
    // addProduct(e ,  {productName , productPrice , productDescription ,  category});
    // return false;
    fetch("http://localhost:3000/products/createProduct" , {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body :  JSON.stringify({productName , productPrice , productDescription ,  category})
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err);
    })
})