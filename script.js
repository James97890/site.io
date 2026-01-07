    // Меню
    function toggleMenu() {
      const menu = document.getElementById('dropdownMenu');
      menu.classList.toggle('active');
    }

    function showPoem(id, type) {
      // Скрываю все тексты
      document.querySelectorAll('.poem').forEach(p => p.classList.remove('active','poem-poem','poem-story'));

      // Показываю выбранный текст
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.add('active');
      el.classList.add(type === 'poem' ? 'poem-poem' : 'poem-story');

      // Закрываю меню
      document.getElementById('dropdownMenu').classList.remove('active');

      // Скрываю welcome
      const welcome = document.getElementById('welcomeScreen');
      if (welcome) welcome.style.display = 'none';

      // Показываю контент
      const content = document.querySelector('.content');
      if (content) content.style.display = 'block';

      // Показываю кнопку хом
      const homeBtn = document.querySelector('.home-btn');
      if (homeBtn) homeBtn.style.display = 'block';

      // Меню справа от хом (убираем сдвиг)
      const menuToggle = document.querySelector('.menu-toggle');
      if (menuToggle) menuToggle.classList.remove('menu-left');

      // И показываем сам toggle (если был скрыт)
      if (menuToggle) menuToggle.style.display = 'block';

      window.scrollTo(0, 0);
    }

    function goHome() {
      const welcome = document.getElementById('welcomeScreen');
      if (welcome) welcome.style.display = 'block';

      const content = document.querySelector('.content');
      if (content) content.style.display = 'none';

      document.querySelectorAll('.poem').forEach(p => p.classList.remove('active'));

      const homeBtn = document.querySelector('.home-btn');
      if (homeBtn) homeBtn.style.display = 'none';

      const menuToggle = document.querySelector('.menu-toggle');
      if (menuToggle) {
        menuToggle.classList.add('menu-left');
        // keep toggle visible if user had opened reading before
        menuToggle.style.display = 'block';
      }

      window.scrollTo(0, 0);
    }

    function filterMenu(searchValue) {
      const items = document.querySelectorAll('.menu-item');
      const poemsSection = document.getElementById('section-poems');
      const storiesSection = document.getElementById('section-stories');
      let poemVisible = false;
      let storyVisible = false;

      searchValue = (searchValue || '').toLowerCase();
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const isVisible = text.includes(searchValue);
        item.style.display = isVisible ? 'block' : 'none';
        if (isVisible) {
          const type = item.getAttribute('data-type');
          if (type === 'poem') poemVisible = true;
          if (type === 'story') storyVisible = true;
        }
      });

      poemsSection.style.display = poemVisible ? 'block' : 'none';
      storiesSection.style.display = storyVisible ? 'block' : 'none';

      if (searchValue.trim() === '') {
        poemsSection.style.display = 'block';
        storiesSection.style.display = 'block';
      }
    }

    document.addEventListener('click', function (e) {
      const menu = document.getElementById('dropdownMenu');
      const toggle = document.querySelector('.menu-toggle');
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('active');
      }
    });

function startReading() {
  document.getElementById('dropdownMenu').classList.add('active');
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.style.display = 'block';
    menuToggle.classList.remove('menu-left');  // ← ВОТ ЭТО ДОБАВЛЕНО
  }

  const homeBtn = document.querySelector('.home-btn');
  if (homeBtn) homeBtn.style.display = 'block';

  const content = document.querySelector('.content');
  if (content) content.style.display = 'block';

  document.getElementById('dropdownMenu').classList.add('active');
}
    // Тема
    const themeBtn = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    function setTheme(dark) {
      if (dark) {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
        if (themeIcon) themeIcon.src = "https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/sun.svg";
      } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        if (themeIcon) themeIcon.src = "https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/moon.svg";
      }
    }

    themeBtn.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark-theme");
      setTheme(!isDark);
      // небольшая визуалка: класс анимации
      if (!isDark) {
        themeIcon.classList.add('rotate-sun');
        setTimeout(()=> themeIcon.classList.remove('rotate-sun'), 600);
      } else {
        themeIcon.classList.add('swing-moon');
        setTimeout(()=> themeIcon.classList.remove('swing-moon'), 600);
      }
    });

    // Устанавливаем светлую по умолчанию (как у тебя было)
    setTheme(false);

    // Если пользователь уже открыл чтение, показать toggle (если страница загружается в этом состоянии)
    document.addEventListener('DOMContentLoaded', () => {
      // сохраняем поведение начального состояния: меню-toggle и home hidden пока не нажата "Начать читать"
      // ничего не меняем здесь — оставить как в оригинале
    });
