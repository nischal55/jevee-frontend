import { useSelector } from "react-redux"


export default function Header() {

  let user = useSelector((store) => store.user.value);
  return (
    <>
        this is a header
    
    </>
  )
}
