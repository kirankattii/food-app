import React, { useContext, useState } from "react"
import "./loginPopup.css"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../context/StoreContext"
import axios from "axios"
const LoginPopu = ({ setShowLogin }) => {
	const [currentState, setCurrentState] = useState("Login")

	const { url, token, setToken } = useContext(StoreContext)

	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	})

	const onChangeHandler = (event) => {
		const name = event.target.name
		const value = event.target.value
		setData((data) => ({ ...data, [name]: value }))
	}

	const onLogin = async (event) => {
		event.preventDefault()
		let newUrl = url
		if (currentState === "Login") {
			newUrl += "/api/user/login"
		} else {
			newUrl += "/api/user/register"
		}

		const responce = await axios.post(newUrl, data)
		if (responce.data.success) {
			setToken(responce.data.token)
			localStorage.setItem("token", responce.data.token)
			setShowLogin(false)
		} else {
			alert(responce.data.message)
		}
	}

	return (
		<div className="login-popup">
			<form
				onSubmit={onLogin}
				className="login-popup-container"
			>
				<div className="login-popup-title">
					<h2>{currentState}</h2>
					<img
						onClick={() => setShowLogin(false)}
						src={assets.cross_icon}
						alt=""
					/>
				</div>
				<div className="login-popup-inputs">
					{currentState === "Login" ? (
						<></>
					) : (
						<input
							name="name"
							onChange={onChangeHandler}
							value={data.name}
							type="text"
							placeholder="Your name"
							required
						/>
					)}

					<input
						name="email"
						onChange={onChangeHandler}
						value={data.email}
						type="email"
						placeholder="Your email"
						required
					/>
					<input
						name="password"
						onChange={onChangeHandler}
						value={data.password}
						type="password"
						placeholder="password"
						required
					/>
				</div>
				<button type="submit">
					{currentState === "Sign Up" ? "Create account" : "Login"}
				</button>
				<div className="login-popup-condition">
					<input
						type="checkbox"
						required
					/>
					<p>By continuing , I agree to the terms of use & pravicy policy</p>
				</div>
				{currentState === "Login" ? (
					<p>
						Create a new account?{" "}
						<span onClick={() => setCurrentState("Sign Up")}>Click here</span>
					</p>
				) : (
					<p>
						Already have an account{" "}
						<span onClick={() => setCurrentState("Login")}>Login here</span>
					</p>
				)}
			</form>
		</div>
	)
}

export default LoginPopu
