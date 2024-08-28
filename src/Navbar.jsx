import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
function Navbar(){
    let [count,setCount]=useState(0);
    let data=[];
    const dataManager=function(id,obj){
        this.id=id;
        this.title=obj.title;
        this.constent=obj.content;
    }
    
    const object=new dataManager(2,{title:"hello",content:"you this is some content"})
    data.push(object);
    console.log(data);
    return (
        <div>
            {/* <nav >This is a navbar </nav>
            <button onClick={()=>setCount(count++)}>Increment count: {count}</button>
            <p>count: {count}</p> */}
            
            <div className="container-sm">100% wide until small breakpoint</div>
<div className="container-md bg-primary ">100% wide until medium breakpoint</div>
<div className="container-lg">100% wide until large breakpoint</div>
<div className="container-xl">100% wide until extra large breakpoint</div>
<div className="container-xxl">100% wide until extra extra large breakpoint</div>
        </div>
    )
}

export default Navbar