import { useUserContext } from "../context/UserContext.jsx"

function Child2(){
    const data=useUserContext()
    return(
        <div>
            Child 2
            <div>
                Name: {data.userInfo.Name}
                <br />
                Id: {data.userInfo.Id}
            </div>
        </div>
        
    )
}

export default Child2;