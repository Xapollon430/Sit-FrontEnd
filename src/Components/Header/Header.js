import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar, Brand, Menu, Nav, EmptyDiv } from "./HeaderCss";
import Button from "@material-ui/core/Button";
import "./Header.css";

const useStyles = makeStyles({
	button: {
		backgroundColor: "Transparent",
		cursor: "pointer",
		overflow: "hidden",
		border: "2px solid white",
		fontWeight: "700",
		fontSize: "0.8rem",
		color: "white",
		height: "45px",
		width: "100%"
	}
});

function Header() {
	const classes = useStyles();
	let [nav, setNav] = useState(false);
	let [innerWidth, setInnerWidth] = useState(window.innerWidth);
	console.log(nav, innerWidth);
	const openNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const resizeHandler = () => {
			setInnerWidth(window.innerWidth);
		};
		let resizer = window.addEventListener("resize", resizeHandler);

		if (innerWidth > 700) {
			setNav(true);
		} else {
			setNav(false);
		}
		return () => {
			window.removeEventListener("resize", resizer);
		};
	}, [innerWidth]);

	return (
		<Navbar>
			<Brand>Sit!</Brand>
			<Menu onClick={openNav} className="fas fa-bars fa-3x"></Menu>
			<Nav className={nav === true ? "open" : "close"}>
				<Button size="small" variant="outlined" className={classes.button}>
					Find A Sitter
				</Button>
				<Button variant="outlined" className={classes.button}>
					Be A Sitter
				</Button>
				<EmptyDiv />
				<Button variant="outlined" className={classes.button}>
					Log In
				</Button>
				<Button variant="outlined" className={classes.button}>
					Sign Up
				</Button>
			</Nav>
		</Navbar>
	);
}

export default Header;
