import Child2 from "./Child2"

function Child1({UserName}){
    return(
    <div>
        <h1>Context API:</h1>
        <div>Child 1</div>
        <Child2 UserName={UserName}/>
    </div>
    )
}

export default Child1;