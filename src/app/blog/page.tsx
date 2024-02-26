import { Metadata } from "next";
//will show only Blog
export const metadata:Metadata={
    title:{
        absolute:"Blog"
    },
}
//will show blog|codevolution
// export const metadata:Metadata={
//     title:"blog",
// };
export default function Blog(){
    return <h1>the blog page</h1>
}