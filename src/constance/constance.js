const profile = {
    "name": "平野 大智",
    "birthday": "1997年4月23日",
    "origin": "石川県"
}

const career =
    [
        {
            "type": "compony",
            "compony": "ソフトバンク株式会社",
            "job": "運用エンジニア / 開発エンジニア",
            "content":"社内向けシステムの監視運用システムの改修",
            "periodStart": "2022/04",
            "periodEnd": ""
        },
        {
            "type": "school",
            "compony": "金沢大学大学院",
            "job": "機械科学専攻",
            "study": "自動運転自動車のソフトウェア開発",
            "periodStart": "2020/04",
            "periodEnd": "2022/03"
        },
        {
            "type": "school",
            "compony": "金沢大学",
            "job": "機械工学類",
            "study": "自動運転自動車のソフトウェア開発",
            "periodStart": "2018/04",
            "periodEnd": "2020/03"
        },
        {
            "type": "school",
            "compony": "石川工業高等専門学校",
            "job": "機械工学科",
            "periodStart": "2013/04",
            "periodEnd": "2018/03"
        },
    ];

const skill =
    [
        {
            "lang": "C/C++",
            "level": 3.0,
            "framework": [{ "name": "MFC", "level": 2.0 }, { "name": "OpenCV", "level": 2.5 }],
            "description":"MFCはボタンに応じた機能の追加や画像の描画で利用しました。OpenCVは主にテンプレートマッチングを利用しました。"
        },
        {
            "lang": "Java",
            "level": 2.5,
            "framework": [{ "name": "SpringBoot", "level": 2.0 }],
            "description":"SpringBootを利用して基本的なAPIからDBアクセスまで実装しました。"
        },
        {
            "lang": "JavaScript",
            "level": 2,
            "framework": [{ "name": "React", "level": 2.0 }, { "name": "jQuery", "level": 0.5 }],
            "description":"Reactを利用してこのサイトを作れるレベル。jQueryは2022年8月から業務で使い始めました。"
        },
        {
            "lang": "Python",
            "level": 1.5,
            "framework": [{ "name": "PyTorch", "level": 1.5 }],
            "description":"画像に写っている物体が「○○」か「○○ではない」かの二値分類を実装しました。"
        },
        {
            "lang": "PHP",
            "level": 1.0,
            "description":"Udemyで基本文法と簡単なAPIを学んだレベル。"
        },
        {
            "lang": "C#",
            "level": 0.3,
            "description":"高専在学時に半年触りましたがもう覚えていないです。"
        },
        {
            "lang": "MATLAB",
            "level": 0.4,
            "description":"大学の授業で二重振子の制御シミュレータを実装しました。"
        }
    ]

const product =
    [

    ]

const contact =
    [
        { "type": "E-mail", "content": "daichi.hirano.sb@gmail.com" },
        { "type": "GitHub", "content": "https://github.com/daichihirano" },
        { "type": "LinkedIn", "content": "https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" }
    ]
export { profile, career, skill, product, contact }