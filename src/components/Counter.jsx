function Counter({digit, setDigit}){
    function increament(){
        setDigit(digit+1)
    }
    function decreament(){
        setDigit(digit-1)
    }
    return(
        <div style={{color:"green"}}>
            This is Counter
            <div>
                Count : {digit}
            </div>
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Decreament</button>
        </div>
    )
}

export default Counter;