<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تطوير الأداء الدراسي</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            padding: 20px;
            direction: rtl;
            text-align: right;
        }
        h1 {
            text-align: center;
            color: #4CAF50;
        }
        form {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: auto;
        }
        label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
        }
        input[type="radio"],
        input[type="checkbox"] {
            margin-left: 10px;
        }
        input[type="number"],
        select {
            width: 100%;
            padding: 10px;
            margin: 10px 0 20px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
        .question {
            font-size: 1.1em;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>تطوير الأداء الدراسي</h1>
    <form action="#" method="post">
        <label class="question" for="comprehension">1. كيف درست مواد الفهم؟</label><br>
        <input type="radio" id="video" name="comprehension" value="مشاهدة فيديو">
        <label for="video">مشاهدة فيديو</label><br>
        <input type="radio" id="reading" name="comprehension" value="القراءة">
        <label for="reading">القراءة</label><br>
        <input type="radio" id="writing" name="comprehension" value="الكتابة">
        <label for="writing">الكتابة</label><br>
        <input type="radio" id="writing-reading" name="comprehension" value="الكتابة والقراءة">
        <label for="writing-reading">الكتابة والقراءة</label><br><br>

        <label class="question" for="activity-time">2. متى تكون أكثر نشاطًا؟</label><br>
        <input type="checkbox" id="morning1" name="activity-time" value="8:00 AM - 12:00 PM">
        <label for="morning1">8:00 AM - 12:00 PM</label><br>
        <input type="checkbox" id="afternoon" name="activity-time" value="12:00 PM - 4:00 PM">
        <label for="afternoon">12:00 PM - 4:00 PM</label><br>
        <input type="checkbox" id="evening" name="activity-time" value="6:00 PM - 10:00 PM">
        <label for="evening">6:00 PM - 10:00 PM</label><br>
        <input type="checkbox" id="night" name="activity-time" value="10:00 PM - 12:00 AM">
        <label for="night">10:00 PM - 12:00 AM</label><br><br>

        <label class="question" for="study-preference">3. كيف تفضل أن تدرس؟</label><br>
        <input type="radio" id="alone" name="study-preference" value="منفردًا">
        <label for="alone">منفردًا</label><br>
        <input type="radio" id="group" name="study-preference" value="في مجموعة">
        <label for="group">في مجموعة</label><br><br>

        <label class="question" for="focus-time">4. كم دقيقة تستطيع البقاء محافظًا على تركيزك أثناء الدراسة؟</label><br>
        <input type="number" id="focus-time" name="focus-time" min="1" max="300"><br><br>

        <label class="question" for="time-management">5. ما هي الأدوات التي تستخدمها لإدارة وقتك؟</label><br>
        <input type="checkbox" id="digital-calendars" name="time-management" value="تقاويم رقمية">
        <label for="digital-calendars">تقاويم رقمية</label><br>
        <input type="checkbox" id="task-apps" name="time-management" value="تطبيقات إدارة المهام">
        <label for="task-apps">تطبيقات إدارة المهام</label><br>
        <input type="checkbox" id="paper-schedules" name="time-management" value="جداول زمنية ورقية">
        <label for="paper-schedules">جداول زمنية ورقية</label><br>
        <input type="checkbox" id="no-tools" name="time-management" value="لا أستخدم أي أدوات">
        <label for="no-tools">لا أستخدم أي أدوات</label><br><br>

        <label class="question" for="subjects">6. المواد التي درستها</label><br>
        <input type="checkbox" id="cis120" name="subjects" value="نظم معلومات حاسوبية (CIS 120)">
        <label for="cis120">نظم معلومات حاسوبية (CIS 120)</label><br>
        <input type="checkbox" id="stat101" name="subjects" value="احصاء (STAT 101)">
        <label for="stat101">احصاء (STAT 101)</label><br>
        <input type="checkbox" id="cs111" name="subjects" value="برمجه بلغة مختارة (CS 111)">
        <label for="cs111">برمجه بلغة مختارة (CS 111)</label><br>
        <input type="checkbox" id="da350" name="subjects" value="تعلم آلي (DA 350)">
        <label for="da350">تعلم آلي (DA 350)</label><br>
        <input type="checkbox" id="math101" name="subjects" value="تفاضل وتكامل (MATH 101)">
        <label for="math101">تفاضل وتكامل (MATH 101)</label><br><br>

        <div id="grades-section">
            <label class="question" for="grade1">7. ما هي العلامة التي حصلت عليها في مساق نظم معلومات حاسوبية (CIS 120)</label><br>
            <select id="grade1" name="grade1">
                <option value="90-100">90-100</option>
                <option value="80-89">80-89</option>
                <option value="70-79">70-79</option>
                <option value="60-69">60-69</option>
                <option value="50-59">50-59</option>
            </select><br>

            <label class="question" for="grade2">8. ما هي العلامة التي حصلت عليها في مساق احصاء (STAT 101)</label><br>
            <select id="grade2" name="grade2">
                <option value="90-100">90-100</option>
                <option value="80-89">80-89</option>
                <option value="70-79">70-79</option>
                <option value="60-69">60-69</option>
                <option value="50-59">50-59</option>
            </select><br>

            <label class="question" for="grade3">9. ما هي العلامة التي حصلت عليها في مساق برمجه بلغة مختارة (CS 111)</label><br>
            <select id="grade3" name="grade3">
                <option value="90-100">90-100</option>
                <option value="80-89">80-89</option>
                <option value="70-79">70-79</option>
                <option value="60-69">60-69</option>
                <option value="50-59">50-59</option>
            </select><br>

            <label class="question" for="grade4">10. ما هي العلامة التي حصلت عليها في مساق تعلم آلي (DA 350)</label><br>
            <select id="grade4" name="grade4">
                <option value="90-100">90-100</option>
                <option value="80-89">80-89</option>
                <option value="70-79">70-79</option>
                <option value="60-69">60-69</option>
                <option value="50-59">50-59</option>

            </select><br>
        </div><br>

        <label for="current-gpa">11. معدلك الحالي</label><br>
        <input type="number" id="current-gpa" name="current-gpa" min="1" max="100"><br><br>

        <input type="submit" value="إرسال">
    </form>
</body>
</html>


    
