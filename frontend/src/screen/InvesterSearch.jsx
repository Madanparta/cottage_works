import { InvesterID, _id, name } from "../utils/credential";
import {Link} from 'react-router-dom';

const InvesterSearch = () => {
  return (
    <>
      <h2 style={{fontFamily: 'Preahvihear, sans-serif'}} className="text-center font-mono text-2xl mb-5">hello {name}!!. your ID : <Link to={`/profile/${_id}`} className="hover:underline cursor-pointer">{InvesterID}</Link> </h2>
    </>
  )
}

export default InvesterSearch
