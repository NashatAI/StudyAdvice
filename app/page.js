export default function Page() {
    return (
        <div className="container">
            <h1>مشروع تحسين الأداء الدراسي</h1>
            <form id="study-improvement-form">
                <div className="question">
                    <label>1- كيف درست مواد الفهم؟</label><br />
                    <input type="checkbox" name="study_method" value="مشاهدة فيديو" /> مشاهدة فيديو<br />
                    <input type="checkbox" name="study_method" value="الكتابة والقراءة" /> الكتابة والقراءة<br />
                    <input type="checkbox" name="study_method" value="القراءة" /> القراءة<br />
                    <input type="checkbox" name="study_method" value="الكتابة" /> الكتابة<br />
                    <input type="checkbox" name="study_method" value="الدراسة الجماعية" /> الدراسة الجماعية<br />
                </div>
                <div className="question">
                    <label>2- متى تكون أكثر نشاطًا؟</label><br />
                    <input type="radio" name="active_hours" value="4:00AM - 8:00AM" /> 4:00AM - 8:00AM<br />
                    <input type="radio" name="active_hours" value="8:00AM - 12:00PM" /> 8:00AM - 12:00PM<br />
                    <input type="radio" name="active_hours" value="12:00PM - 2:00PM" /> 12:00PM - 2:00PM<br />
                    <input type="radio" name="active_hours" value="6:00PM - 10:00PM" /> 6:00PM - 10:00PM<br />
                    <input type="radio" name="active_hours" value="10:00PM - 12:00AM" /> 10:00PM - 12:00AM<br />
                    <input type="radio" name="active_hours" value="12:00AM - 4:00AM" /> 12:00AM - 4:00AM<br />
                </div>
                <div className="question">
                    <label>3- كيف تفضل أن تدرس؟</label><br />
                    <input type="radio" name="study_preference" value="في مجموعة" /> في مجموعة<br />
                    <input type="radio" name="study_preference" value="منفرداً" /> منفرداً<br />
                </div>
                <div className="question">
                    <label>4- كم دقيقة تستطيع البقاء محافظًا على تركيزك أثناء الدراسة؟</label><br />
                    <input type="number" name="focus_duration" placeholder="أدخل عدد الدقائق" />
                </div>
                <div className="question">
                    <label>5- ما هي الأدوات التي تستخدمها لإدارة وقتك؟</label><br />
                    <input type="checkbox" name="time_tools" value="تقاويم رقمية" /> تقاويم رقمية<br />
                    <input type="checkbox" name="time_tools" value="تطبيقات إدارة المهام" /> تطبيقات إدارة المهام<br />
                    <input type="checkbox" name="time_tools" value="جداول زمنية ورقية" /> جداول زمنية ورقية<br />
                    <input type="checkbox" name="time_tools" value="لا أستخدم أي أدوات" /> لا أستخدم أي أدوات<br />
                </div>
                <div className="question">
                    <label>6- المواد التي درستها:</label><br />
                    <select name="courses">
                        <option value="CIS 120">نظم معلومات حاسوبية (CIS 120)</option>
                        <option value="STAT 101">إحصاء (STAT 101)</option>
                        <option value="CS 111">برمجة بلغة مختارة (CS 111)</option>
                        <option value="DA 350">تعلم آلي (DA 350)</option>
                        <option value="MATH 101">تفاضل وتكامل (MATH 101)</option>
                    </select>
                </div>
                <div className="question">
                    <label>7- ما هي العلامة التي حصلت عليها في المساق؟</label><br />
                    <input type="number" name="grade" placeholder="أدخل العلامة من 100" />
                </div>
                <div className="question">
                    <label>8- معدلك الحالي:</label><br />
                    <input type="number" step="0.01" name="gpa" placeholder="أدخل المعدل (4.00)" />
                </div>
                <div className="question">
                    <label>9- طريقة دراستك الحالية:</label><br />
                    <select name="current_study_method" target="value">
                        <option value="تقنية الطماطم">تقنية الطماطم</option>
                        <option value="المراجعة النشطة">المراجعة النشطة</option>
                        <option value="الممارسة المتقطعة">الممارسة المتقطعة</option>
                        <option value="تدوين الملاحظات النشطة">تدوين الملاحظات النشطة</option>
                        <option value="خريطة المفاهيم">خريطة المفاهيم</option>
                        <option value="الدراسة الجماعية">الدراسة الجماعية</option>
                        <option value="التعليم الذاتي">التعليم الذاتي</option>
                        <option value="التعلم عن طريق الأمثلة">التعلم عن طريق الأمثلة</option>
                        <option value="التصور العقلي">التصور العقلي</option>
                        <option value="تقسيم المهام">تقسيم المهام</option>
                    </select>
                </div>
                <button type="submit">إرسال</button>
            </form>
        </div>
    );
}
