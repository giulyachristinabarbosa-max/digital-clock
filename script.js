// Função que adiciona um zero à esquerda se o número tiver só 1 dígito
// Exemplo: 7 -> "07"
function pad(n) {
  return String(n).padStart(2, "0");
}

// Pegamos os elementos do HTML onde vamos mostrar a hora e a data
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

// Listas com nomes dos dias da semana e dos meses
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];

// Função que atualiza a hora e a data
function update() {
  const now = new Date(); // pega a data e hora atuais

  // Extrai horas, minutos e segundos já com zero à esquerda
  const h = pad(now.getHours());
  const m = pad(now.getMinutes());
  const s = pad(now.getSeconds());

  // Atualiza o elemento da hora
  timeEl.textContent = `${h}:${m}:${s}`;

  // Pega o dia da semana, dia do mês, mês e ano
  const wd = weekdays[now.getDay()];
  const d = now.getDate();
  const mo = months[now.getMonth()];
  const y = now.getFullYear();

  // Atualiza o elemento da data
  dateEl.textContent = `${wd}, ${d} ${mo} ${y}`;
}

// Atualiza imediatamente quando a página abre
update();

// E continua atualizando a cada 1000 ms (1 segundo)
setInterval(update, 1000);
