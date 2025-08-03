import "./LoadingScreen.css";
import logo from "../../static/images/logo.png";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Logo Spinning" className="logoImg" />
    </div>
  );
}

export default LoadingScreen;
