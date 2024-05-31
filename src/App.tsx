import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div className="nav">
      <div className="header">
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
        <h1>Winkel</h1>
      </div>
      <div className="tabs">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="login">
        <Button background="none" color="#000">
          Login
        </Button>
        <Button background="orangered" color="#fff">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
// function Section1() {}
// function Section2() {}
// function Section3() {}
// function Section4() {}
// function Section5() {}
// function Footer() {}

//reusable components
interface stylesBtn {
  children: string | number;
  color: string;
  background: string;
}
function Button({ children, color, background }: stylesBtn) {
  return (
    <button style={{ color: color, background: background }}>{children}</button>
  );
}
