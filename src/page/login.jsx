import Navbar from "../components/navbar";
import FooterNovo from '../components/footer_NOVO';
import imglogin from "../img/imglogin.svg"
import '../styles/style.login.css'

function Login() {

    return (
      <>
        <Navbar />
        <div className="main-login">
            <div className="left-login">
                <h1>Faça Login <br />E entre para o nosso time</h1>
                <img src={imglogin} alt="img" className="left-login-image"/>
            </div>
            <div className="right-login">
                <div className="card-login">
                    <h1>LOGIN</h1>
                    <div className="text-field">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="Usuário" />
                    </div>
                    <div className="text-field">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Senha" />
                    </div>
                    <button className="btn-login">Entrar</button>
                </div>
            </div>
        </div>
        <FooterNovo />
      </>
    );
    
  }

export default Login;
  