import { useParams } from "react-router-dom"

const ContactDetails=()=>{

    const params = useParams()
    

  return(
    <div>
        <h1>{params.id} Contact Details Page</h1>
    </div>
  )
}
export default ContactDetails