 const languageData = {
        en: {
            welcomeMessage: "Welcome!",
            goodbyeMessage: "Goodbye!"
        },
        tr: {
            welcomeMessage: "Hoş geldiniz!",
            goodbyeMessage: "Hoşça kalın!"
        }
    }
    function selectLanguage(selectedLanguage) {
    const languageDataSet = languageData[selectedLanguage];


    if (languageDataSet) {
        const welcomeMessage = languageDataSet.welcomeMessage;
        const goodbyeMessage = languageDataSet.goodbyeMessage;

        document.getElementById('goodbyeMessage').textContent = goodbyeMessage;
        document.getElementById('welcomeMessage').textContent = welcomeMessage;
        
        localStorage.setItem('selectedLanguage', selectedLanguage)
        console.log("localden gelen veri:", selectedLanguage);

    }
    else {
        console.log("bulunamadı");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
        selectLanguage(storedLanguage);
    }
});


