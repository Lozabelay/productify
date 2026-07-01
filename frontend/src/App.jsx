import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  SignOutButton
} from "@clerk/clerk-react";

function App() {
  return (
    <div>
      <h1 className="text-blue-500">Welcome to Productify</h1>

      <button className="btn btn-primary">Click me</button>

      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}

export default App;