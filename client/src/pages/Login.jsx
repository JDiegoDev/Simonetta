import '../styles/Login.scss';
import SimonettaLogo from '../images/SIMONETTALOGO.png';


const Login = () => {
    return (
        <div className="login-container">
            <div className="login-left-panel">
            <img src={SimonettaLogo} alt='Simonetta-Logo' className=''></img>
            </div>
            <div className="login-right-panel">
                <h1>Inicio de Sesión</h1>
            </div>
        </div>
    );
};

export default Login;