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
                <a className='login-button-container' href="/auth/google">
                    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    Inicio de Sesión con Google
                </a>
            </div>
        </div>
    );
};

export default Login;