import { useEffect, useState } from "react";

export default function Products()
{
    const [product,setProduct]=useState(["iphone","tectno"])
    const [newProduct,setNewProduct]=useState("");
    const [removed,setRemoved]=useState("");
  

    const HandleChange=(e:any)=>{       
        setNewProduct(e.target.value)
        

    }

    const handleRemove=(removedItem:string)=>{
        setProduct(product.filter(item=>item!==removedItem))
        setRemoved(removedItem);
        
    }
    useEffect(()=>{
        console.log(`you removed ${removed}`)
        
        
    },[product])

    const HandleAddItem=()=>{
   
    if(newProduct.trim()==="")
        return;
      setProduct([...product,newProduct]);
      setNewProduct("");
    }
    return(
        <>
        
           
        
        {product.map((item,index)=>{
            // console.log(index,item);
            return <li key={index}>{index}:{item}
            <button onClick={()=>handleRemove(item)}>remove</button>   
            </li>
        })} 
         <input 
            type="text"
            value={newProduct}
            onChange={HandleChange}
            placeholder="write item here"

            />
        <button onClick={HandleAddItem}>add</button>   
        
       
        </>
    )
}