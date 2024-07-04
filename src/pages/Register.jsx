import logo from "../assets/logo.png";
import "./Register.scss";

const Register = () => {
    return (
        <div className="registerPage">
            <img src={logo} alt="Logo"/>
            <p>Register</p>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button type="submit">Sing Up</button>
            </form>
        </div>
    );
};

export default Register;