function getIdStagiaire() {
    var idStagiaire = parseInt(localStorage.getItem("MaxID")) || 1;
    localStorage.setItem("MaxID", idStagiaire + 1);
    return idStagiaire;
}
loadData();
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
        var idStagiaire = getIdStagiaire();
        AddStagiaire(idStagiaire, nom, institut, service, false);
        saveData(idStagiaire, nom, institut, service);
    }
}

function AddStagiaire(idStagiaire, nom, institut, service, incrementId = false) {
    var tbody = document.getElementById("tb1");
    var ligne = tbody.insertRow();
    ligne.innerHTML =   '<td>' + idStagiaire + '</td>' +
                        '<td>' + nom + '</td>' +
                        '<td>' + institut + '</td>' +
                        '<td>' + service + '</td>' +
                        '<td><a href="#" onclick="DeleteStagiaire(this)" class="btn btn-danger">Supprime</a></td>';

}

function DeleteStagiaire(span) {
    var row = span.parentNode.parentNode;
    var idStagiaire = parseInt(row.cells[0].textContent); // Assuming the ID is in the first cell
    row.remove();

    var existingEntries = JSON.parse(localStorage.getItem("stagiaires")) || [];
    var updatedEntries = existingEntries.filter(function(entry) {
        return entry.idStagiaire !== idStagiaire;
    });
    localStorage.setItem("stagiaires", JSON.stringify(updatedEntries));
}

function saveData(idStagiaire, nom, institut, service) {
    var existingEntries = JSON.parse(localStorage.getItem("stagiaires")) || [];
    var entry = {
        idStagiaire: idStagiaire,
        nom: nom,
        institut: institut,
        service: service
    };
    existingEntries.push(entry);
    localStorage.setItem("stagiaires", JSON.stringify(existingEntries));
}

function loadData() {
    var existingEntries = JSON.parse(localStorage.getItem("stagiaires")) || [];
    var maxId = 0;
    existingEntries.forEach(function(entry) {
        if (entry.id > maxId) {
            maxId = entry.id;
        }
        AddStagiaire(entry.idStagiaire,entry.nom, entry.institut, entry.service);
    });
    // Set the idStagiaire to the maximum ID found in the database
    localStorage.setItem("idStagiaire", maxId + 1);
}