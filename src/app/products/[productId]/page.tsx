export default function ProductDetails({
    params,
}:{
    params:{productId:string};
}){
    return <h1>product detail page {params.productId}</h1>;
}