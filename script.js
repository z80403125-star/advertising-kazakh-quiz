"use strict";

    const questions = [
      { question: "Коммерциялық жарнаманың негізгі міндеті қандай?", answers: ["Өнім не қызмет туралы хабарлау, оған қызықтыру және сатып алуға ынталандыру", "Өнімді пайдалану нұсқаулығын алмастыру", "Тек компания жаңалықтары туралы айту"], correct: 0, explanation: "Коммерциялық жарнама ұсыныс туралы хабарлап, сатып алу шешіміне ықпал етеді." },
      { question: "Әлеуметтік жарнамаға қай сипаттама сай келеді?", answers: ["Қайырымдылық шарасына қатысушыларға арналған жеңілдік жарнамасы", "Қоғам үшін маңызды мәселелерге назар аударатын хабарламалар", "Әлеуметтік желіде жарияланған кез келген жарнама"], correct: 1, explanation: "Әлеуметтік жарнама қауіпсіздік, денсаулық немесе табиғатты қорғау сияқты маңызды мәселелерді көтереді." },
      { question: "Теледидар, радио, баспасөз және сыртқы жарнама құралдары арқылы таратылатын жарнама қалай аталады?", answers: ["Серіктестік жарнама", "Контекстік жарнама", "Дәстүрлі жарнама"], correct: 2, explanation: "Дәстүрлі жарнама арналарына теледидар, радио, газет-журналдар және сыртқы жарнама жатады." },
      { question: "Мақсатты аудитория дегеніміз кімдер?", answers: ["Жарнамалық хабарлама арналған адамдар", "Жарнама үлгісін жасайтын қызметкерлер", "Жарнаманы көргендердің бәрі"], correct: 0, explanation: "Мақсатты аудитория — өнім, қызмет немесе жарнамалық хабарлама арналған адамдар тобы." },
      { question: "Жарнаманың сатып алушыға беретін негізгі пайдасының бірі қандай?", answers: ["Өнімнің бәріне бірдей сай келетініне кепілдік беру", "Ұсыныстар туралы біліп, оларды салыстыруға көмектесу", "Өнімді зерттеу қажеттілігін толық жою"], correct: 1, explanation: "Жарнама ұсыныстар туралы хабарлап, оларды салыстыруға көмектеседі." },
      { question: "Цифрлық жарнаманың ерекшелігі неде?", answers: ["Ол тек мобильді қолданбаларда жарияланады", "Оны бір адамға бір-ақ рет көрсетуге болады", "Ол веб-сайттар мен қолданбалар сияқты цифрлық арналар арқылы таратылады"], correct: 2, explanation: "Цифрлық жарнама веб-сайттар, іздеу жүйелері мен қолданбалар сияқты интернет арналары арқылы таратылады." },
      { question: "Жарнамадағы әлеуметтік дәлел дегеніміз не?", answers: ["Өнім туралы басқа адамдардың пікірлері мен ұсыныстары", "Жарнаманың әлеуметтік желілерде жарияланғанын растау", "Жарнама қызметі туралы заңдардың тізімі"], correct: 0, explanation: "Пікірлер, бағалаулар және ұсыныстар аудиторияға басқа адамдардың тәжірибесін түсінуге және сенім орнатуға көмектеседі." },
      { question: "Фильмнің немесе телехикаяның мазмұнына енгізілген жарнама қалай аталады?", answers: ["Баннерлік жарнама", "Өнімді сюжетке кіріктіру", "Электрондық хаттар тізімі"], correct: 1, explanation: "Өнімді сюжетке кіріктіру — тауарды немесе брендті фильм, сериал, ойын не басқа туындының мазмұнында көрсету." },
      { question: "Компаниялар имидждік жарнаманы не үшін пайдаланады?", answers: ["Тұтынушыларға қызмет көрсетудің орнына", "Тек бір тауардың бағасын хабарлау үшін", "Бренд бейнесін қалыптастыру немесе нығайту үшін"], correct: 2, explanation: "Имидждік жарнама адамдарға брендті танып, оны белгілі бір құндылықтармен немесе тәжірибемен байланыстыруға көмектеседі." },
      { question: "Сыртқы жарнамаға қай мысал жатады?", answers: ["Жол бойындағы жарнама тақтасы", "Сатып алушыға арналған жеке хат", "Подкаст ішіндегі жарнама"], correct: 0, explanation: "Сыртқы жарнама ғимараттан тыс жерде, мысалы, жарнама тақтасында, қала экранында немесе аялдамада орналастырылады." },
      { question: "Жарнамалық ұранның мақсаты қандай?", answers: ["Сатушы мен сатып алушы арасындағы келісімнің барлық шартын баяндау", "Бренд идеясын немесе уәдесін қысқаша жеткізу", "Өнімнің барлық сипаттамасын көрсету"], correct: 1, explanation: "Жақсы ұран жарнаманың немесе брендтің негізгі идеясын қысқа әрі есте қаларлық түрде жеткізеді." },
      { question: "Жарнамадағы әрекетке шақыру дегеніміз не?", answers: ["Компанияның құрылу тарихын толық баяндау", "Бәсекелес өнімдердің тізімін беру", "Келесі қадамды ұсыну, мысалы, «толығырақ біліңіз» деп шақыру"], correct: 2, explanation: "Әрекетке шақыру аудиторияға келесі қадамды ұсынады: сайтқа кіру, жазылу немесе қосымша мәлімет алу." },
      { question: "Компаниялар арасындағы бәсекеде жарнама қандай рөл атқарады?", answers: ["Ұсыныстардың айырмашылығы мен артықшылығын көрсетуге көмектеседі", "Бағаларды автоматты түрде бірдей етеді", "Өнімді жақсарту қажеттілігін жояды"], correct: 0, explanation: "Жарнама компанияларға өз ерекшелігін көрсетіп, сатып алушыларға ұсыныстарды салыстыруға мүмкіндік береді." },
      { question: "Интернеттегі контекстік жарнама дегеніміз не?", answers: ["Өнім қаптамасына басылған жарнама", "Бет мазмұнына немесе іздеу сұрауына сәйкес көрсетілетін жарнама", "Тек автордың достарына көрсетілетін хабарлама"], correct: 1, explanation: "Контекстік жарнама пайдаланушының іздеу сұрауына, қызығушылығына немесе қаралып отырған беттің мазмұнына қарай көрсетіледі." },
      { question: "Жарнаманың шынайы әрі жаңылыстырмайтын болуы неге маңызды?", answers: ["Барлық жарнама бірдей болуы үшін", "Жарнамада брендті көрсетпеу үшін", "Адамдар негізделген шешім қабылдап, сенімін сақтауы үшін"], correct: 2, explanation: "Шынайы ақпарат аудиторияны құрметтейді, сенімді сақтайды және негізделген шешім қабылдауға көмектеседі." },
      { question: "Жарнаманың қамту ауқымы нені көрсетеді?", answers: ["Жарнамалық хабарламаны көрген адамдар санын", "Өнімді өндіруге жұмсалған қаражатты", "Жарнаманың секундпен өлшенетін ұзақтығын"], correct: 0, explanation: "Қамту ауқымы таңдалған кезеңде жарнаманы көрген бірегей адамдар санын көрсетеді." },
      { question: "Өнімге риза болған адамның оны басқаларға тегін ұсынуы қалай аталады?", answers: ["Мақсат қою", "Ауызша тарату", "Жарнаманы жоспарлау"], correct: 1, explanation: "Ауызша тарату — адамдардың өз тәжірибесіне сүйеніп, өнім туралы пікір мен ұсыныс алмасуы." },
      { question: "Жарнаманы әртүрлі аудитория мен арнаға неге бейімдейді?", answers: ["Өнімнің сапасын өзгерту үшін", "Сатып алу шарттарын жасыру үшін", "Хабарламаның нақты аудиторияға түсінікті әрі маңызды болуы үшін"], correct: 2, explanation: "Адамдардың қажеттілігі мен ақпарат алатын арналары әртүрлі, сондықтан жарнаманы соған бейімдеу хабарды түсінікті етеді." },
      { question: "Жарнама науқанының тиімділігін бағалауға не көмектеседі?", answers: ["Алдын ала таңдалған көрсеткіштер, мысалы, қамту ауқымы, өтінімдер немесе сатылымдар", "Тек жарнамадағы түстер саны", "Кездейсоқ бір адамның пікірі"], correct: 0, explanation: "Науқан нәтижесі оның мақсатына сай көрсеткіштермен бағаланады: қамту ауқымы, өтінімдер немесе сатылымдар." },
      { question: "Жарнамаға жауапкершілікпен қарау дегеніміз не?", answers: ["Назар аударту үшін орындалуы мүмкін емес нәтижеге уәде беру", "Аудиторияны құрметтеу, деректерді тексеру және хабарламаның жарнама екенін анық көрсету", "Маңызды шарттарды ұсақ әріппен жасыру"], correct: 1, explanation: "Жауапты жарнама шынайы әрі құрметті болып, адамдарға хабарламаның жарнама екенін анық түсінуге мүмкіндік береді." }
    ];

    const letters = ["А", "Б", "В"];
    const checkIcon = '<svg class="answer-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4 10 4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const crossIcon = '<svg class="answer-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    let currentQuestion = 0;
    let correctCount = 0;
    let answered = false;

    const questionCount = document.getElementById("questionCount");
    const progressBar = document.getElementById("progressBar");
    const progressTrack = document.querySelector('[role="progressbar"]');
    const questionKicker = document.getElementById("questionKicker");
    const questionText = document.getElementById("questionText");
    const answersContainer = document.getElementById("answers");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("nextButton");
    const scoreMini = document.getElementById("scoreMini");
    const quizCard = document.getElementById("quizCard");
    const resultScreen = document.getElementById("resultScreen");

    function renderQuestion() {
      const item = questions[currentQuestion];
      const displayNumber = String(currentQuestion + 1).padStart(2, "0");
      questionCount.textContent = displayNumber + " / " + questions.length;
      questionKicker.textContent = "СҰРАҚ " + displayNumber;
      questionText.textContent = item.question;
      progressBar.style.width = ((currentQuestion + 1) / questions.length * 100) + "%";
      progressTrack.setAttribute("aria-valuenow", String(currentQuestion + 1));
      answersContainer.replaceChildren();
      feedback.className = "feedback";
      feedback.replaceChildren();
      answered = false;
      nextButton.disabled = true;
      nextButton.querySelector("span").textContent = currentQuestion === questions.length - 1 ? "Нәтижені көру" : "Келесі сұрақ";

      item.answers.forEach(function (answer, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer";
        button.setAttribute("aria-label", letters[index] + ". " + answer);
        button.innerHTML = '<span class="answer-letter">' + letters[index] + '</span><span class="answer-text"></span>';
        button.querySelector(".answer-text").textContent = answer;
        button.addEventListener("click", function () { selectAnswer(index); });
        answersContainer.appendChild(button);
      });
    }

    function selectAnswer(selectedIndex) {
      if (answered) return;
      answered = true;
      const item = questions[currentQuestion];
      const isCorrect = selectedIndex === item.correct;
      const buttons = answersContainer.querySelectorAll(".answer");

      buttons.forEach(function (button, index) {
        button.disabled = true;
        if (index === item.correct) {
          button.classList.add("correct");
          button.insertAdjacentHTML("beforeend", checkIcon);
        } else if (index === selectedIndex) {
          button.classList.add("incorrect");
          button.insertAdjacentHTML("beforeend", crossIcon);
        }
      });

      if (isCorrect) {
        correctCount += 1;
        feedback.className = "feedback show good";
        feedback.innerHTML = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4 10 4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><div><strong>Дұрыс!</strong></div>';
      } else {
        feedback.className = "feedback show bad";
        feedback.innerHTML = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.7"/><path d="M10 6v4m0 3h.01" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg><div><strong>Онша емес. Дұрыс жауап: ' + letters[item.correct] + '. ' + escapeHtml(item.answers[item.correct]) + '</strong>' + escapeHtml(item.explanation) + '</div>';
      }

      scoreMini.textContent = correctCount + " / " + questions.length;
      nextButton.disabled = false;
      if (currentQuestion < questions.length - 1) {
        nextButton.focus();
      }
    }

    function escapeHtml(value) {
      return value.replace(/[&<>"']/g, function (character) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
      });
    }

    function showResults() {
      const incorrectCount = questions.length - correctCount;
      const percent = Math.round(correctCount / questions.length * 100);
      document.getElementById("scorePercent").textContent = percent + "%";
      document.getElementById("correctTotal").textContent = String(correctCount);
      document.getElementById("incorrectTotal").textContent = String(incorrectCount);
      document.getElementById("resultPoints").textContent = "Нәтиже: " + correctCount + " / " + questions.length + " ұпай";

      if (percent === 100) {
        document.getElementById("resultTitle").textContent = "Керемет нәтиже!";
        document.getElementById("resultCopy").textContent = "Сіз жарнаманы жақсы меңгергенсіз - бір қателік емес!";
      } else if (percent >= 75) {
        document.getElementById("resultTitle").textContent = "Тамаша жұмыс!";
        document.getElementById("resultCopy").textContent = "Сіз жарнаманың қалай жұмыс істейтінін жақсы түсінесіз. Осы қарқыныңыздан таймаңыз!";
      } else if (percent >= 50) {
        document.getElementById("resultTitle").textContent = "Жақсы бастама!";
        document.getElementById("resultCopy").textContent = "Сіз қазірдің өзінде көп нәрсені білесіз. Біліміңізді бекіту үшін тестті қайталаңыз..";
      } else {
        document.getElementById("resultTitle").textContent = "Көбірек білуге әлі уақыт бар!";
        document.getElementById("resultCopy").textContent = "Енді сіз жарнама туралы көбірек білесіз. Викторинаны қайталап көріңіз!";
      }

      quizCard.classList.add("finished");
      resultScreen.classList.add("show");
      document.getElementById("restartButton").focus();
    }

    nextButton.addEventListener("click", function () {
      if (!answered) return;
      if (currentQuestion === questions.length - 1) {
        showResults();
        return;
      }
      currentQuestion += 1;
      renderQuestion();
      questionText.focus({ preventScroll: true });
    });

    document.getElementById("restartButton").addEventListener("click", function () {
      currentQuestion = 0;
      correctCount = 0;
      scoreMini.textContent = "0 / " + questions.length;
      quizCard.classList.remove("finished");
      resultScreen.classList.remove("show");
      renderQuestion();
      document.getElementById("questionText").focus({ preventScroll: true });
    });

    questionText.setAttribute("tabindex", "-1");
    renderQuestion();
