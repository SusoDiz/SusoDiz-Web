document.addEventListener('DOMContentLoaded', () => {
    const toggleModeButton = document.getElementsByClassName('alternarModo')[0];

    const diurno = `<svg x="0px" y="0px" width="30" height="25" viewBox="0 0 30 30"><path d="M12 26c0 1.105.895 2 2 2 0 .552.448 1 1 1s1-.448 1-1c1.105 0 2-.895 2-2v-1h-6V26zM15 3c-4.971 0-9 4.029-9 9 0 5 4 7 6 11h6c2-4 6-6 6-11C24 7.029 19.971 3 15 3z" fill="#000000"></path></svg>`;

    const savedMode = localStorage.getItem('colorMode');
    if (savedMode) {
        document.body.classList.remove('modo-nocturno', 'modo-diurno');
        document.body.classList.add(savedMode);
        updateSvgFill(savedMode);
        updateButtonEmoji(savedMode);
    }

    toggleModeButton.addEventListener('click', toggleMode);

    function toggleMode() {
        let newMode;
        if (document.body.classList.contains('modo-nocturno')) {
            newMode = 'modo-diurno';
        } else {
            newMode = 'modo-nocturno';
        }
        document.body.classList.remove('modo-nocturno', 'modo-diurno');
        document.body.classList.add(newMode);
        updateSvgFill(newMode);
        updateButtonEmoji(newMode);
        localStorage.setItem('colorMode', newMode);
    }

    function updateSvgFill(mode) {
        const fillColor = mode === 'modo-nocturno' ? '#ffffff' : '#000000';
        const githubLogo = document.body.querySelector('.logo-github');
        const twitterLogo = document.body.querySelector('.logo-twitter');
        const emailLogo = document.body.querySelector('.logo-email');

        if (githubLogo) githubLogo.setAttribute('fill', fillColor);
        if (twitterLogo) twitterLogo.setAttribute('fill', fillColor);
        if (emailLogo) emailLogo.setAttribute('fill', fillColor);
    }

    function updateButtonEmoji(mode) {
        const emoji = mode === 'modo-nocturno' ? `🌙` : `${diurno}`;
        toggleModeButton.innerHTML = emoji;
    }

});