const create = (id, cat, title, text) => ({ id, category: cat, title, text });

const items = [
    create(1, 'general', 'Игрок не отвечает', 'Уведомляем вас о том, что в случае отсутствия ответа либо какой-либо иной активности с вашей стороны в данном чате в течение ближайшего времени\nадминистрация будет вынуждена закрыть текущее обращение без дальнейшего рассмотрения и возможности апелляции.'),
    create(2, 'general', 'Кто-то другой играл на STEAM аккаунте', 'Обращаем ваше внимание, что пользователь несет полную ответственность за все действия,\nсовершённые с использованием принадлежащей ему учётной записи, а также за обеспечение\nбезопасности своего компьютера и доступа.\nДаже в случае, если действия, повлекшие нарушение правил проекта, были совершены третьими\nлицами, использовавшими вашу учетную запись, данное обстоятельство не освобождает вас от<br> ответственности.\n\nВ связи с тем, что факт нарушения правил проекта CYBERSHOKE зафиксирован именно на данной\nучетной записи, администрация не имеет возможности снять текущую блокировку.\nОснованием для принятия соответствующих мер являются правила проекта CYBERSHOKE, с которыми\nпользователь соглашается при регистрации и использовании сервиса:\nhttps://cybershoke.net/learn/181.\n\nЕсли у вас не осталось вопросов, пожалуйста, закройте обращение самостоятельно через кнопку\nили оно будет закрыто автоматически.\nВсего доброго!'),
    create(3, 'general', 'Игрок не отвечает', 'текст\nшаблона'),
    create(4, 'general', 'Игрок не отвечает', 'текст\nшаблона'),
    create(5, 'general', 'Игрок не отвечает', 'текст\nшаблона'),
    create(6, 'general', 'Игрок не отвечает', 'текст\nшаблона'),
    create(7, 'general', 'Игрок не отвечает', 'текст\nшаблона'),
    create(8, 'general', 'Игрок не отвечает', 'текст\nшаблона'),
    create(9, 'general', 'Игрок не отвечает', 'текст\nшаблона'),
    create(10, 'general', 'Игрок не отвечает', 'текст\nшаблона'),
    create(11, 'general', 'Игрок не отвечает', 'текст\nшаблона'),
    create(12, 'general', 'Игрок не отвечает', 'текст\nшаблона'),
    create(14, 'ban', 'toggle', 'код\nфункции'),
    create(15, 'ban', 'toggle', 'код\nфункции'),
    create(16, 'ban', 'toggle', 'код\nфункции'),
    create(17, 'player', 'git', 'команды\nтерминала'),
    create(18, 'player', 'git', 'команды\nтерминала'),
    create(19, 'player', 'git', 'команды\nтерминала'),
    create(20, 'other', '123', '321'),
    create(21, 'other', '123', '321'),
    create(22, 'other', '123', '321'),
];

const container = document.getElementById('card');
const filterBtns = document.querySelectorAll('.sidebtn');

function renderCards(data) {
    container.innerHTML = ''; 

    if (data.length === 0) return;
    data.forEach(item => {
        const cardHtml = `
            <div class="cards d-f a-c f-r">
                <div class="text d-f f-c">
                    <p class="text1">${item.title}</p>
                    <p class="text2">${item.text}</p>
                </div>
                <div class="copydiv a-c d-f f-r">
                    <button class="copybtn d-f a-c">Копировать</button>
                    <button class="copybtn d-f a-c">Отступ</button>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    });

    const newCards = container.querySelectorAll('.cards');
    newCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible'); 
        }, index * 30); 
    });
}

function filterItems(event) {
    const clickedBtn = event.currentTarget;

    if (clickedBtn.classList.contains('active')) {
        return;
    }

    const selectedCategory = clickedBtn.dataset.category;
    if (!selectedCategory) return;

    filterBtns.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');

    const filteredData = items.filter(item => item.category === selectedCategory);
    renderCards(filteredData);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', filterItems);
});

if (filterBtns.length > 0) {
    filterBtns[0].click(); 
}

    
