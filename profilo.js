const form = document.getElementById("profileForm");
const scheda = document.getElementById("schedaProfilo");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const cognome = document.getElementById("cognome").value;
  const eta = document.getElementById("eta").value;
  const personaggio = document.getElementById("personaggio").value;
  const manga = document.getElementById("manga").value;
  const frase = document.getElementById("frase").value;

  localStorage.setItem(
    "profilo",
    JSON.stringify({ nome, cognome, eta, personaggio, manga, frase })
  );

  document.getElementById("outNome").textContent = nome || "—";
  document.getElementById("outCognome").textContent = cognome || "—";
  document.getElementById("outEta").textContent = eta || "—";
  document.getElementById("outPersonaggio").textContent = personaggio || "—";
  document.getElementById("outManga").textContent = manga || "—";
  document.getElementById("outFrase").textContent = frase || "—";

  scheda.style.display = "block";
});

window.addEventListener("load", () => {
  const saved = JSON.parse(localStorage.getItem("profilo"));
  if (saved) {
    document.getElementById("nome").value = saved.nome;
    document.getElementById("cognome").value = saved.cognome;
    document.getElementById("eta").value = saved.eta;
    document.getElementById("personaggio").value = saved.personaggio;
    document.getElementById("manga").value = saved.manga;
    document.getElementById("frase").value = saved.frase;

    document.getElementById("outNome").textContent = saved.nome || "—";
    document.getElementById("outCognome").textContent = saved.cognome || "—";
    document.getElementById("outEta").textContent = saved.eta || "—";
    document.getElementById("outPersonaggio").textContent =
      saved.personaggio || "—";
    document.getElementById("outManga").textContent = saved.manga || "—";
    document.getElementById("outFrase").textContent = saved.frase || "—";

    scheda.style.display = "block";
  }
});
