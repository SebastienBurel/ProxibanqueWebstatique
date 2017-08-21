

let jsonClients='[{"numero conseiller":1,"numero":1,"Nom":"Burel","Prenom":"Sebastien","Ville":"Toulouse","Code Postal":"31100","Adresse":"12 rue des rossignols","telephone":"0650211020"}]';

let clients = JSON.parse(jsonClients);
for(let i=0; i < clients.length; i ++){
	let client = clients[i];
	console.log("num conseiller:"+client["numero conseiller"] )
	console.log("numero:"+client.numero);
	console.log("nom:"+client.Nom);
}

