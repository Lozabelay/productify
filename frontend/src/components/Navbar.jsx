import { Link } from "react-router";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";
import { ShoppingBagIcon, PlusIcon, UserIcon } from "lucide-react";


function Navbar() {
  const { isSignedIn } = useAuth();
  return (
    <div> className="navbar</div>
  )
}

export default Navbar