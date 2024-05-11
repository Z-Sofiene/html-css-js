var idStagiaire = 1;
function Verif() {
    var nom = document.getElementById("a1").value;
    var req1 = document.getElementById("b1");
    if (nom == "") {
        req1.innerHTML = "Ce champ est obligatoire";
        req1.style.color = "red";
    } else {
        req1.innerHTML = "ok";
        req1.style.color = "green";
    }
    var institut = document.getElementById("a2").value;
    var req2 = document.getElementById("b12");
    if (institut == "") {
        req2.innerHTML = "Institut est obligatoire";
        req2.style.color = "red";
    } else {
        req2.innerHTML = "ok";
        req2.style.color = "green";
    }
    var service = document.getElementById("a3").value;
    var req3 = document.getElementById("b13");
    if (service == "") {
        req3.innerHTML = "Service est obligatoire";
        req3.style.color = "red";
    } else {
            req3.innerHTML = "ok";
            req3.style.color = "green";
        }
    if (req1.innerHTML == "ok" && req2.innerHTML == "ok" && req3.innerHTML == "ok") {
        AddStagiaire(nom,institut,service);
    }
}
function AddStagiaire(nom,institut,service) {

        var tbody = document.getElementById("tb1");
        var ligne = tbody.insertRow();
        ligne.innerHTML =   '<td>' + idStagiaire++ + '</td>' +
                            '<td>' + nom + '</td>' +
                            '<td>' + institut + '</td>' +
                            '<td>' + service + '</td>' +
                            '<td><a href="#" onclick="DeleteStagiaire(this)" class="btn btn-danger">Supprime</a></td>';
    }

    function DeleteStagiaire(span) {
        span.parentNode.parentNode.remove();
    }
