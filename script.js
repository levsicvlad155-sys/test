const mainNavButtons = [
    { id: 1, title: "Шаблоны", targetPage: "templates"},
    { id: 2, title: "Конструктор", targetPage: "constructor"},
    { id: 3, title: "Настройки", targetPage: "settings"}
];

const categoryButtons = [
    { id: 1, title: "Общее", targetCategory: "general"},
    { id: 2, title: "Разбан", targetCategory: "ban"},
    { id: 3, title: "Жб на игрока", targetCategory: "player"},
    { id: 4, title: "Другое", targetCategory: "other"}
];

const constructorInsertButtons = [
    { id: 1, title: "1", insertText: "1\n" },
    { id: 2, title: "2", insertText: "2\n" },
    { id: 3, title: "3", insertText: "3\n" },
    { id: 4, title: "3", insertText: "3\n" },
    { id: 5, title: "3", insertText: "3\n" },
    { id: 6, title: "3", insertText: "3\n" },
    { id: 7, title: "3", insertText: "3\n" },
    { id: 8, title: "3", insertText: "3\n" },
    { id: 9, title: "3", insertText: "3\n" },
    { id: 10, title: "3", insertText: "3\n" },
    { id: 11, title: "3", insertText: "3\n" }
];

const templatesData = [
    { id: 1, category: "general", title: "Игрок не отвечает", text: "Уведомляем вас о том, что в случае отсутствия ответа либо какой-либо иной активности с вашей стороны в данном чате в течение ближайшего времени\nадминистрация будет вынуждена закрыть текущее обращение без дальнейшего рассмотрения и возможности апелляции." },
    { id: 2, category: "general", title: "Кто-то другой играл на STEAM аккаунте", text: "Обращаем ваше внимание, что пользователь несет полную ответственность за все действия,\nсовершённые с использованием принадлежащей ему учётной записи, а также за обеспечение\nбезопасности своего компьютера и доступа.\nДаже в случае, если действия, повлекшие нарушение правил проекта, были совершены третьими\nлицами, использовавшими вашу учетную запись, данное обстоятельство не освобождает вас от\nответственности.\n\nВ связи с тем, что факт нарушения правил проекта CYBERSHOKE зафиксирован именно на данной\nучетной записи, администрация не имеет возможности снять текущую блокировку.\nОснованием для принятия соответствующих мер являются правила проекта CYBERSHOKE, с которыми\nпользователь соглашается при регистрации и использовании сервиса:\nhttps://cybershoke.net/learn/181.\n\nЕсли у вас не осталось вопросов, пожалуйста, закройте обращение самостоятельно через кнопку\nили оно будет закрыто автоматически.\nВсего доброго!" },
    { id: 3, category: "general", title: "Просит ник админа", text: "Администрация проекта не раскрывает информацию о конкретных сотрудниках или модераторах,\nприменивших меры наказания, в целях соблюдения внутренней политики конфиденциальности и\nобеспечения безопасности представителей администрации.\n\nПри этом все санкции выносятся исключительно на основании действующих правил проекта и\nзафиксированных нарушений. Личность администратора, принявшего решение, не влияет на\nправомерность и обоснованность применённой меры наказания." },
    { id: 4, category: "general", title: "Почему нет чата поддержки на сайте", text: "Здравствуйте. Виджет поддержки защищен системой cloudflare, айпи адреса которой могут\nблокировать некоторые провайдеры. Также виджет может не отображаться из-за расширений\nформата AD block/guard, которые также могут быть встроены в сам браузер.\nВы можете обратиться к нам на нашу почту: support@cybershoke.net" },
    { id: 5, category: "general", title: "Дальнейший диалог не приведет к разблокировке", text: "Дальнейший диалог не приведёт к разблокировке аккаунта. Вынесенный вердикт является\nокончательным и не подлежит обжалованию или дальнейшей апелляции. Данный чат будет\nзакрыт в течение нескольких минут, так как вы уже получили развёрнутый ответ на своё обращение.\nВсего доброго!" },
    { id: 6, category: "ban", title: "Приветствие", text: "Доброго времени суток!\nСпасибо за обращение в поддержку CYBERSHOKE.\n\nНам потребуется некоторое время, чтобы проверить информацию и разобраться в ситуации.\nПожалуйста, ожидайте — мы напишем в чат по итогам проверки." },
    { id: 7, category: "ban", title: "Нужны steam-аккаунты", text: "Для проведения проверки и объективного рассмотрения апелляции вам необходимо предоставить\nссылки на все Steam аккаунты, использованные вами когда-либо, включая аккаунты, используемые в настоящий момент." },
    { id: 8, category: "ban", title: "Бан остается", text: "Мы проверили информацию касательно вашей блокировки.\n\nПо итогам проверки мы не выявили ошибок со стороны модерации, блокировка выдана корректно и остаётся в силе.\n\nЕсли у вас не осталось вопросов, пожалуйста, закройте обращение самостоятельно через кнопку или оно будет закрыто автоматически.\nВсего доброго!" },
    { id: 9, category: "ban", title: "Бан снят", text: "Мы проверили информацию касательно вашей блокировки.\n\nПо итогам проверки нами было принято решение снять блокировку.\nПриносим извинения за доставленные неудобства и потраченное время.\n\nЕсли у вас не осталось вопросов, пожалуйста, закройте обращение самостоятельно через кнопку или оно будет закрыто автоматически.\nВсего доброго!" },
    { id: 10, category: "ban", title: "Давняя блокировка", text: "Мы проверили информацию касательно вашей блокировки.\n\nУвы, но давние блокировки мы не снимаем и не апеллируем. Вам остаётся только ожидать окончания блокировки.\n\nМаксимальный срок подачи апелляции для банов за использование запрещённого ПО составляет 7 дней.\nВ случае бана за отказ от проверки на читы у вас есть максимум 4 часа на подачу апелляции.\nПравила проекта — https://cybershoke.net/ru/learn/181.\n\nДата разблокировки - xx.xx.xxxx.\n\nЕсли у вас не осталось вопросов, пожалуйста, закройте обращение самостоятельно через кнопку или оно будет закрыто автоматически.\nВсего доброго!" },
    { id: 11, category: "ban", title: "Верная блокировка", text: "Мы проверили информацию касательно вашей блокировки.\n\nМы не снимаем верно выданные баны, блокировка выдана корректно и остаётся в силе,\nожидайте окончания блокировки.\n\nДата разблокировки - xx.xx.xxxx.\n\nЕсли у вас не осталось вопросов, пожалуйста, закройте обращение самостоятельно через кнопку или оно будет закрыто автоматически.\nВсего доброго!" },
    { id: 12, category: "player", title: "Тест3", text: "3" },
    { id: 13, category: "other", title: "Тест4", text: "4" }
];

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}


const app = document.getElementById("app");

let currentPage = localStorage.getItem("savedPage") || "templates";
let currentCategory = localStorage.getItem("savedCategory") || "general";
let isFirstRun = true;

function renderApp() {
    app.innerHTML = ""; 

    let navBarHTML = "";
    for (let i = 0; i < mainNavButtons.length; i++) {
        let item = mainNavButtons[i];
        let isActive = item.targetPage === currentPage ? 'active' : '';
        navBarHTML += `<button data-page="${item.targetPage}" class="${isActive}">${item.title}</button>`; 
    }
    app.innerHTML += `<div class="nav-bar a-c d-f f-r">${navBarHTML}</div>`;

    const contentArea = document.createElement('div');
    contentArea.className = 'page';
    app.appendChild(contentArea);

    if (currentPage === "templates") {
        
        let categoryBarHTML = "";
        for (let i = 0; i < categoryButtons.length; i++) {
            let item = categoryButtons[i];
            let isActive = item.targetCategory === currentCategory ? 'active' : '';
            categoryBarHTML += `<button data-category="${item.targetCategory}" class="${isActive}">${item.title}</button>`;
        }
        
        contentArea.innerHTML += `<div class="category-bar d-f a-c f-r">${categoryBarHTML}</div>`;

        const grid = document.createElement('div');
        grid.className = 'templates-grid d-f a-c f-c';
        contentArea.appendChild(grid);

        const filteredTemplates = templatesData.filter(template => template.category === currentCategory);

        for (let i = 0; i < filteredTemplates.length; i++) {
            let t = filteredTemplates[i];
            setTimeout(() => {
                grid.insertAdjacentHTML('beforeend', `
                    <div class="template-card d-f a-c f-r animated-content">
                        <div class="text d-f a-c f-c">
                            <p class="text1">${t.title}</p>
                            <p class="text2">${t.text}</p>
                        </div>
                        <div class="btndiv d-f a-c f-r">
                            <button class="copy-btn" data-text="${t.text}">Копировать</button>
                            <button class="indent-btn" data-text="${t.text}">Отступ</button>
                        </div>    
                    </div>
                `);
            }, i * 30);
        }

    } else if (currentPage === "constructor") {
    contentArea.innerHTML = `
        <div class="constructor-page f-c d-f">
            <textarea id="constructorArea" placeholder="Добавляй" class="animated-content"></textarea> 
            <div class="btn-flex d-f f-c">
                <div id="btndata-div" class="animated-content" style="animation-delay: 300ms"></div>
                <div class="btndiv2 a-c f-r d-f animated-content" style="animation-delay: 500ms">
                    <button id="copydata" class="copy-btn">Копировать</button>
                    <button id="clear" class="copy-btn">Очистить</button>
                    <button id="otstup" class="copy-btn">Отступ</button>
                </div>
            </div>  
        </div>
    `;

    const btnContainer = document.getElementById('btndata-div');
    const area = document.getElementById('constructorArea');


    if (btnContainer) {
        constructorInsertButtons.forEach((item) => {
            const btn = document.createElement('button');
            btn.className = 'copy-btn';
            btn.innerText = item.title;

            btn.onclick = () => {
                area.value += item.insertText;
                
            };

            btnContainer.appendChild(btn);
        });
    }
    } else if (currentPage === "settings") {
    const settingsGrid = document.createElement('div');
    settingsGrid.className = 'templates-grid d-f a-c f-c';
    contentArea.appendChild(settingsGrid);

        settingsGrid.innerHTML = `
            <div class="template-card d-f a-c f-r animated-content">
                <div class="text d-f a-c f-c">
                    <p class="text1">Тема</p>
                    <p class="text2">Включить светлую тему</p>
                </div>
                <label class="radio-container">
                    <input type="checkbox" id="theme-toggle">
                    <span class="checkmark"></span>
                </label>   
            </div>
        `;

    const themeToggle = document.getElementById('theme-toggle');

    if (document.body.classList.contains('light-theme')) {
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('light-theme');

        if (document.body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
    }
}


app.addEventListener('click', function(event) {
    const target = event.target;

    if (target.closest('.nav-bar button')) {
        currentPage = target.getAttribute('data-page');
        localStorage.setItem("savedPage", currentPage);
        renderApp();
    }

    if (event.target.closest('.category-bar button')) {
        const clickedCategory = event.target.getAttribute('data-category');

        if (clickedCategory === currentCategory) {
            return;
        }

        currentCategory = clickedCategory;
        localStorage.setItem("savedCategory", currentCategory);
        renderApp();
    }
    
    if (target.classList.contains('copy-btn')) {
        const textToCopy = target.getAttribute('data-text');
        navigator.clipboard.writeText(textToCopy);
    }

    if (target.classList.contains('indent-btn')) {
        const textToCopy = target.getAttribute('data-text');
        const indentedText = `ㅤ\nㅤ\n${textToCopy}`;
        navigator.clipboard.writeText(indentedText);
    }
});

renderApp();
















    
