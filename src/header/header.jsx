import "./header.css";

export const Header = () => {
  return (
    <header>
      <ul className="flex justify-center gap-20">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Sign up</a>
        </li>
      </ul>
    </header>
  );
};
