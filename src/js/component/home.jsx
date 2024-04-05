import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navBar";
import JumboTrom from "../jumbotron";
import Card from "./card";
import FooterPro from "./footerPro";


const datos = [{ nombre: "irene zoe", descripcion: "Como escritora y cineasta se doctoró en Literatura por la Universidad de Columbia", imagen: "https://e00-elmundo.uecdn.es/elmundo/imagenes/2013/01/29/espana/1359456471_0.jpg" },
{ nombre: "Julieta Gracián", descripcion: "conocida como Julieta, es una cantante y compositora española", imagen: "https://i.pinimg.com/originals/6d/90/fa/6d90fa0a7448dc6f14918aa2122c8627.png" },
{ nombre: "Cai Xukun", descripcion: "es un popular cantante, actor, rapero, bailarín y compositor chino", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cai_Xukun%2C_28_November_2018_%284%29.jpg/200px-Cai_Xukun%2C_28_November_2018_%284%29.jpg" },
{ nombre: "Marco Borsato", descripcion: "Comenzó a cantar en italiano, pero en 1994 cambió al idioma neerlandés.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Marco_Borsato_2016.tif/lossy-page1-1920px-Marco_Borsato_2016.tif.jpg" }
];


//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">
				<div className="row">
					<JumboTrom />
				</div>
				<div className="row">
					{datos.map((value, index) => {
						return <Card key={index} nombre={value.nombre} descripcion={value.descripcion} ruta={value.imagen} indice={index} />
					})}
				</div>
			</div>
			<FooterPro/>


		</>


	);
};

export default Home;
