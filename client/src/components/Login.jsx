import '../styles/Login.css'
const Login = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2> <br />
                <div className="form-group">
                    <label htmlFor="username">Username : </label>
                    <input type="text" name="" value="" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="" value="" placeholder="Enter Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Role : </label>
                    <select name="role" id="role">
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                    </select>
                </div>
                <button type="" className="btn-login">Login</button>
            </div>
        </div>
    )
}
export default Login