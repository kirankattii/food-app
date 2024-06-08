import React, { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Cart from "./components/pages/cart/Cart"
import PlaceOrder from "./components/pages/placeOrder/PlaceOrder"
import Footer from "./components/footer/Footer"
import LoginPopu from "./components/loginPopup/LoginPopu"

const App = () => {
	const [showLogin, setShowLogin] = useState(false)
	return (
		<>
			{showLogin ? <LoginPopu setShowLogin={setShowLogin} /> : <></>}
			<div className="app">
				<Navbar setShowLogin={setShowLogin} />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/cart"
						element={<Cart />}
					/>

					<Route
						path="/order"
						element={<PlaceOrder />}
					/>
				</Routes>
			</div>
			<Footer />
		</>
	)
}

export default App
