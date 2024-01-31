function login() {
    return(
        <div className="login_wrapper">
            <h1>로그인 페이지</h1>
            <hr/>
            <form action="/loginProc" method="post">
                <input type="text" name="username" />
                <input type="password" name="password" />
                <button>로그인</button>
            </form>
            <br />
            <h1>Social Login</h1>
            <br />
            <a href="/oauth2/authorization/google" > 
            <img src="https://pngimage.net/wp-content/uploads/2018/06/google-login-button-png-1.png" alt="google" width="357px" height="117px" />
            </a>
            <br />
        </div>
      )
    }
export default login;
