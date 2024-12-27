const amazonProducts = {
    "Apple TV": { price: 615, rating: '⭐⭐⭐⭐' },
"Lenovo Phone": { price: 595, rating: '⭐⭐⭐⭐' },
"Sony Tablet": { price: 1423, rating: '⭐⭐⭐⭐⭐' },
"Lenovo Speaker": { price: 1058, rating: '⭐⭐⭐⭐' },
"Sony Camera": { price: 659, rating: '⭐⭐⭐⭐' },
"Nike Smartwatch": { price: 1441, rating: '⭐⭐⭐⭐⭐' },
"Adidas Camera": { price: 947, rating: '⭐⭐⭐⭐' },
"Dell TV": { price: 579, rating: '⭐⭐⭐⭐' },
"Dell Phone": { price: 1020, rating: '⭐⭐⭐⭐' },
"HP Speaker": { price: 732, rating: '⭐⭐⭐⭐' },
"Dell Tablet": { price: 1139, rating: '⭐⭐⭐⭐' },
"HP Laptop": { price: 1251, rating: '⭐⭐⭐⭐⭐' },
"Apple Speaker": { price: 815, rating: '⭐⭐⭐⭐' },
"Samsung TV": { price: 1070, rating: '⭐⭐⭐⭐⭐' },
"Sony Speaker": { price: 690, rating: '⭐⭐⭐⭐' },
"Sony Phone": { price: 1232, rating: '⭐⭐⭐⭐⭐' },
"Sony Camera": { price: 1276, rating: '⭐⭐⭐⭐⭐' },
"Samsung Laptop": { price: 1033, rating: '⭐⭐⭐⭐' },
"Samsung Shoes": { price: 1257, rating: '⭐⭐⭐⭐⭐' },
"HP Tablet": { price: 1183, rating: '⭐⭐⭐⭐' },
"Nike Backpack": { price: 1158, rating: '⭐⭐⭐⭐' },
"Nike Shoes": { price: 664, rating: '⭐⭐⭐⭐' },
"Sony Smartwatch": { price: 1341, rating: '⭐⭐⭐⭐⭐' },
"HP TV": { price: 1335, rating: '⭐⭐⭐⭐⭐' },
"HP Tablet": { price: 845, rating: '⭐⭐⭐⭐' },
"Nike Phone": { price: 959, rating: '⭐⭐⭐⭐' },
"HP Speaker": { price: 1089, rating: '⭐⭐⭐⭐' },
"Apple Laptop": { price: 1158, rating: '⭐⭐⭐⭐' },
"LG TV": { price: 762, rating: '⭐⭐⭐⭐' },
"Canon Laptop": { price: 821, rating: '⭐⭐⭐⭐' },
"Lenovo Backpack": { price: 853, rating: '⭐⭐⭐⭐' },
"Lenovo Camera": { price: 1115, rating: '⭐⭐⭐⭐' },
"HP Phone": { price: 849, rating: '⭐⭐⭐⭐' },
"Samsung Camera": { price: 938, rating: '⭐⭐⭐⭐' },
"Dell Backpack": { price: 1365, rating: '⭐⭐⭐⭐⭐' },
"LG TV": { price: 1220, rating: '⭐⭐⭐⭐⭐' },
"Dell Headphones": { price: 585, rating: '⭐⭐⭐⭐' },
"Nike Tablet": { price: 800, rating: '⭐⭐⭐⭐' },
"Nike TV": { price: 755, rating: '⭐⭐⭐⭐' },
"HP Tablet": { price: 1117, rating: '⭐⭐⭐⭐' },
"Apple Backpack": { price: 1423, rating: '⭐⭐⭐⭐⭐' },
"LG Camera": { price: 1483, rating: '⭐⭐⭐⭐⭐' },
"Dell Camera": { price: 591, rating: '⭐⭐⭐⭐' },
"Adidas Shoes": { price: 1084, rating: '⭐⭐⭐⭐' },
"Sony Laptop": { price: 1406, rating: '⭐⭐⭐⭐⭐' },
"HP Shoes": { price: 456, rating: '⭐⭐⭐⭐' },
"Sony Phone": { price: 598, rating: '⭐⭐⭐⭐' },
"Lenovo Tablet": { price: 1086, rating: '⭐⭐⭐⭐' },
"Adidas Speaker": { price: 1466, rating: '⭐⭐⭐⭐⭐' },
"Apple Shoes": { price: 668, rating: '⭐⭐⭐⭐' },
"Dell Smartwatch": { price: 996, rating: '⭐⭐⭐⭐' },
"Apple Shoes": { price: 1399, rating: '⭐⭐⭐⭐⭐' },
"Nike Phone": { price: 659, rating: '⭐⭐⭐⭐' },
"Samsung Smartwatch": { price: 1385, rating: '⭐⭐⭐⭐⭐' },
"Sony Phone": { price: 909, rating: '⭐⭐⭐⭐' },
"Apple Backpack": { price: 735, rating: '⭐⭐⭐⭐' },
"Samsung Shoes": { price: 786, rating: '⭐⭐⭐⭐' },
"Dell Backpack": { price: 1292, rating: '⭐⭐⭐⭐' },
"HP Laptop": { price: 903, rating: '⭐⭐⭐⭐' },
"Samsung Headphones": { price: 764, rating: '⭐⭐⭐⭐' },
"Samsung Backpack": { price: 1059, rating: '⭐⭐⭐⭐' },
"Canon Laptop": { price: 993, rating: '⭐⭐⭐⭐' },
"Samsung Shoes": { price: 1095, rating: '⭐⭐⭐⭐' },
"Dell Camera": { price: 1232, rating: '⭐⭐⭐⭐⭐' },
"Nike Headphones": { price: 1358, rating: '⭐⭐⭐⭐⭐' },
"Apple Backpack": { price: 585, rating: '⭐⭐⭐⭐' },
"Canon Laptop": { price: 1019, rating: '⭐⭐⭐⭐' },
"LG Backpack": { price: 734, rating: '⭐⭐⭐⭐' },
"Samsung Speaker": { price: 1311, rating: '⭐⭐⭐⭐⭐' },
"Dell Camera": { price: 730, rating: '⭐⭐⭐⭐' },
"Adidas TV": { price: 580, rating: '⭐⭐⭐⭐' },
"Samsung Smartwatch": { price: 918, rating: '⭐⭐⭐⭐' },
"Canon Headphones": { price: 1297, rating: '⭐⭐⭐⭐⭐' },
"Adidas Speaker": { price: 798, rating: '⭐⭐⭐⭐' },
"Sony Phone": { price: 1060, rating: '⭐⭐⭐⭐' },
"Samsung Laptop": { price: 891, rating: '⭐⭐⭐⭐' },
"Samsung Shoes": { price: 876, rating: '⭐⭐⭐⭐' },
"Canon Headphones": { price: 761, rating: '⭐⭐⭐⭐' },
"Nike Laptop": { price: 1010, rating: '⭐⭐⭐⭐' },
"Dell Phone": { price: 1479, rating: '⭐⭐⭐⭐⭐' },
"Lenovo Laptop": { price: 1305, rating: '⭐⭐⭐⭐' },
"Lenovo Speaker": { price: 1272, rating: '⭐⭐⭐⭐' },
"Samsung Laptop": { price: 688, rating: '⭐⭐⭐⭐' },
"HP Shoes": { price: 1485, rating: '⭐⭐⭐⭐⭐' },
"Dell Backpack": { price: 1123, rating: '⭐⭐⭐⭐' },
"Adidas TV": { price: 552, rating: '⭐⭐⭐⭐' },
"Dell Camera": { price: 1281, rating: '⭐⭐⭐⭐⭐' },
"Adidas Phone": { price: 935, rating: '⭐⭐⭐⭐' },
"HP Tablet": { price: 1145, rating: '⭐⭐⭐⭐' },
"Apple Tablet": { price: 505, rating: '⭐⭐⭐⭐' },
"Adidas Smartwatch": { price: 1286, rating: '⭐⭐⭐⭐⭐' },
"Adidas Tablet": { price: 912, rating: '⭐⭐⭐⭐' },
"Canon Phone": { price: 641, rating: '⭐⭐⭐⭐' },
"Adidas Camera": { price: 1123, rating: '⭐⭐⭐⭐' },
"Canon TV": { price: 529, rating: '⭐⭐⭐⭐' },
"Nike Smartwatch": { price: 1344, rating: '⭐⭐⭐⭐⭐' },
"Samsung Phone": { price: 822, rating: '⭐⭐⭐⭐' },
"Adidas Shoes": { price: 1446, rating: '⭐⭐⭐⭐⭐' },
"LG TV": { price: 1471, rating: '⭐⭐⭐⭐⭐' },
"Nike Laptop": { price: 953, rating: '⭐⭐⭐⭐' },

    "Iphone xr" : {price:1002, rating: '⭐⭐⭐'}
};



const flipkartProducts = {
    "Apple TV": { price: 700, rating: '⭐⭐⭐' },
    "Lenovo Phone": { price: 600, rating: '⭐⭐' },
    "Sony Tablet": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "Lenovo Speaker": { price: 1100, rating: '⭐⭐⭐⭐' },
    "Sony Camera": { price: 700, rating: '⭐⭐⭐' },
    "Nike Smartwatch": { price: 1500, rating: '⭐⭐⭐⭐⭐' },
    "Adidas Camera": { price: 900, rating: '⭐⭐⭐' },
    "Dell TV": { price: 650, rating: '⭐⭐' },
    "Dell Phone": { price: 1100, rating: '⭐⭐⭐⭐' },
    "HP Speaker": { price: 800, rating: '⭐⭐⭐' },
    "Dell Tablet": { price: 1200, rating: '⭐⭐⭐⭐' },
    "HP Laptop": { price: 1300, rating: '⭐⭐⭐⭐⭐' },
    "Apple Speaker": { price: 850, rating: '⭐⭐⭐' },
    "Samsung TV": { price: 1100, rating: '⭐⭐⭐⭐' },
    "Sony Speaker": { price: 700, rating: '⭐⭐⭐' },
    "Sony Phone": { price: 1250, rating: '⭐⭐⭐⭐' },
    "Sony Camera": { price: 1300, rating: '⭐⭐⭐⭐' },
    "Samsung Laptop": { price: 1050, rating: '⭐⭐⭐⭐' },
    "Samsung Shoes": { price: 1300, rating: '⭐⭐⭐⭐' },
    "HP Tablet": { price: 1200, rating: '⭐⭐⭐⭐' },
    "Nike Backpack": { price: 1200, rating: '⭐⭐⭐⭐' },
    "Nike Shoes": { price: 700, rating: '⭐⭐⭐' },
    "Sony Smartwatch": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "HP TV": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "HP Tablet": { price: 900, rating: '⭐⭐⭐' },
    "Nike Phone": { price: 1000, rating: '⭐⭐⭐⭐' },
    "HP Speaker": { price: 1200, rating: '⭐⭐⭐⭐' },
    "Apple Laptop": { price: 1200, rating: '⭐⭐⭐⭐' },
    "LG TV": { price: 800, rating: '⭐⭐⭐' },
    "Canon Laptop": { price: 900, rating: '⭐⭐⭐' },
    "Lenovo Backpack": { price: 900, rating: '⭐⭐⭐' },
    "Lenovo Camera": { price: 1200, rating: '⭐⭐⭐⭐' },
    "HP Phone": { price: 900, rating: '⭐⭐⭐' },
    "Samsung Camera": { price: 1000, rating: '⭐⭐⭐⭐' },
    "Dell Backpack": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "LG TV": { price: 1300, rating: '⭐⭐⭐⭐' },
    "Dell Headphones": { price: 650, rating: '⭐⭐' },
    "Nike Tablet": { price: 900, rating: '⭐⭐⭐' },
    "Nike TV": { price: 800, rating: '⭐⭐⭐' },
    "HP Tablet": { price: 1200, rating: '⭐⭐⭐⭐' },
    "Apple Backpack": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "LG Camera": { price: 1500, rating: '⭐⭐⭐⭐⭐' },
    "Dell Camera": { price: 650, rating: '⭐⭐' },
    "Adidas Shoes": { price: 1200, rating: '⭐⭐⭐⭐' },
    "Sony Laptop": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "HP Shoes": { price: 1000, rating: '⭐⭐⭐⭐' },
    "Sony Phone": { price: 700, rating: '⭐⭐⭐' },
    "Lenovo Tablet": { price: 1200, rating: '⭐⭐⭐⭐' },
    "Adidas Speaker": { price: 1500, rating: '⭐⭐⭐⭐⭐' },
    "Apple Shoes": { price: 700, rating: '⭐⭐⭐' },
    "Dell Smartwatch": { price: 1100, rating: '⭐⭐⭐⭐' },
    "Apple Shoes": { price: 1500, rating: '⭐⭐⭐⭐⭐' },
    "Nike Phone": { price: 700, rating: '⭐⭐⭐' },
    "Samsung Smartwatch": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "Sony Phone": { price: 1000, rating: '⭐⭐⭐⭐' },
    "Apple Backpack": { price: 800, rating: '⭐⭐⭐' },
    "Samsung Shoes": { price: 850, rating: '⭐⭐⭐' },
    "Dell Backpack": { price: 1300, rating: '⭐⭐⭐⭐' },
    "HP Laptop": { price: 900, rating: '⭐⭐⭐' },
    "Samsung Headphones": { price: 800, rating: '⭐⭐⭐' },
    "Samsung Backpack": { price: 1200, rating: '⭐⭐⭐⭐' },
    "Canon Laptop": { price: 1000, rating: '⭐⭐⭐⭐' },
    "Samsung Shoes": { price: 1200, rating: '⭐⭐⭐⭐' },
    "Dell Camera": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "Nike Headphones": { price: 1500, rating: '⭐⭐⭐⭐⭐' },
    "Apple Backpack": { price: 650, rating: '⭐⭐' },
    "Canon Laptop": { price: 1100, rating: '⭐⭐⭐⭐' },
    "LG Backpack": { price: 800, rating: '⭐⭐⭐' },
    "Samsung Speaker": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "Dell Camera": { price: 800, rating: '⭐⭐⭐' },
    "Adidas TV": { price: 650, rating: '⭐⭐' },
    "Samsung Smartwatch": { price: 1000, rating: '⭐⭐⭐⭐' },
    "Canon Headphones": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "Adidas Speaker": { price: 850, rating: '⭐⭐⭐' },
    "Sony Phone": { price: 1100, rating: '⭐⭐⭐⭐' },
    "Samsung Laptop": { price: 950, rating: '⭐⭐⭐' },
    "Samsung Shoes": { price: 900, rating: '⭐⭐⭐' },
    "Canon Headphones": { price: 750, rating: '⭐⭐⭐' },
    "Nike Laptop": { price: 1100, rating: '⭐⭐⭐⭐' },
    "Dell Phone": { price: 1500, rating: '⭐⭐⭐⭐⭐' },
    "Lenovo Laptop": { price: 1300, rating: '⭐⭐⭐⭐⭐' },
    "Lenovo Speaker": { price: 1250, rating: '⭐⭐⭐⭐' },
    "Samsung Laptop": { price: 750, rating: '⭐⭐⭐' },
    "HP Shoes": { price: 1500, rating: '⭐⭐⭐⭐⭐' },
    "Dell Backpack": { price: 1200, rating: '⭐⭐⭐⭐' },
    "Adidas TV": { price: 600, rating: '⭐⭐' },
    "Dell Camera": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "Adidas Phone": { price: 1000, rating: '⭐⭐⭐⭐' },
    "HP Tablet": { price: 1200, rating: '⭐⭐⭐⭐' },
    "Apple Tablet": { price: 600, rating: '⭐⭐' },
    "Adidas Smartwatch": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "Adidas Tablet": { price: 950, rating: '⭐⭐⭐⭐' },
    "Canon Phone": { price: 700, rating: '⭐⭐⭐' },
    "Adidas Camera": { price: 1200, rating: '⭐⭐⭐⭐' },
    "Canon TV": { price: 600, rating: '⭐⭐' },
    "Nike Smartwatch": { price: 1400, rating: '⭐⭐⭐⭐⭐' },
    "Samsung Phone": { price: 900, rating: '⭐⭐⭐' },
    "Adidas Shoes": { price: 1500, rating: '⭐⭐⭐⭐⭐' },
    "LG TV": { price: 1500, rating: '⭐⭐⭐⭐⭐' },
    "Nike Laptop": { price: 1000, rating: '⭐⭐⭐⭐' },
    "Iphone xr" : {price:1000, rating: '⭐⭐⭐⭐'}
};






// Define the exchange rate
const exchangeRate = 47;

// Function to convert prices to Indian Rupees (INR)
function convertToINR(priceInUSD) {
    return Math.round(priceInUSD * exchangeRate); // Round the result to the nearest integer
}

// Convert prices in amazonProducts to INR
for (const productName in amazonProducts) {
    amazonProducts[productName].price = convertToINR(amazonProducts[productName].price);
}

// Convert prices in flipkartProducts to INR
for (const productName in flipkartProducts) {
    flipkartProducts[productName].price = convertToINR(flipkartProducts[productName].price);
}


function displayResults(results) {
    const amazonContainer = document.getElementById("amazonProducts");
    const flipkartContainer = document.getElementById("flipkartProducts");
    amazonContainer.innerHTML = "";
    flipkartContainer.innerHTML = "";
    
    results.forEach(product => {
        const productName = product.name;
        const amazonPrice = amazonProducts[productName] ? amazonProducts[productName].price : "N/A";
        const flipkartPrice = flipkartProducts[productName] ? flipkartProducts[productName].price : "N/A";
        const amazonPriceClass = getClassByPriceComparison(amazonPrice, flipkartPrice);
        const flipkartPriceClass = getClassByPriceComparison(flipkartPrice, amazonPrice);
        
        const amazonProductElement = createProductElement(productName, amazonPrice, amazonPriceClass);
        const flipkartProductElement = createProductElement(productName, flipkartPrice, flipkartPriceClass);
        
        amazonContainer.appendChild(amazonProductElement);
        flipkartContainer.appendChild(flipkartProductElement);
    });
}


function searchProducts() {
    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase(); // Convert input to lowercase
    const amazonContainer = document.getElementById("amazonProducts");
    const flipkartContainer = document.getElementById("flipkartProducts");

    amazonContainer.innerHTML = `
    <h2>Amazon Products</h2>
    <img src="http://wallsdesk.com/wp-content/uploads/2016/10/Amazon-Logo.jpg" alt="">
    `;
    flipkartContainer.innerHTML = `
    <h2>Flipkart Products</h2>
    <img src="https://techstory.in/wp-content/uploads/2016/07/flipkart123.jpg" alt="">
    `;

    let amazonProductFound = false;
    Object.keys(amazonProducts).forEach(productName => {
        if (productName.toLowerCase().includes(searchInput)) { 
            const productElement = createProductElement(productName, amazonProducts[productName].price, getClassByPriceComparison(amazonProducts[productName].price, flipkartProducts[productName] ? flipkartProducts[productName].price : "N/A"), amazonProducts[productName].rating);
            amazonContainer.appendChild(productElement);
            amazonProductFound = true;
        }
    });
    
    let flipkartProductFound = false;
    Object.keys(flipkartProducts).forEach(productName => {
        if (productName.toLowerCase().includes(searchInput)) {
            const productElement = createProductElement(productName, flipkartProducts[productName].price, getClassByPriceComparison(flipkartProducts[productName].price, amazonProducts[productName] ? amazonProducts[productName].price : "N/A"), flipkartProducts[productName].rating);
            flipkartContainer.appendChild(productElement);
            flipkartProductFound = true;
        }
    });

    if (!amazonProductFound) {
        amazonContainer.innerHTML = "<p>No products found</p>";
    }
    if (!flipkartProductFound) {
        flipkartContainer.innerHTML = "<p>No products found</p>";
    }
}


function getClassByPriceComparison(priceA, priceB) {
    if (priceA === "N/A" || priceB === "N/A") {
        return "";
    } else if (parseInt(priceA) < parseInt(priceB)) {
        return "green"; 
    } else if (parseInt(priceA) > parseInt(priceB)) {
        return "red"; 
        return ""; 
    }
}

function createProductElement(name, price, priceClass, rating) {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
    <div class="product-name">${name}</div>

        <div class="product-price ${priceClass}">Price: ₹ ${price}</div>
        <div class="product-rating">Rating: ${rating}</div>
        <div class="product-name"><a href="https://www.amazon.com/s?k=${encodeURIComponent(name)}" target="_blank">${name} (Amazon)</a> | <a href="https://www.flipkart.com/search?q=${encodeURIComponent(name)}" target="_blank">${name} (Flipkart)</a></div>
    `;
    return productElement;
}








document.getElementById("searchButton").addEventListener("click", searchProducts);
