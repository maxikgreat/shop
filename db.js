const shop = {
  'Refrigerators': [
    {
      vendor: 'Sharp',
      model: 'SJ-BA10IHXI1',
      desc:'достойный представитель линейки высококачественных холодильников Sharp. Функциональный соло-агрегат - отличный вариант для кухни любого дизайна. Достаточно компактные габариты и возможность перевешивания дверок делают возможным его установку в любом месте.',
      price: 455,
      garancy: 12,
      discount: 10,
      stats: {
        'Тип холодильника': 'Двухкамерный',
        'Охлаждение холодильной камеры': 'No Frost',
        'Высота': '171.5 см.',
        'Общий объем (полезный)': '234 л',
        'Установка': 'Встраиваемый',
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'LG',
      model: 'GW-B509SEHZ',
      desc: 'Качественный двухкамерный холодильник LG GW-B509SEHZ отлично справляется с хранением продуктов питания, ведь обладает завидным общим полезным объемом в 419 л. Практичная система размораживания NoFrost, благодаря постоянной работе испарителя и вентилятора, предотвращает образование наледи на стенках камер, поскольку воздушные массы постоянно циркулируют внутри прибора равномерно охлаждая продукты внутри и предотвращая развитие вредных микроорганизмов.',
      price: 420,
      discount: 0,
      garancy: 18,
      stats: {
        'Тип холодильника': 'Двухкамерный',
        'Охлаждение холодильной камеры': 'No Frost',
        'Охлаждение морозильной камеры': 'No Frost',
        'Высота': '170.5 см.',
        'Общий объем (полезный)': '230 л',
        'Установка': 'Встраиваемый',
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Bosch',
      model: 'KGN36VL326',
      desc: 'Холодильник Bosch KGN36VL326 относится к моделям, которые разрабатывались с учетом наличия современных инноваций, которым нашлось место в данной бытовой технике. Представленная модель не требует ручного размораживания, т.к. технология NoFrost не предусматривает отложение инея или преобразование его в лед.',
      price: 600,
      discount: 20,
      garancy: 24,
      stats: {
        'Тип холодильника': 'Двухкамерный',
        'Охлаждение холодильной камеры': 'No Frost',
        'Охлаждение морозильной камеры': 'No Frost',
        'Высота': '190.5 см.',
        'Общий объем (полезный)': '310 л',
        'Установка': 'Встраиваемый',
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Siemens',
      model: 'KG39NXX316',
      desc: 'Холодильник с морозильной камерой Siemens обеспечит быстрое охлаждение и замораживание ваших продуктов. А премиальные материалы позволят ему служить долго и качественно.',
      price: 650,
      discount: 0,
      garancy: 0,
      stats: {
        'Тип холодильника': 'Двухкамерный',
        'Охлаждение холодильной камеры': 'No Frost',
        'Охлаждение морозильной камеры': 'No Frost',
        'Высота': '185.5 см.',
        'Общий объем (полезный)': '280 л',
        'Установка': 'Встраиваемый',
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Bosch',
      model: 'KGN 56VI30U',
      desc: 'Двухкамерный холодильник Bosch KGN 56VI30U с невероятно стильным дизайном и отменной функциональностью, отлично впишется в интерьер любой кухни. Класс энергопотребления в этой модели А++, потому этот холодильник не только очень удобен, но и экономичен.',
      price: 300,
      discount: 0,
      garancy: 12,
      stats: {
        'Тип холодильника': 'Двухкамерный',
        'Охлаждение холодильной камеры': 'No Frost',
        'Охлаждение морозильной камеры': 'No Frost',
        'Высота': '177.5 см.',
        'Общий объем (полезный)': '237 л',
        'Установка': 'Встраиваемый',
      },
      reviews: [],
      rating: 0,
    },
  ],
  'Vacuum Cleaners': [
    {
      vendor: 'Philips',
      model: 'FC9170',
      desc: 'Безупречные результаты уборки обеспечивает новая модель пылесоса Philips Performer. Исключительная мощность всасывания позволяет легко очистить любые поверхности от крупного мусора и мелких частиц пыли.',
      price: 105,
      discount: 5,
      garancy: 6,
      stats: {
        'Тип пылесоса': 'Классический',
        'Тип пылесборника': 'Мешок',
        'Тип уборки': 'Сухая',
        'Потребляемая мощность': '2200 Вт',
        'Объем пылесборника': '4 л',
        'Питание': 'От сети 220В',
        'Цвет': 'Черный',
        'Страна производитель': 'Германия'
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Philips',
      model: 'FC9174',
      desc: 'Новый пылесос Philips – это идеальное сочетание инновационных решений и продуманного до мелочей дизайна. Легко устраняйте любые загрязнения благодаря высокой всасывающей мощности – 500 Вт.',
      price: 120,
      discount: 0,
      garancy: 8,
      stats: {
        'Тип пылесоса': 'Классический',
        'Тип пылесборника': 'Колба',
        'Тип уборки': 'Влажная',
        'Потребляемая мощность': '2000 Вт',
        'Объем пылесборника': '1.6 л',
        'Питание': 'От сети 220В',
        'Цвет': 'Черный',
        'Страна производитель': 'Германия'
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Bosch',
      model: 'BGS2U2030',
      desc: 'Пылесос Bosch разработан профессиональными инженерами в Германии, знаменитыми своей педантичностью к качеству работы. Техника выпущена и проверена по современным технологиям, что гарантирует настоящее качество.',
      price: 140,
      discount: 10,
      garancy: 24,
      stats: {
        'Тип пылесоса': 'Классический',
        'Тип пылесборника': 'Контейнер / колба',
        'Тип уборки': 'Сухая',
        'Потребляемая мощность': '2000 Вт',
        'Объем пылесборника': '1.4 л',
        'Питание': 'От сети 220В',
        'Цвет': 'Черный',
        'Страна производитель': 'Польша'
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Samsung',
      model: 'VCC4325S3W',
      desc: 'Пылесос Samsung VCC4325S3W предоставляет максимум возможностей для поддержания идеальной чистоты в доме. Высокая мощность всасывания (350 Вт) позволяет эффективно и быстро убрать даже большую площадь. Пылесос отличается высокой маневренностью и комфортом, он оснащен современной системой фильтрации.',
      price: 200,
      discount: 40,
      garancy: 0,
      stats: {
        'Тип пылесоса': 'Классический',
        'Тип пылесборника': 'Контейнер',
        'Тип уборки': 'Сухая',
        'Потребляемая мощность': '1500 Вт',
        'Объем пылесборника': '1.2 л',
        'Питание': 'От сети 220В',
        'Цвет': 'Черный',
        'Страна производитель': 'Германия'
      },
      reviews: [],
      rating: 0,
    },
  ],
  'Microwaves': [
    {
      vendor: 'Samsung',
      model: 'MS23K3614AS',
      desc: 'Это техника современной кухни, которая сочетает в себе не только великолепный функционал, но и привлекательный внешний вид, что немаловажно. За счет выгодного цветового оформления, фактурных поверхностей корпуса и лаконичных отделочных деталей микроволновая печь идеальна в своем внешнем облике.',
      price: 80,
      discount: 10,
      garancy: 12,
      stats: {
        'Тип': 'Соло (обычная)',
        'Тип управления': 'Поворотные переключатели (электронное)',
        'Объем': '23 л',
        'Мощность СВЧ': '1150 Вт',
        'Внутреннее покрытие': 'Био-керамика',
        'Цвет': 'Серебристый'
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Samsung',
      model: 'MS23F302TAK',
      desc: 'Микроволновая печь Samsung станет стильным дополнением вашей кухни и расширит возможности приготовления полезных и вкусных блюд. В печи запрограммировано 20 разнообразных режимов для мгновенного приготовления блюд из свежих ингредиентов.',
      price: 90,
      discount: 0,
      garancy: 0,
      stats: {
        'Тип': 'С конвекцией',
        'Тип управления': 'Кнопочное с поворотным переключателем',
        'Объем': '30 л',
        'Мощность СВЧ': '1200 Вт',
        'Внутреннее покрытие': 'Био-керамика',
        'Мощность конвекции': '1800 Вт',
        'Цвет': 'Черный'
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Samsung',
      model: 'MC28H5135CK',
      desc: 'Микроволновая печь Samsung MC28H5135CK/BW уже только своим видом демонстрирует технологичность и функциональность. Элегантный дизайн включает в себя стильный корпус черного цвета, который превосходно вписывается в обстановку современной кухни.',
      price: 150,
      discount: 20,
      garancy: 24,
      stats: {
        'Тип': 'С конвекцией',
        'Тип управления': 'Кнопочное с поворотным переключателем',
        'Объем': '28 л',
        'Мощность СВЧ': '900 Вт',
        'Внутреннее покрытие': 'Био-керамика',
        'Мощность гриля': '1500 Вт',
        'Мощность конвекции': '2100 Вт',
        'Поворотный стол': 'Есть',
        'Цвет': 'Черный'
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Toshiba',
      model: 'MW2-AC25TF',
      desc: 'Микроволновая печь Toshiba MW2-AC25TF(BK) стала отличным образцом качественной техники, которая выполнена в компактном форм-факторе, предполагающем комфортное размещение на рабочей тумбе.',
      price: 120,
      discount: 0,
      garancy: 0,
      stats: {
        'Тип': 'С конвекцией',
        'Тип управления': 'Кнопочное с поворотным переключателем',
        'Объем': '25 л',
        'Мощность СВЧ': '900 Вт',
        'Внутреннее покрытие': 'Био-керамика',
        'Мощность гриля': '1150 Вт',
        'Мощность конвекции': '2100 Вт',
        'Цвет': 'Черный'
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Toshiba',
      model: 'MW2-AG23PF',
      desc: 'Микроволновая печь Toshiba MW2-AG23PF(BK) стала ярким представителем универсальной бытовой техники для кухни, которая великолепно заменила собою несколько устройств.',
      price: 75,
      discount: 0,
      garancy: 0,
      stats: {
        'Тип': 'С грилем',
        'Тип управления': 'Механическое',
        'Объем': '23 л',
        'Мощность СВЧ': '900 Вт',
        'Внутреннее покрытие': 'Эмаль',
        'Мощность гриля': '1150 Вт',
        'Цвет': 'Черный'
      },
      reviews: [],
      rating: 0,
    },
  ],
  'Washers': [
    {
      vendor: 'Beko',
      model: 'WUE5411XWW',
      desc: 'Стиральная машина Beko WUE5411XWW относится к моделям, которые занимают минимум места в комнате. За счет того, что глубина корпуса составляет всего 44 см, устройство не выпирает слишком далеко, а это дает реальную возможность существенно разгрузить пространство. Компактная стиральная машинка вмещает в себя 5 кг белья, что позволит использовать ее достаточно часто – не дожидаясь, пока скопится огромная партия содержимого.',
      price: 300,
      discount: 0,
      garancy: 0,
      stats: {
        'Загрузка белья': '5 кг',
        'Максимальная скорость отжима': '800 об/мин',
        'Тип двигателя': 'Коллекторный',
        'Глубина': '44см',
        'Цвет': 'Белый',
        'Страна производитель': 'Румыния'
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Beko',
      model: 'WUE6511XSW',
      desc: 'Отдельностоящая стиральная машина Beko WUE6511XSW отличается хорошим соотношением цены и качества. Устройство с прочной и надежной конструкцией позволит быстро выстирать вещи. Современные технологии заботятся о сохранности тканей, безопасности и спокойствии при выполнении стирки.',
      price: 250,
      discount: 10,
      garancy: 0,
      stats: {
        'Загрузка белья': '6 кг',
        'Максимальная скорость отжима': '1000 об/мин',
        'Тип двигателя': 'Коллекторный',
        'Глубина': '40см',
        'Цвет': 'Белый',
        'Страна производитель': 'Румыния'
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Beko',
      model: 'WTE9744N',
      desc: 'Стиральная машина Beko WTE9744N эффективно очистит вашу одежду от различных загрязнений и пятен. Удобное электронное управление с ярким дисплеем, позволит быстро выбрать нужную вам программу или функцию. Машина относится к классу энергопотребления А+++, что значительно сэкономит ваши финансы.',
      price: 350,
      discount: 0,
      garancy: 0,
      stats: {
        'Загрузка белья': '9 кг',
        'Максимальная скорость отжима': '1400 об/мин',
        'Тип двигателя': 'Инверторный',
        'Глубина': '60см',
        'Цвет': 'Белый',
        'Страна производитель': 'Турция'
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Beko',
      model: 'HTE7616X0',
      desc: 'Стиральная машина Beko HTE7616X0 относится к классу стирально-сушильных устройств. Современные стиральные машины теперь могут осуществить полный цикл от стирки и до предоставления вам в руки уже полностью готовой к надеванию вещи. Забудьте о нерациональном приобретении отдельной сушилки – в вашем распоряжении все и сразу!',
      price: 320,
      discount: 15,
      garancy: 24,
      stats: {
        'Загрузка белья': '7 кг',
        'Загрузка белья для сушки': '4 кг',
        'Максимальная скорость отжима': '1200 об/мин',
        'Тип двигателя': 'Инверторный',
        'Особенности конструкции': 'Сушка',
        'Глубина': '50см',
        'Цвет': 'Белый',
        'Страна производитель': 'Турция'
      },
      reviews: [],
      rating: 0,
    },
    {
      vendor: 'Samsung',
      model: 'WW60J42E0HW',
      desc: 'Стиральная машина Samsung WW60J42E0HW призвана упростить такую привычную и изнурительную процедуру, как стирка. Она позволит вам автоматизировать этот процесс, не отнимая много вашего времени. Это же касается и пространства: стиральная машинка относится к узким малогабаритным моделям, рассчитанным на 6 кг белья, поэтому не требует много места в ванной комнате.',
      price: 300,
      discount: 0,
      garancy: 24,
      stats: {
        'Загрузка белья': '6 кг',
        'Максимальная скорость отжима': '1200 об/мин',
        'Тип двигателя': 'Инверторный',
        'Глубина': '45см',
        'Цвет': 'Белый',
        'Страна производитель': 'Китай',
      },
      reviews: [],
      rating: 0,
    },
  ]
};