import "./Login.scss"

const Login = () => {
    return (
        <div className="loginPage">
            <img src="images/logo-air-4-life.png" alt="Logo" />
            <p>Welcome!</p>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sing In</button>
            </form>
        </div>
    );
};

export default Login;   