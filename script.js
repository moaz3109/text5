document.addEventListener("DOMContentLoaded", async function() {
    const surahList = document.getElementById("surah-list");
    const audioPlayer = document.getElementById("audio-player");

    try {
        // جلب قائمة السور من API
        const response = await fetch("https://api.alquran.cloud/v1/surah");
        const data = await response.json();
        const surahs = data.data;

        surahs.forEach(surah => {
            const surahElement = document.createElement("div");
            surahElement.classList.add("surah");
            surahElement.textContent = `${surah.number}. ${surah.englishName} (${surah.name})`;
            surahElement.addEventListener("click", () => playSurah(surah.number));
            surahList.appendChild(surahElement);
        });
    } catch (error) {
        console.error("Error fetching surahs:", error);
    }

    async function playSurah(surahNumber) {
        try {
            // جلب التلاوات الصوتية للسورة من API
            const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.shaarawy`);
            const data = await response.json();
            const ayahs = data.data.ayahs;

            // تشغيل الآيات واحدة تلو الأخرى
            let currentAyahIndex = 0;
            const playNextAyah = () => {
                if (currentAyahIndex < ayahs.length) {
                    audioPlayer.src = ayahs[currentAyahIndex].audio;
                    audioPlayer.play();
                    currentAyahIndex++;
                }
            };

            audioPlayer.onended = playNextAyah;
            playNextAyah();

        } catch (error) {
            console.error("Error fetching surah audio:", error);
        }
    }
});
document.addEventListener("DOMContentLoaded", async function() {
    const surahList = document.getElementById("surah-list");
    const audioPlayer = document.getElementById("audio-player");

    try {
        // جلب قائمة السور من API
        const response = await fetch("https://api.alquran.cloud/v1/surah");
        const data = await response.json();
        const surahs = data.data;

        surahs.forEach(surah => {
            const surahElement = document.createElement("div");
            surahElement.classList.add("surah");
            surahElement.textContent = `${surah.number}. ${surah.englishName} (${surah.name})`;
            surahElement.addEventListener("click", () => playSurah(surah.number));
            surahList.appendChild(surahElement);
        });
    } catch (error) {
        console.error("Error fetching surahs:", error);
    }

    async function playSurah(surahNumber) {
        try {
            // جلب التلاوات الصوتية للسورة من API
            const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.abdulbasitmurattal`);
            const data = await response.json();
            const ayahs = data.data.ayahs;

            // تشغيل الآيات واحدة تلو الأخرى
            let currentAyahIndex = 0;
            const playNextAyah = () => {
                if (currentAyahIndex < ayahs.length) {
                    audioPlayer.src = ayahs[currentAyahIndex].audio;
                    audioPlayer.play();
                    currentAyahIndex++;
                }
            };

            audioPlayer.onended = playNextAyah;
            playNextAyah();

        } catch (error) {
            console.error("Error fetching surah audio:", error);
        }
    }
});
