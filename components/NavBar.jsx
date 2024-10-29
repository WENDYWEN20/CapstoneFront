import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-indigo-300  text-center p-10 rounded-full border-2 hover:bg-blue-700 hover:cursor-pointer">
      <h1>Capstone React Node MongoDB MERN</h1>
      <div>
        <Link to="/">Home </Link>
        <Link to="/products">Products</Link>
        <Link to="/carts"> Carts</Link>
        <Link to="/checkout"> Check Out</Link>
        <Link to="/users"> Users</Link>
      </div>
    </nav>
  );
}
