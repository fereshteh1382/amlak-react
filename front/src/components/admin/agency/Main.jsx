import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () =>{
    return(
            <div className="table-responsive-sm mx-auto mt-5" style={{maxWidth:"700px"}}>
                <h1 className="text-center">لیست مشاورین املاک</h1>
                <table className="table mt-3">
                    <thead>
                        <tr className="bg-warning">
                            <th scope="col">نام</th>
                            <th scope="col">نام بنگاه</th>
                            <th scope="col">تلفن</th>
                            <th scope="col">لاگین</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>علی احمدی</td>
                            <td>احمدی</td>
                            <td>322222222</td>
                            <td><FontAwesomeIcon icon={faSignIn} className="pl-1" style={{cursor: "pointer"}} /> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
    )
}

export default Main;