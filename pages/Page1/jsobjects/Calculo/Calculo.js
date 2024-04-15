export default {
  calcular() {
		//Control
		if ((Input1.text.trim() === '' && Input2.text.trim() === '')) {
  	// Ambos campos están vacíos o Input2 es igual a cero, así que abrimos Modal2
  		showModal('Modal2');
		}
		else{
			showModal('Modal3');
					
					//Valores por Defecto
					var totviviUrbano=83816;//Total de Viviendas en el Sector Urbano
					var totviviRural=39170;//Total de Viviendas en el Sector Rural
					var numtotalHogares=totviviRural+totviviUrbano;
					var umOptimo=90;
					var unAceptable=80;
					
			
					//Valores a calcular
					var porcoberUrbano=0;//Porcentaje de cobertura del sector urbano
					var porcoberRural=0;//Porcentaje de cobertura del sector rural
					var totviviserdeseSolidos=0;//Total de Viviendas con servicio de recolección de desechos sólidos
			    var porcentajeCobertura=0;//Porcentaje de cobertura
			
					//Valores que se ingresan
					const hogarUrbano = parseFloat(Input1.text) //|| 0; //Número de hogares o áreas con servicio de recolección de residuos - sector urbano
					const hogarRural = parseFloat(Input2.text) //|| 1; // Número de hogares o áreas con servicio de recolección de residuos - sector rural
					
					
					//Calculo
					porcoberUrbano=(hogarUrbano/totviviUrbano)*100;
					porcoberRural=(hogarRural/totviviRural)*100;
					totviviserdeseSolidos=hogarRural+hogarUrbano;
					porcentajeCobertura=(totviviserdeseSolidos/numtotalHogares)*100;
			
					//ESCRITURA
					Text11.setText(porcoberUrbano.toFixed(2).toString());
					Text14.setText(porcoberRural.toFixed(2).toString());
					Text15.setText(totviviserdeseSolidos.toFixed(2).toString());
					Text16.setText(porcentajeCobertura.toFixed(2).toString());
			
					Text19.setText(hogarUrbano.toFixed(2).toString()); //Número de hogares o áreas con servicio de recolección de residuos - sector urbano
					Text20.setText(hogarRural.toFixed(2).toString());// Número de hogares o áreas con servicio de recolección de residuos - sector rural
					Text21.setText(hogarRural.toFixed(2).toString());//Número total de hogares o áreas elegibles
					//res = Math.round(((val1 / val2) * val3)); // Simplemente retorna el resultado del cálculo.
					//Text7.setText(res.toFixed(2).toString());
					
					switch(true){
								//case 1
							case porcentajeCobertura >= umOptimo:
							Text18.setText('ÓPTIMO')
							break;
							
							case porcentajeCobertura < unAceptable:
							Text18.setText('DÉBIL')
							break;
					}
			
			
			//PERIODICIDAD
			let fecha = new Date(DatePicker1.selectedDate);
			fecha.setDate(fecha.getDate() + 28);
			let nuevaFechaFormateada = fecha.toISOString().split('T')[0];
			
			DatePicker2.setValue(nuevaFechaFormateada);
			 // Devuelve una cadena vacía si Text5 no es "Porcentaje de cobertura"
		}
		return 0;
  }
}