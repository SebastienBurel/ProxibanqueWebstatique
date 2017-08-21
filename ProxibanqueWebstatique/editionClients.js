/**
 * 
 */


 let client = function (numero){ 

 this.numero = numero

 return client; 
 
 }
 

   function editer(client){ 
	let clients =[{"numero_conseiller":1,"numero":1,"Nom":"Burel","Prenom":"Sebastien","Ville":"Toulouse","Code_Postal":"31100","Adresse":"12 rue des rossignols","telephone":"0650211020"},{"numero_conseiller":1,"numero":2,"Nom":"Toh","Prenom":"Sin","Ville":"Tournefeuille","Code_Postal":"31170","Adresse":"12 rue Paul Valery","telephone":"0650211020"},{"numero_conseiller":1,"numero":3,"Nom":"Dupont","Prenom":"Paul","Ville":"Paris","Code_Postal":"31100","Adresse":"12 rue des rossignols","telephone":"0650211020"},{"numero_conseiller":1,"numero":4,"Nom":"Morgant","Prenom":"Charle","Ville":"Lille","Code_Postal":"31100","Adresse":"12 rue des rossignols","telephone":"0650211020"},{"numero conseiller":2,"numero":10,"Nom":"Doug","Prenom":"Paul","Ville":"Rennes","Code Postal":"31100","Adresse":"12 rue des rossignols","telephone":"0650211020"},{"numero conseiller":2,"numero":11,"Nom":"Poisson","Prenom":"Sacha","Ville":"Paris","Code Postal":"75013","Adresse":"12 rue des rossignols","telephone":"0650211020"},{"numero conseiller":2,"numero":12,"Nom":"Laiolo","Prenom":"Fanny","Ville":"Nice","Code Postal":"41000","Adresse":"12 rue des rossignols","telephone":"0650211020"},{"numero conseiller":2,"numero":13,"Nom":"Bonfoi","Prenom":"Isabelle","Ville":"Colomiers","Code Postal":"31000","Adresse":"12 rue des rossignols","telephone":"0650211020"},{"numero conseiller":2,"numero":14,"Nom":"Honnete","Prenom":"Fay","Ville":"Toulouse","Code Postal":"31100","Adresse":"12 rue des rossignols","telephone":"0650211020"}];
	
	//console.log(clients);
	for (let i=0; i < clients.length; i ++){
		let c = clients[i];
		if (client.numero == c.numero){
			console.log("Client " + c.numero + " selectionné");
		}
		else{ 
			console.log("Client non existant"); }
			
	}
		

		
let client1= new client(2);
console.log(client1.numero);
editer(client1);


		
	
   } 
