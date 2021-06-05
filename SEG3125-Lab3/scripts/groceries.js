var products = [
	{
		name: "$1.99 - Broccoli",
		lactose_intolerant: true,
		nut_allergy: true,
		isOrganic: false,
		price: 1.99
	},
	{
		name: "$2.50 - Family Sized Doritos",
		lactose_intolerant: true,
		nut_allergy: true,
		isOrganic: false,
		price: 2.50
	},
	{
		name: "$2.88 - Siracha Hot Sauce",
		lactose_intolerant: true,
		nut_allergy: true,
		isOrganic: false,
		price: 2.88
	},
	{
		name: "$3.99 - 2% Milk",
		lactose_intolerant: false,
		nut_allergy: true,
		isOrganic: false,
		price: 3.99
	},
	{
		name: "$4.95 - Almonds",
		lactose_intolerant: true,
		nut_allergy: false,
		isOrganic: false,
		price: 4.95
	},
	{
		name: "$4.98 - Peanut Butter",
		lactose_intolerant: true,
		nut_allergy: false,
		isOrganic: false,
		price: 4.98
	},
	{
		name: "$5.50 - Yogurt",
		lactose_intolerant: false,
		nut_allergy: true,
		isOrganic: false,
		price: 5.50
	},
	{
		name: "$12.99 - T-Bone Steak",
		lactose_intolerant: true,
		nut_allergy: true,
		isOrganic: false,
		price: 12.99
	},
	{
		name: "$13.99 - Organic Apple Pie",
		lactose_intolerant: true,
		nut_allergy: true,
		isOrganic: true,
		price: 13.99
	},
	{
		name: "$15.49 - Organic Papaya Case",
		lactose_intolerant: true,
		nut_allergy: true,
		isOrganic: true,
		price: 15.49
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
	let product_names = [];
	if (organic.toString() == "true"){
		for (let i=0; i<prods.length; i+=1) {
			if ((restriction == "Lactose Intolerant") && (prods[i].lactose_intolerant == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "Nut Allergy") && (prods[i].nut_allergy == true)){
				product_names.push(prods[i].name);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
			}
		}
	}else{
		for (let i=0; i<prods.length - 2; i+=1) {
			if ((restriction == "Lactose Intolerant") && (prods[i].lactose_intolerant == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "Nut Allergy") && (prods[i].nut_allergy == true)){
				product_names.push(prods[i].name);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
			}
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}