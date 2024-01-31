function join() {
    return(
        <div className="join_wrapper">
            <h1>회원가입 페이지</h1>
            <hr/>
            <form action="/joinProc" method="post">
                <input type="text" name="username" placeholder="Username"/> <br/>
                <input type="password" name="password" placeholder="Password"/> <br/>
                <input type="email" name="email" placeholder="Email"/> <br/>
                <button>회원가입</button>
            </form>
        </div>
      )
    }
export default join;
