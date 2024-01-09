function validarFormulario() {
            let campoA = document.getElementById("campoA").value;
            let campoB = document.getElementById("campoB").value;
            let mensagemDiv = document.getElementById("mensagem");

            campoA = parseFloat(campoA);
            campoB = parseFloat(campoB);

            if (campoB > campoA) {
                mensagemDiv.innerHTML = "<p>Formulário válido! B é maior que A.</p>";
                mensagemDiv.style.color = "green";
            } else {
                mensagemDiv.innerHTML = "<p>Formulário inválido! B deve ser maior que A.</p>";
                mensagemDiv.style.color = "red";
            }
        }