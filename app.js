    function docHtmlInner(tag, text) {
		document.getElementById(tag).innerHTML = text;
	}
	
	function calculateIMC() {
		var peso = parseFloat(document.getElementById('pesoCorporal').value);
		var altura = parseFloat(document.getElementById('altura').value);
		var resultado = peso / (altura * altura);

		if (!isNaN(resultado)) {
			docHtmlInner('result', 'Seu IMC é: ' + resultado.toFixed(2));
		} else {
			docHtmlInner('result', 'Por favor, insira valores válidos.')
		}
	}