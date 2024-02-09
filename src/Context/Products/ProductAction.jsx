
export const fetchProducts = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    // console.log(data);
    return data
}

export const fetchProductCategory = async(category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json();
    // console.log(data);
    return data
}

export const fetchMobileDevice = async() => {
    const response = await fetch('https://api.pujakaitem.com/api/products');
    const data = await response.json();
    console.log(data);
    return data;
    // console.log("Data Show on Mobile Devices");
}