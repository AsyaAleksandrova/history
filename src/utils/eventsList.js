 const photoList = [
   {
      yearStart: 1613,
      source: `./images/MikFed/MikhaelFedorovich_3.jpg`,
      description: `Избрание Михаила Федоровича Романова (картина А.Д. Кившенко)`,
      refLink: `https://commons.wikimedia.org/wiki/File:Election_of_Michael_I_of_Russia_by_A._Krivshenko.jpg`,
      refName: `© Wikimedia Commons`
   },
   {
      yearStart: 1617,
      source: `./images/MikFed/MikhaelFedorovich_2.jpg`,
      description: `Сидение царя Михаила Фёдоровича с боярами в его государевой комнате (картина, А.П. Рябушкин)`,
      refLink: `https://commons.wikimedia.org/wiki/File:Tsar_boyar_duma_by_Andrei_Ryabushkinv,_galerie_Tretiakov.jpg`,
      refName: `© Wikimedia Commons`   
   },
   {
      yearStart: 1614,
      source: `./images/MikFed/ipatiev_monastur_winter.jpeg`,
      description: `Ипатьевский монастырь - колыбель династии Романовых (в начале весны 1613 года в монастырь прибыло посольство Земского собора, избравшего 16-летнего Михаила царём)`,
      refLink: `https://ipatievsky-monastery.ru/`,
      refName: `© Свято-Троицкий Ипатьевский мужской монастырь (фотогалерея)`      
   },
   {
      yearStart: 1618,
      source: `./images/MikFed/Filaret.jpg`,
      description: `Патриарх Филарет, отец царя Михаила Федоровича, был освобожден из польского плена по итогам подписания Деулинского перемирия с Речью Посполитой (фрагмент картины, Н. Тютрюмов) © Wikimedia Commons`,
      refLink: ``,
      refName: ``   
   },
   {
      yearStart: 1630,
      source: `./images/MikFed/Early_morning_in_Kremlin._Beginning_of_XVII_century.jpg`,
      description: `Гонцы. Ранним утром в Кремле. Начало XVII века (картина, А. Васнецов)`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1628,
      source: `./images/MikFed/piscovaya_kniga.jpeg`,
      description: `Страницы Писцовой книги Суздальского уезда за 1627 - 1630 гг. Описи того времени включали только описание тяглых земель, с которых платились налоги
      С 40-х гг. XVII в. начали составляться переписные книги, которые описывали всё податное население России поименно, с указанием возраста каждого человека.
      Первая такая перепись была проведена в 1646 – 1647 гг.`,
      refLink: `https://evstoliya.com/chto-takoe-matninskij-stan/`,
      refName: `© Evstoliya`         
   },
   {
      yearStart: 1632,
      source: `./images/MikFed/MetZavod.jpeg`,
      description: `Металлургический завод`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1632,
      source: `./images/MikFed/smolenskayya_war.jpeg`,
      description: `Польское войско. Осада Смоленска (картина, Ю. Коссак)`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1633,
      source: `./images/MikFed/Plan_of_the_Siege_of_Smolensk_1633.jpeg`,
      description: `План осады города Смоленска в 1633 и 1634 годах`,
      refLink: `https://rusneb.ru/catalog/000202_000006_50982%7CD13E39F1-E907-46AD-A437-13ACB2CEA27B/`,
      refName: `© Национальная электронная библиотека`         
   },   
   {
      yearStart: 1648,
      source: `./images/AlexMik/SolanoyBunt.jpeg`,
      description: `Соляной бунт в Москве (картина, Э.Лисснер)`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1649,
      source: `./images/AlexMik/sob_ulozheniye.jpeg`,
      description: `Соборное уложение царя Алексея Михайловича`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1642,
      source: `./images/AlexMik/kolomenski_dvorets.jpeg`,
      description: `Дворец царя Алексея Михайловича. Село Коломенское близ Москвы было одним из любимых мест русских царей для охоты и пиров, 
      а в 1667 года началось строительство на этом месте дворца по принципу хоромного строения.`,
      refLink: `https://moskultura.ru/palaces/kolomenskij-dvorecz`,
      refName: `Все о музеях Москвы и Подмосковья →`         
   },
   {
      yearStart: 1645,
      source: `./images/MikFed/BogdanHmelnickiy.jpeg`,
      description: `Богдан Хмельницкий (фрагмент картины А. Орленова "Берестецкая битва")`,
      refLink: `https://vk.com/photo-151452534_456252903`,
      refName: `© Артур Орленов`         
   },   
   {
      yearStart: 1652,
      source: `./images/AlexMik/NemetskayaSloboda.jpeg`,
      description: `Немецкая слобода в Москве (гравюра, А.Шхонебек)`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1654,
      source: `./images/AlexMik/Patriarch_Nikon_Revising_Service-Books.jpeg`,
      description: `Патриарх Никон пересматривает богослужебные книги (картина, А.Кившенко)  © Wikimedia Commons`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1656,
      source: `./images/AlexMik/Stefan_Czarniecki_during_Polish-Russian_War.png`,
      description: `Стефан Чарнецкий во время польско-русской войны (картина, Януарий Суходольский)`,
      refLink: ``,
      refName: ``        
   },   
   {
      yearStart: 1661,
      source: `./images/Fedor/Symeon_polotsky_poem.png`,
      description: `Симеон Полоцкий. Фигурное стихотворение в форме сердца «От избытка сердца уста глаголят» 
      из цикла «Благоприветствования» «на случай» — в честь рождения царевича Фёдора (1661).`,
      refLink: `https://commons.wikimedia.org/wiki/File:Symeon_polotsky.png`,
      refName: `© Wikimedia Commons`         
   },       
   {
      yearStart: 1662,
      source: `./images/AlexMik/AlekseyTishaishiy_4.jpg`,
      description: `Медный бунт (картина, Э.Лиссннер)`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1664,
      source: `./images/AlexMik/Tsar_Alexey_Mihajlovich_on_review_of_armies_in_1664.jpeg`,
      description: `Выезд царя Алексея Михайловича на смотр войск в 1664 году (картина, Н.Е. Сверчков)`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1665,
      source: `./images/Ivan_5/Simeon_Polotskiy.jpeg`,
      description: `Симеон Полоцкий был наставником детей Алексея Михайловича (Ивана, Федора, Софьи и Петра).`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1668,
      source: `./images/AlexMik/StepanRazin.jpeg`,
      description: `Степан Разин (картина, Кустодиев)`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1670,
      source: `./images/AlexMik/Orel.jpeg`,
      description: `Модель фрегата "Орел" - первого русского корабля западноевропейского типа (Железняков Ю.)`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1672,
      source: `./images/AlexMik/Solovki.jpg`,
      description: `Спасо-Преображенский Соловецкий монастырь`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1682,
      source: `./images/Fedor/Otmena_mestnichestva.jpeg`,
      description: `Сожжение местнических книг в 1682 году при царе Федоре Алексеевиче`,
      refLink: ``,
      refName: ``         
   }, 
   {
      yearStart: 1682,
      source: `./images/Ivan_5/Streletskiy_bunt.jpeg`,
      description: `Стрелецкий бунт (картина, Н.Д. Дмитриев-Оренбургский) Поводом для волнения стрельцов стало ложное известие о смерти царевича Иоанна, 
      распространенное Милославскими. Взбудораженное войско явилось в Кремль с требованием выдать им Нарышкиных, «замучивших» царевича. Желая усмирить и 
      образумить стрельцов, к ним на Красное крыльцо Грановитой палаты вышли царица Наталья Кирилловна с обоими царевичами.`,
      refLink: ``,
      refName: ``      
   },   
   {
      yearStart: 1683,
      source: `./images/Ivan_5/Ioann_Petr_Sofia_Vereshagin.jpeg`,
      description: `Цари Иоанн и Пётр Алексеевичи. Правительница Софья Алексеевна. 1682-1689 (рисунок, В. Верещагин)`,
      refLink: ``,
      refName: ``      
   },
   {
      yearStart: 1685,
      source: `./images/Ivan_5/Spor_o_vere.jpg`,
      description: `Никита Пустосвят. Спор о вере. (картина, В. Перов). Суздальский священник Никита Добрынин, по прозвищу Пустосвят, был лидером раскольников — старообрядцев. Прения о вере состоялись в Москве в 1682 году при участии Софьи Алексеевны.`,
      refLink: ``,
      refName: ``         
   },
   {
      yearStart: 1686,
      source: `./images/Ivan_5/Albazin.jpeg`,
      description: `Защита Албазинского острога в 1685-1687 годах (картина, А. Сучков)`,
      refLink: ``,
      refName: ``         
   },   
   {
      yearStart: 1689,
      source: `./images/Ivan_5/Sofia_Repin.jpeg`,
      description: `Царевна Софья Алексеевна через год после заключения её в Новодевичьем монастыре, во время казни стрельцов и пытки всей её прислуги в 1698 году (картина, И. Репин)`,
      refLink: ``,
      refName: ``       
   },     
   {
      yearStart: 1695,
      source: `./images/Petr_1/Azovski_pohod.jpg`,
      description: `Азовские походы Петра I`,
      refLink: ``,
      refName: ``      
   },  
   {
      yearStart: 1697,
      source: `./images/Petr_1/Petr_v_Europe.jpeg`,
      description: `Петр I в Голландии (неизвестный голландский художник)`,
      refLink: ``,
      refName: ``         
   },  
   {
      yearStart: 1703,
      source: `./images/Petr_1/vedomosti.jpeg`,
      description: `Заглавный лист первой печтной газеты, вышедшей 13 января 1703 года. До 1710 года печаталась церковнославянским шрифтом, позже постепенно переходила на гражданский шрифт.
      «Ведомости» выходили тиражом 150—4000 экз. в Москве и Петербурге.`,
      refLink: `https://expositions.nlr.ru/fond/paper/gallery.php`,
      refName: `Галерея газетного фонда →`      
   },   
   {
      yearStart: 1812,
      source: `./images/Alex_1/Austerlits.jpg`,
      description: `Наполеон в битве под Аустерлицем (картина, Франсуа Жерар)`,
      refLink: ``,
      refName: ``         
   }   

]

export const eventList = [
   {
      yearStart: 1613,
      yearEnd: 1613,
      title: `1613`,
      description: `Решением Земского собора 1613 г. об избрании Михаила Фёдоровича Романова на московский престол было положено начало новой династии.`,
      link:`https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BC%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_1613_%D0%B3%D0%BE%D0%B4%D0%B0`
   },
   {
      yearStart: 1617,
      yearEnd: 1617,
      title: `1617`,
      description: `Столбовский мир и завершение войны со Швецией 1610-1617 гг.`,
      link:`https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%BE%D0%BB%D0%B1%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%B8%D1%80`
   },   
     {
      yearStart: 1618,
      yearEnd: 1618,
      title: `1618`,
      description: `Деулинское перемирие с Речью Посполитой, завершившее русско-польскую войну 1609-1618 гг.`,
      link:`https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D1%83%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B8%D1%80%D0%B8%D0%B5`
   }, 
   {
      yearStart: 1621,
      yearEnd: 1621,
      title: `1621`,
      description: `В Москве начала выходить первая русская газета «Веести-Куранты» («вестовые письма»), которую зачитывали царю`,
      link:`https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%81%D1%82%D0%B8-%D0%9A%D1%83%D1%80%D0%B0%D0%BD%D1%82%D1%8B`
   },   
    {
      yearStart: 1630,
      yearEnd: 1630,
      title: `1630`,
      description: `По всей стране проведена первая всеобщая опись всех поместных земель для определения размера налогов (описи до этого времени проводились, но охватывали отдельные уезды)`,
      link:`https://genealog-expert.ru/tag/pistsovyie-knigi/`
   },
   {
      yearStart: 1632,
      yearEnd: 1632,
      title: `1632`,
      description: `Основание первого железоделательного завода под Тулой голландскими предпринимателями на основании жалованной грамоты царя`,
      link:`https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%89%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B5_%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%8B`
   },  
      {
      yearStart: 1632,
      yearEnd: 1634,
      title: `1632 - 1634`,
      description: `Смоленская война с Речью Посполитой. Заключенный в 1634 г. Поляновский мир не дал приобретения земель, но подтвердил границы, установленные 
      Деулинским перемирием, а польский король Владислав отказался от претензий на русский трон (был выкуплен титул Великиго князя Московского)`,
      link:`https://ru.wikipedia.org/wiki/%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0`
   },
   {
      yearStart: 1645,
      yearEnd: 1645,
      title: `1645`,
      description: `Начало правления Алексея Михайловича`,
      link:`https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87`
   },      
   {
      yearStart: 1642,
      yearEnd: 1657,
      title: `1642 - 1657`,
      description: `Восстание Богдана Хмельницкого. После заключения Переяславского договора и перехода Гетманщины в подданство Русского царства, переросло в русско-польскую войну 1654—1667 годов`,
      link:`https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%B8%D0%B5_%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%BE%D0%B3%D0%BE`
   },
      {
      yearStart: 1648,
      yearEnd: 1648,
      title: `1648`,
      description: `"Соляной бунт", явившийся следствием политики приближенного к царю Бориса Морозова по повышению налогов, что привело к росту цен на соль в несколько раз`,
      link:`https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D1%8F%D0%BD%D0%BE%D0%B9_%D0%B1%D1%83%D0%BD%D1%82`
   },
      {
      yearStart: 1648,
      yearEnd: 1648,
      title: `1648`,
      description: `Открытие пролива, отделяющего Чукотку от Аляски, экспедицией С. Дежнёва`,
      link:`https://ru.wikipedia.org/wiki/%D0%AD%D0%BA%D1%81%D0%BF%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D1%8F_%D0%A1%D0%B5%D0%BC%D1%91%D0%BD%D0%B0_%D0%94%D0%B5%D0%B6%D0%BD%D1%91%D0%B2%D0%B0`
   },
   {
      yearStart: 1649,
      yearEnd: 1649,
      title: `1649`,
      description: `Соборное уложение, принятое Земским собором, завершило процесс окончательного закрепощения крестьян`,
      link:`https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B1%D0%BE%D1%80%D0%BD%D0%BE%D0%B5_%D1%83%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_1649_%D0%B3%D0%BE%D0%B4%D0%B0`
   },      
   {
      yearStart: 1652,
      yearEnd: 1652,
      title: `1652`,
      description: `Основание Новой Немецкой слободы в Москве, центр которой находился в районе современной Бауманской улицы`,
      link:`https://basmania.ru/nemeczkaya-sloboda-i-ee-zhiteli/`
   },
   {
      yearStart: 1654,
      yearEnd: 1654,
      title: `1654`,
      description: `Переяславский договор: присоединение Войска Запорожского (Украины) к Русскому государству`,
      link:`https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D1%8F%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%80%D0%B0%D0%B4%D0%B0`
   },
   {
      yearStart: 1654,
      yearEnd: 1667,
      title: `1654 - 1667`,
      description: `Русско-польская ("Тринадцатилетняя") война за возвращение утерянных Россией в Смутное время территорий, а также за контроль над западнорусскими землями 
      (ныне территории Белоруссии и Украины), утраченных в XIV—XV веках`,
      link:`https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%BE-%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0_(1654%E2%80%941667)`
   },
   {
      yearStart: 1656,
      yearEnd: 1658,
      title: `1656 - 1658`,
      description: `Русско-шведская война. Завоеванные территории Ливонии находились под контролем Русского царства до 1661 г, после чего от них пришлось отказаться во избежание одновременной войны со Швецией и Польшей`,
      link:`https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%BE-%D1%88%D0%B2%D0%B5%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0_(1656%E2%80%941658)`
   },
   {
      yearStart: 1662,
      yearEnd: 1662,
      title: `1662`,
      description: `"Медный бунт" против повышения налогов и выпуска с 1654 года обесценивающихся по сравнению с серебряными медных монет (денежная реформа)`,
      link:`https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B1%D1%83%D0%BD%D1%82`
   },
   {
      yearStart: 1668,
      yearEnd: 1676,
      title: `1668 - 1676`,
      description: `"Соловецкое восстание": вооруженное сопротивление монахов Спасо-Преображенского Соловецкого монастыря церковным реформам патриарха Никона`,
      link:`https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%BE%D0%B2%D0%B5%D1%86%D0%BA%D0%BE%D0%B5_%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%B8%D0%B5`
   },
   {
      yearStart: 1667,
      yearEnd: 1671,
      title: `1670 - 1671`,
      description: `Крестьянско-казацкое восстание Степана Разина, причиной которого стало усиление цетрализованной власти и закрепощения крестьян`,
      link:`https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%B8%D0%B5_%D0%A0%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0`
   },
   {
      yearStart: 1668,
      yearEnd: 1668,
      title: `1668`,
      description: `Спущен на воду первый русский корабль западноевропейского типа`,
      link:`https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D1%91%D0%BB_(%D1%84%D1%80%D0%B5%D0%B3%D0%B0%D1%82)#:~:text=%C2%AB%D0%9E%D1%80%D1%91%D0%BB%C2%BB%20(1667%E2%80%941669,%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%8B%D1%85%20%D1%81%D1%83%D0%B4%D0%BE%D0%B2%20%D0%BD%D0%B0%20%D0%9A%D0%B0%D1%81%D0%BF%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%BC%20%D0%BC%D0%BE%D1%80%D0%B5.`
   },
   {
      yearStart: 1672,
      yearEnd: 1672,
      title: `1672`,
      description: `Построено первое театральное здание в селе Преображенском`,
      link:`https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D0%B9%D0%BD%D0%B0%D1%8F_%D1%85%D0%BE%D1%80%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0#:~:text=%D0%9A%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D0%B9%D0%BD%D0%B0%D1%8F%20%D1%85%D0%BE%D1%80%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%20%E2%80%94%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5%20%D1%82%D0%B5%D0%B0%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5,%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%B0%D0%BA%D0%BB%D0%B5%D0%B9%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B3%D0%BE%20%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%B8%D0%B4%D0%B2%D0%BE%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%82%D0%B5%D0%B0%D1%82%D1%80%D0%B0.`
   },
   {
      yearStart: 1676,
      yearEnd: 1676,
      title: `1676`,
      description: `Начало царствования Фёдора III`,
      link:`https://ru.wikipedia.org/wiki/%D0%A4%D1%91%D0%B4%D0%BE%D1%80_III_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87`
   },
   {
      yearStart: 1672,
      yearEnd: 1681,
      title: `1672 - 1681`,
      description: `Русско-турецкая война. По итогам подписан Бахчисарайский мирный договор, по которому России отошли левобережные земли Днепра и Киев.`,
      link:`https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%BE-%D1%82%D1%83%D1%80%D0%B5%D1%86%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0_(1672%E2%80%941681)`
   },
   {
      yearStart: 1677,
      yearEnd: 1677,
      title: `1676 - 1677`,
      description: `Упразднены Приказ тайных дел и Монастырский приказ`,
      link:`https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D1%80%D0%B8%D0%BA%D0%B0%D0%B7`
   },

   {
      yearStart: 1681,
      yearEnd: 1682,
      title: `1681 - 1682`,
      description: `Московский собор Русской церкви, явившийся продолжением церковных реформ патриарха Никона и гонений против старообрядцев`,
      link:`https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(1681%E2%80%941682)`
   },
   {
      yearStart: 1682,
      yearEnd: 1682,
      title: `1682`,
      description: `Отмена местничества`,
      link:`https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D0%BC%D0%B5%D0%BD%D0%B0_%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0`
   },
   {
      yearStart: 1682,
      yearEnd: 1682,
      title: `1682`,
      description: `Стрелецкий бунт, организованный Милославскими (родственниками первой жены Алексея Михайловича) против Нарышкиных (родственников второй жены). В результате бунта фактической правительницей стала царевна Софья при малолетних соправителях Иване V (Милославский) и Петре I (Нарышкин)`,
      link:`https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%B5%D0%BB%D0%B5%D1%86%D0%BA%D0%B8%D0%B9_%D0%B1%D1%83%D0%BD%D1%82_(1682)`
   },
   {
      yearStart: 1685,
      yearEnd: 1685,
      title: `1685`,
      description: `"12 статей царевны Софьи", в которых определены степени наказания для старообрядцев от сожжения заживо до пыток и заточения в монастыри`,
      link:`https://ru.wikipedia.org/wiki/%C2%AB%D0%94%D0%B2%D0%B5%D0%BD%D0%B0%D0%B4%D1%86%D0%B0%D1%82%D1%8C_%D1%81%D1%82%D0%B0%D1%82%D0%B5%D0%B9%C2%BB_%D1%86%D0%B0%D1%80%D0%B5%D0%B2%D0%BD%D1%8B_%D0%A1%D0%BE%D1%84%D1%8C%D0%B8`
   },
   {
      yearStart: 1685,
      yearEnd: 1686,
      title: `1685 - 1686`,
      description: `Албазинская война с империей Цин и подписание по итогам Нерчинского договора (Россия лишалась крепости Албазин и Приамурья)`,
      link:`https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%80%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80`
   },
   {
      yearStart: 1686,
      yearEnd: 1686,
      title: `1686`,
      description: `"Вечный мир" с Речью Посполитой, закреплявший договоренности перемирия 1667 года (признавали за Русским царством Левобережную Украину, Киев, Запорожье, Смоленск и Чернигово-Северскую землю). При этом Россия вступала в антитурецкую коалицию (Священную лигу).`,
      link:`https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%87%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B8%D1%80_(1686)`
   },
   {
      yearStart: 1687,
      yearEnd: 1687,
      title: `1687`,
      description: `Учреждено первое высшее учебное заведение по инициативе Симеона Полоцкого (Славяно-греко-латинская академия)`,
      link:`https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D0%B0%D0%B2%D1%8F%D0%BD%D0%BE-%D0%B3%D1%80%D0%B5%D0%BA%D0%BE-%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F`
   },
   {
      yearStart: 1687,
      yearEnd: 1689,
      title: `1687 - 1689`,
      description: `Крымские походы против Османской империи`,
      link:`https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D1%8B%D0%BC%D1%81%D0%BA%D0%B8%D0%B5_%D0%BF%D0%BE%D1%85%D0%BE%D0%B4%D1%8B`
   },
   {
      yearStart: 1689,
      yearEnd: 1689,
      title: `1689`,
      description: `Начало правления Петра I (царевна Софья заключена в Новодевичий монастырь, Иван V номинально продолжил быть соправителем, но не принимал участия в государственных делах)`,
      link:`https://history.wikireading.ru/8832`
   },
   {
      yearStart: 1695,
      yearEnd: 1696,
      title: `1695 - 1696`,
      description: `Азовские походы и взятие турецкой крепости Азов под предводительством Петра I`,
      link:`https://ru.wikipedia.org/wiki/%D0%90%D0%B7%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B5_%D0%BF%D0%BE%D1%85%D0%BE%D0%B4%D1%8B_%D0%9F%D0%B5%D1%82%D1%80%D0%B0_I`
   },
   {
      yearStart: 1697,
      yearEnd: 1698,
      title: `1697 - 1698`,
      description: `"Великое посольство" Петра I в Европу для установления связей с Западом`,
      link:`https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B5_%D0%BF%D0%BE%D1%81%D0%BE%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE`
   },
      {
      yearStart: 1698,
      yearEnd: 1698,
      title: `1698`,
      description: `Издан знаменитый указ «О ношении немецкого платья, о бритии бород и усов, о хождении раскольникам в указанном для них одеянии»`,
      link:`https://ru.wikipedia.org/wiki/%D0%9F%D1%91%D1%82%D1%80_I#:~:text=%D0%98%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%20%D0%9F%D0%B5%D1%82%D1%80%20%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9`
   },
   {
      yearStart: 1699,
      yearEnd: 1699,
      title: `1699`,
      description: `Указ о переходе с 1 января 1700 года на летосчисление от Рождества Христова`,
      link:`https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%88%D0%B0_%D1%8D%D1%80%D0%B0`
   },
   {
      yearStart: 1699,
      yearEnd: 1699,
      title: `1699`,
      description: `Император Петр I учредил Андреевский флаг в качестве официального флага Российского военного флота`,
      link:`https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D1%84%D0%BB%D0%B0%D0%B3#:~:text=%D0%90%D0%BD%D0%B4%D1%80%D0%B5%CC%81%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D1%84%D0%BB%D0%B0%D0%B3%20%E2%80%94%20%D0%BA%D0%BE%D1%80%D0%BC%D0%BE%D0%B2%D0%BE%D0%B9%20%D1%84%D0%BB%D0%B0%D0%B3%20%D0%BA%D0%BE%D1%80%D0%B0%D0%B1%D0%BB%D0%B5%D0%B9,%D0%BF%D0%BE%20%D0%BF%D1%80%D0%B5%D0%B4%D0%B0%D0%BD%D0%B8%D1%8E%2C%20%D0%BD%D0%B0%20%D0%BA%D0%BE%D1%81%D0%BE%D0%BC%20%D0%BA%D1%80%D0%B5%D1%81%D1%82%D0%B5.`
   },
   {
      yearStart: 1705,
      yearEnd: 1705,
      title: `1705`,
      description: `Введена рекрутская повинность. Первый рекурутский набор был объявлен для подготовке к Северной войне еще в 1699 году`,
      link:`https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BA%D1%80%D1%83%D1%82%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D0%BE%D0%B2%D0%B8%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C`
   },
   {
      yearStart: 1700,
      yearEnd: 1721,
      title: `1700 - 1721`,
      description: `Северная война со Швецией`,
      link:`https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0`
   },




   {
      yearStart: 1724,
      yearEnd: 1724,
      title: `1724`,
      description: `Основана Петербургская академия наук`,
      link:`https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B0%D1%8F_%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F_%D0%BD%D0%B0%D1%83%D0%BA`
   },



   {
      yearStart: 1700,
      yearEnd: 1700,
      title: `1700`,
      description: `Вот такое вот событие`,
      link:`#`
   },
   {
      yearStart: 1700,
      yearEnd: 1700,
      title: `1700`,
      description: `Вот такое вот событие`,
      link:`#`
   }






]