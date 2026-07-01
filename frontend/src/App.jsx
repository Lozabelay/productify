import { SignInButton } from "@clerk/react";

function App() {
  return (
    <div>
      <h1 className="text-blue-500">Welcome to Productify</h1>

      <button className="btn btn-primary">Click me</button>

      <SignInButton />
    </div>
  );
}

export default App;