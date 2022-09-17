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
            "content":"社内向けシステムの監視運用システムの開発",
            "periodStart": "2022/04",
            "periodEnd": "",
            "skill":["Java", "JavaScript", "PHP"]
        },
        {
            "type": "school",
            "compony": "金沢大学大学院",
            "job": "機械科学専攻",
            "study": "自動運転自動車のソフトウェア開発",
            "paper":{"name":"LiDAR- and Radar-Based Robust Vehicle Localization with Confidence Estimation of Matching Results", "URL":"https://pubmed.ncbi.nlm.nih.gov/35591236/"},
            "periodStart": "2020/04",
            "periodEnd": "2022/03",
            "skill":["C/C++", "Python"]
        },
        {
            "type": "school",
            "compony": "金沢大学",
            "job": "機械工学類",
            "study": "自動運転自動車のソフトウェア開発",
            "paper":{"name":"LiDAR and Radar Sensor Fusion for Localizing Autonomous Vehicles", "URL":"https://www.jstage.jst.go.jp/article/jsaeronbun/51/5/51_20204428/_article/-char/en"},
            "periodStart": "2018/04",
            "periodEnd": "2020/03",
            "skill":["C/C++", "MATLAB"]
        },
        {
            "type": "school",
            "compony": "石川工業高等専門学校",
            "job": "機械工学科",
            "periodStart": "2013/04",
            "periodEnd": "2018/03",
            "skill":["C","C#"]
        },
    ];

const skill =
    [
        {
            "lang": "C/C++",
            "level": 3.0,
            "framework": [{ "name": "MFC", "level": 2.0 }, { "name": "OpenCV", "level": 2.5 }, {"name":"Arduino", "level":1.5}],
            "description":"MFCは大学院の研究で利用しました。",
            "purpose":["組み込みソフト","デスクトップアプリ", "シミュレーション"]
        },
        {
            "lang": "Java",
            "level": 2.5,
            "framework": [{ "name": "SpringBoot", "level": 2.0 }],
            "description":"SpringBootを利用して基本的なwebAPIからDBアクセスまで実装しました。",
            "purpose":["バックエンド"]
        },
        {
            "lang": "JavaScript / TypeScript",
            "level": 2,
            "framework": [{ "name": "React", "level": 2.5 }, { "name": "MUI", "level": 2.0 }, { "name": "jQuery", "level": 1.5 }, { "name": "BootStrap", "level": 0.5 }, { "name": "GAS", "level": 0.5 }],
            "description":"Reactを利用してこのサイトを作れるレベル。",
            "purpose":["Webアプリ"]
        },
        {
            "lang": "Python",
            "level": 1.5,
            "framework": [{ "name": "PyTorch", "level": 1.5 }],
            "description":"画像に写っている物体が「○○である」か「○○ではない」かの二値分類を実装しました。",
            "purpose":["機械学習"]
        },
        {
            "lang": "PHP",
            "level": 1.5,
            "description":"Udemyで基本文法と簡単なwebAPIを学んだレベル。",
            "purpose":["バックエンド"]
        },
        {
            "lang": "C#",
            "level": 0.3,
            "framework":[{"name":"OpenCVSharp", "level":0.3}],
            "description":"ステレオカメラを用いて特徴点ベースでの距離計測を行ってました。",
        },
        {
            "lang": "MATLAB",
            "level": 0.4,
            "description":"大学の授業で二重振子の制御シミュレータを実装しました。",
            "purpose":["シミュレーション"]
        }
    ]

const product =
    [
        {
            "title":"麻雀の符計算",
            "level":"EASY(1週間)",
            "tech":["TypeScript", "React", "MUI", "Vercel"],
            "description":"メンツとか待ちとかを入力すると点数を返します。TypeScript×Reactの練習で作りました。バグ報告待ってます。",
            "url":"https://mahjong-calculator-lac.vercel.app/"
        }
    ]

const contact =
    [
        { "type": "E-mail", "content": "daichi.hirano.sb@gmail.com" },
        { "type": "GitHub", "content": "https://github.com/daichihirano" },
        { "type": "LinkedIn", "content": "https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" }
    ]
export { profile, career, skill, product, contact }