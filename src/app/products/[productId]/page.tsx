import { Metadata } from "next";
type props={
    params:{
        productId:string;
    };
};
export const generateMetadata =async ({params}:props):Promise<Metadata>=>{
    const title=await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`iphone ${params.productId}`);
        },100);
    });
    return{
        title:`product ${title}`
    }
}

export default function ProductDetails({ params}:props){
    return <h1>product detail page {params.productId}</h1>;
}