function generateKort() {
    // Hent verdier fra skjemaet
    const overskrift = document.getElementById('overskrift').value;
    const tekst = document.getElementById('tekst').value;
    const bilde = document.getElementById('bilde').value;
    const tekstFarge = document.getElementById('tekstFarge').value;
    const bgFarge = document.getElementById('bgFarge').value;

    // Oppdater kortet med de valgte verdiene
    const kort = document.getElementById('kort');
    kort.innerHTML = `
        <h1 style="color: ${textColor}">${title}</h1>
        <p>${description}</p>
        <img src="${image}" alt="Valgt bilde">
    `;

    // Stil kortet
    kort.style.backgroundColor = bgColor;

    // Skjul skjemaet og vis kortet
    document.getElementById('julekortDiv').style.display = 'none';
    document.getElementById('kort').style.display = 'block';
}