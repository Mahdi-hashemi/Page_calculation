alert(`لطفا بین اسم و فامیلیتون فاصله بذارید 
(محمد بخشی درسته نه محمدبخش )
اگر دو اسمه هستید به شرط خراب نشدن فاصله نذارید
(مثل محمدرضا فاصله نداره ولی علی اکبر فاصله داره)
بعضی ها علی زاده نوشته میشن بعضی ها علیزاده لطفا دقیق بنویسید
اگر ئ هستید از ی استفاده نکنید مثل رضائی و رضایی`);

const StudentsNames = [
    [{
            name: 'زهرا احمدی',
            shomare: 1
        }, {
            name: 'خانم احمدی پردستی',
            shomare: 2
        }, {
            name: 'احمد ارمغان',
            shomare: 3
        },
        {
            name: 'مهدیه اسدپور',
            shomare: 4
        }, {
            name: 'سینا اکبری کلیشادی',
            shomare: 5
        }, {
            name: 'علی امیری',
            shomare: 6
        },
        {
            name: 'محمد امیری',
            shomare: 7
        }, {
            name: 'نازنین امینی عشق ابادی',
            shomare: 8
        }, {
            name: 'منا اندوری',
            shomare: 9
        },
        {
            name: 'امیررضا باهوش مهدی ابادی',
            shomare: 10
        }, {
            name: 'محمد بخشی',
            shomare: 11
        }, {
            name: 'محمدرضا بصیری',
            shomare: 12
        },
        {
            name: 'سپیده جعفری',
            shomare: 13
        }, {
            name: 'سیدمحمدامین جوادی',
            shomare: 14
        }, {
            name: 'فرزین حاتمی',
            shomare: 15
        },
        {
            name: 'مریم حاجی عزیزی',
            shomare: 16
        }, {
            name: 'محمدرضا حامدی',
            shomare: 17
        }, {
            name: 'حجت اله حسین زاده مهابادی',
            shomare: 18
        },
        {
            name: 'مهدیه حسینی',
            shomare: 19
        }, {
            name: 'هادی حقیقت',
            shomare: 20
        }, {
            name: 'ایدا حنیفی',
            shomare: 21
        },
        {
            name: 'محمد حیدری',
            shomare: 22
        }, {
            name: 'علی اکبر خان محمدی',
            shomare: 23
        }, {
            name: 'هژیر دلفانی',
            shomare: 24
        },
        {
            name: 'محمدامین رئیسی',
            shomare: 25
        }, {
            name: 'حسین رضائی',
            shomare: 26
        }, {
            name: 'معصومه رضایی',
            shomare: 27
        },
        {
            name: 'محدثه روحانی',
            shomare: 28
        }, {
            name: 'سکینه رهبری جرتوده',
            shomare: 29
        }, {
            name: 'علی سلامتی خیاوی',
            shomare: 30
        },
        {
            name: 'اکبر سلطان زاده',
            shomare: 31
        }, {
            name: 'علی اصغر سلطانپور',
            shomare: 32
        }, {
            name: 'حانیه شعبان بلوکات',
            shomare: 33
        },
        {
            name: 'محدثه شیدائی زاده',
            shomare: 34
        }, {
            name: 'سیدمسعود صالحی',
            shomare: 35
        }, {
            name: 'مهرداد صفی خانی',
            shomare: 36
        },
        {
            name: 'اناهیتا طاهری',
            shomare: 37
        }, {
            name: 'فاطمه طیبی',
            shomare: 38
        }, {
            name: 'مهدیه عربلو',
            shomare: 39
        },
        {
            name: 'صغری عزیزی',
            shomare: 40
        }, {
            name: 'عرفان عطامنصوری',
            shomare: 41
        }, {
            name: 'غلامرضا عقیلی نسب',
            shomare: 42
        },
        {
            name: 'زهرا علی زاده ایاز',
            shomare: 43
        }, {
            name: 'امین عباس علی پور',
            shomare: 44
        }, {
            name: 'سحر علی محمدی',
            shomare: 45
        },
        {
            name: 'زهرا غلامی زاده',
            shomare: 46
        }, {
            name: 'حامد فتحی',
            shomare: 47
        }, {
            name: 'عطیه فرخی حاجی اباد',
            shomare: 48
        },
        {
            name: 'معصومه قدیری مطلق',
            shomare: 49
        }, {
            name: 'حمیدرضا کاردان پورطهرانی',
            shomare: 50
        }, {
            name: 'مهسا کرمی',
            shomare: 51
        },
        {
            name: 'الهام کرمیان',
            shomare: 52
        }, {
            name: 'عسل کریم خراسانی',
            shomare: 53
        }, {
            name: 'حمید کشاورز خورشیدی',
            shomare: 54
        },
        {
            name: 'سحر کلیایی',
            shomare: 55
        }, {
            name: 'میرمحمد کمالی',
            shomare: 56
        }, {
            name: 'محسن گلی',
            shomare: 57
        },
        {
            name: 'زهرا ماهان',
            shomare: 58
        }, {
            name: 'مژگان متقی ثابت',
            shomare: 59
        }, {
            name: 'الهه محمدزاده نیلق',
            shomare: 60
        },
        {
            name: 'فاطمه مرادی',
            shomare: 61
        }, {
            name: 'سید حمیدرضا موسوی پور',
            shomare: 62
        }, {
            name: 'فرزاد مومنی',
            shomare: 63
        },
        {
            name: 'مریم میرزائی',
            shomare: 64
        }, {
            name: 'محمدعلی نجارزاده باروق',
            shomare: 65
        }, {
            name: 'علیرضا نجفی راد',
            shomare: 66
        },
        {
            name: 'رضوانه نورزائی',
            shomare: 67
        }, {
            name: 'مریم وطنی',
            shomare: 68
        }, {
            name: 'مهدی هاشمی',
            shomare: 69
        }
    ],



    [{
            name: 'مبینا ابوالحسن خانی',
            shomare: 1
        }, {
            name: 'محمدرضا احمدی لمه دشت',
            shomare: 2
        }, {
            name: 'مهرشاد ادهم ماوردیانی',
            shomare: 3
        },
        {
            name: 'وهاب ازادمهر',
            shomare: 4
        }, {
            name: 'ریوف اسفندفر',
            shomare: 5
        }, {
            name: 'فریبرز افکاری',
            shomare: 6
        },
        {
            name: 'علی اکبرشاهی',
            shomare: 7
        }, {
            name: 'مهدی الهمرادی',
            shomare: 8
        }, {
            name: 'مهدیه بابائی',
            shomare: 9
        },
        {
            name: 'مرضیه بختیاری',
            shomare: 10
        }, {
            name: 'زهرا بشیری خاوری',
            shomare: 11
        }, {
            name: 'محمد بهرامی نژاد',
            shomare: 12
        },
        {
            name: 'عباس بهروزوزیری',
            shomare: 13
        }, {
            name: 'پردیس پارچه باف شوقی',
            shomare: 14
        }, {
            name: 'شقایق پژومان گلروردیان',
            shomare: 15
        },
        {
            name: 'فرهاد تاجیک',
            shomare: 16
        }, {
            name: 'نغمه ترکی',
            shomare: 17
        }, {
            name: 'حامد جانمحمدی',
            shomare: 18
        },
        {
            name: 'مسعود جعفری',
            shomare: 19
        }, {
            name: 'حسین جوهری',
            shomare: 20
        }, {
            name: 'فاطمه چهارراهی',
            shomare: 21
        },
        {
            name: 'محسن حاتمی باروق',
            shomare: 22
        }, {
            name: 'سید جلال حسینی',
            shomare: 23
        }, {
            name: 'ابراهیم حیدری',
            shomare: 24
        },
        {
            name: 'پریسا خاوری',
            shomare: 25
        }, {
            name: 'فتانه خاوری',
            shomare: 26
        }, {
            name: 'امیر دژکام',
            shomare: 27
        },
        {
            name: 'فاطمه دوستانی',
            shomare: 28
        }, {
            name: 'سحر ریحانی',
            shomare: 29
        }, {
            name: 'خانم ریحانی ناراب',
            shomare: 30
        },
        {
            name: 'مهسا زهدی شایسته',
            shomare: 31
        }, {
            name: 'عرفان ساری خانی',
            shomare: 32
        }, {
            name: 'فاطمه ستاری اذر',
            shomare: 33
        },
        {
            name: 'فرشاد سرلک',
            shomare: 34
        }, {
            name: 'احمد سلطانی',
            shomare: 35
        }, {
            name: 'محسن شکیبا',
            shomare: 36
        },
        {
            name: 'معصومه عابدین مقانکی',
            shomare: 37
        }, {
            name: 'فاطمه عابدینی',
            shomare: 38
        }, {
            name: 'نفیسه عطایی صفا',
            shomare: 39
        },
        {
            name: 'فاطمه علومی فلاح',
            shomare: 40
        }, {
            name: 'حانیه علی نژاد',
            shomare: 41
        }, {
            name: 'نیلوفر غلامی',
            shomare: 42
        },
        {
            name: 'شهلا فتح الهی',
            shomare: 43
        }, {
            name: 'مائده فضلی خانی',
            shomare: 44
        }, {
            name: 'قاسم فقری میاب',
            shomare: 45
        },
        {
            name: 'زهرا قائدرحمت',
            shomare: 46
        }, {
            name: 'فاطمه قاسمی',
            shomare: 47
        }, {
            name: 'رضا کاظمی زاده',
            shomare: 48
        },
        {
            name: 'هانیه سادات کشور',
            shomare: 49
        }, {
            name: 'صابر کوثری',
            shomare: 50
        }, {
            name: 'امیرمحمد کوسه لر',
            shomare: 51
        },
        {
            name: 'سعید کولی وند',
            shomare: 52
        }, {
            name: 'سیدعلیرضا کیانژادتجکنی',
            shomare: 53
        }, {
            name: 'محمدطاها گوینده برحقی',
            shomare: 54
        },
        {
            name: 'سیدمحمدامین لاجویی',
            shomare: 55
        }, {
            name: 'ریحانه محرابی مقدم',
            shomare: 56
        }, {
            name: 'مهدی محمودی بابانظر',
            shomare: 57
        },
        {
            name: 'صابر مدیریان',
            shomare: 58
        }, {
            name: 'ایدا مرادی',
            shomare: 59
        }, {
            name: 'فاطمه مظفری',
            shomare: 60
        },
        {
            name: 'صبا مقدم زرندی',
            shomare: 61
        }, {
            name: 'رویا ملکی',
            shomare: 62
        }, {
            name: 'علیرضا منتظران',
            shomare: 63
        },
        {
            name: 'ملیکا منصوری',
            shomare: 64
        }, {
            name: 'فاطمه موسائی اغجه کهل',
            shomare: 65
        }, {
            name: 'سیدمحمد موسوی',
            shomare: 66
        },
        {
            name: 'فاطمه مهدیخانلو',
            shomare: 67
        }, {
            name: 'علی نوروزپوربیجارپسی',
            shomare: 68
        }, {
            name: 'سیده فاطمه ودیعی',
            shomare: 69
        }
    ],



    [{
            name: 'پویا ابش لوئی اقدم',
            shomare: 1
        }, {
            name: 'یاشار ابش لوئی اقدم',
            shomare: 2
        }, {
            name: 'پوریا بداغی',
            shomare: 3
        },
        {
            name: 'علیرضا خسروی',
            shomare: 4
        }, {
            name: 'پولاد دباغ مقتدر',
            shomare: 5
        }, {
            name: 'رضا رضائی',
            shomare: 6
        },
        {
            name: 'سلماز زینتی شعاع',
            shomare: 7
        }, {
            name: 'مجتبی سیره وند',
            shomare: 8
        }, {
            name: 'فائزه صیدی',
            shomare: 9
        },
        {
            name: 'ساناز فرخی قرقشه',
            shomare: 10
        }, {
            name: 'ایت قلی وند',
            shomare: 11
        }, {
            name: 'سلمان کبیری',
            shomare: 12
        },
        {
            name: 'حدیثه گوهری نیا',
            shomare: 13
        }, {
            name: 'شایان محبی دانا',
            shomare: 14
        }, {
            name: 'رضا محمدی',
            shomare: 15
        },
        {
            name: 'عرفان مددپور',
            shomare: 16
        }, {
            name: 'سیاوش نصیری',
            shomare: 17
        }, {
            name: 'فاطمه ودودی',
            shomare: 18
        }
    ]
]


document.querySelector("#search-name").addEventListener("click", () => {
    let vasels;
    let iop;
    let section = document.querySelector('#section2');
    section.innerHTML = ``;
    section.style.padding = `0px`;
    let spa = document.querySelector("#spa");
    spa.innerHTML = ``;
    spa.style.padding = `0px`;
    let shorad = document.querySelector("#inp").value;
    if (shorad === '' || shorad === ' ') {
        spa.innerHTML = `اسمتو وارد نکردی`;
        spa.style.padding = `9px`;
        return false;
    } else {
        if (shorad === 'زهرا احمدی') {
            let namereal1 = prompt("اگه احمدی پردستی هستی بنویس  *یک* در غیر اینصورت بنویس *دو*  ");
            if (namereal1 === 'دو') {
                shorad = 'زهرا احمدی';
            } else {
                shorad = 'خانم احمدی پردستی';
            };
        }
        if (shorad === 'سحر ریحانی') {
            let namereal2 = prompt("اگه ریحانی ناراب هستی بنویس  *یک* در غیر اینصورت بنویس *دو*");
            if (namereal2 === 'دو') {
                shorad = 'سحر ریحانی';
            } else {
                shorad = 'خانم ریحانی ناراب';
            };
        }
        for (let i = 0; i < StudentsNames.length; i++) {
            StudentsNames[i].filter((item) => {
                if (item.name.includes(shorad)) {
                    vasels = i + 1;
                    iop = item.shomare;
                }
            })
        }
        if (vasels === undefined || iop === undefined) {
            spa.innerHTML = `اسمت ثبت نشده یا اشتباه وارد کردی`;
            spa.style.padding = `9px`;
            document.querySelector("#inp").value = '';
            return false;
        }
        let shomakoli = (vasels - 1) * 69 + iop;
        let sta = (shomakoli - 1) * 4 + 1;
        let aka = shomakoli * 4;
        let pimane = iop % 11;
        if (pimane === 0) {
            pimane = 11;
        };
        section.style.padding = `10px`;
        section.innerHTML = `    <p>
        ${shorad}  برای تکلیف دوم برو به این <a href="http://www.cs.rpi.edu/~moorthy/Courses/S04/modcomp/">صفحه</a> پاور فصل ${pimane} رو دانلود کن و ارائه  شفاهی بده 
    </p>
        <br>
    <p>
        برای تکلیف سوم هم از صفحه ${sta}  تا صفحه ${aka} این  <a href="http://library.lol/main/BA5FF8420F90F861837783127F524EC8">کتاب</a> رو تو لاتکس ارائه  نوشتاری بده
    </p>`;
        document.querySelector("#inp").value = '';
    };
})
