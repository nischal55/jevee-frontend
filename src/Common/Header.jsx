import { useSelector } from "react-redux"

export default function Header() {

  let user = useSelector((store) => store.user.value);
  return (
    <>
      <h1>This is Navbar! Hello {user}</h1>
    </>
  )
}
