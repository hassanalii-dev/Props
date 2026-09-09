function Counter({digit,setDigit}){
    function increamnet(){
            setDigit(digit+1)
        }
        function decreamnet(){
            setDigit(digit-1)
        }
        
    return(
        
        <div style={{color:"aqua"}}>
            <h1>Counter:</h1>
            This is Counter

            <div>
                Count : {digit}
            </div>

            <button onClick={increamnet}>Increament</button>
            <button onClick={decreamnet}>Decreament</button>
        </div>
    )
}

export default Counter;