'use client';
import { useState } from "react";

export default function Page() {
    const [suggestedMethod, setSuggestedMethod] = useState("");
    const [selectedCourses, setSelectedCourses] = useState([]);

    // الدالة لتحليل الإجابات وتقديم النصيحة بناءً على طريقة الدراسة
    const getStudyAdvice = (studyMethod) => {
        if (studyMethod === "تقنية الطماطم") {
            return "تقنية الطماطم رائعة لتحسين التركيز. ولكن إذا كنت بحاجة إلى تحسين الذاكرة، يمكنك تجربة المراجعة النشطة.";
        } else if (studyMethod === "المراجعة النشطة") {
            return "المراجعة النشطة فعالة جدًا لتحسين الحفظ. ولكن قد تحتاج إلى فترات استراحة قصيرة. جرب تقنية الطماطم.";
        } else if (studyMethod === "الممارسة المتقطعة") {
            return "الممارسة المتقطعة جيدة ولكنك قد تحتاج إلى وقت أكبر لتثبيت المعلومات. تأكد من أخذ فترات راحة.";
        } else if (studyMethod === "تدوين الملاحظات النشطة") {
            return "تدوين الملاحظات النشطة يساعد في الفهم العميق. يمكنك دمجها مع خريطة المفاهيم لتقوية الترابط بين المعلومات.";
        } else if (studyMethod === "خريطة المفاهيم") {
            return "خريطة المفاهيم تساعد في تنظيم المعلومات، جرب دمجها مع المراجعة النشطة.";
        } else if (studyMethod === "الدراسة الجماعية") {
            return "الدراسة الجماعية ممتازة لتحفيز التفاعل، ولكن تأكد من أنك لا تضيع وقتك في المحادثات غير المهمة.";
        } else if (studyMethod === "التعليم الذاتي") {
            return "التعليم الذاتي جيد للغاية، لكن تأكد من أنك تستعين بمصادر موثوقة.";
        } else if (studyMethod === "التعلم عن طريق الأمثلة") {
            return "التعلم عن طريق الأمثلة يساعد في الفهم العميق. حاول أن تكون الأمثلة متنوعة.";
        } else if (studyMethod === "التصور العقلي") {
            return "التصور العقلي يساعد في ترسيخ المعلومات في الذهن. حاول أن تتخيل مفاهيمك وأنت تدرس.";
        } else if (studyMethod === "تقسيم المهام") {
            return "تقسيم المهام طريقة رائعة لتحسين الإنتاجية. حاول تحديد أولوياتك بشكل دقيق.";
        }
        return "لا يوجد طريقة دراسية واحدة صحيحة. جرب دمج عدة طرق للحصول على أفضل النتائج.";
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const studyMethod = form.elements["current_study_method"].value;

        // استدعاء الخوارزمية لتحديد النصيحة بناءً على الطريقة المختارة
        const advice = getStudyAdvice(studyMethod);

        // عرض النصيحة
        setSuggestedMethod(advice);
    };

    const handleCourseSelection = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions).map((option) => option.value);
        setSelectedCourses(selectedOptions);
    };

    return (
        <div className="container">
            <h1>مشروع تحسين الأداء الدراسي</h1>
            <form id="study-improvement-form" onSubmit={handleSubmit}>
                <div className="question">
                    <label>6- المواد التي درستها:</label><br />
                    <select name="courses" multiple onChange={handleCourseSelection}>
                        <option value="CIS 120">نظم معلومات حاسوبية (CIS 120)</option>
                        <option value="STAT 101">إحصاء (STAT 101)</option>
                        <option value="CS 111">برمجة بلغة مختارة (CS 111)</option>
                        <option value="DA 350">تعلم آلي (DA 350)</option>
                        <option value="MATH 101">تفاضل وتكامل (MATH 101)</option>
                    </select>
                </div>

                {selectedCourses.map((course, index) => (
                    <div className="question" key={index}>
                        <label>ما هي العلامة التي حصلت عليها في {course}؟</label><br />
                        <input type="number" name={`grade_${course}`} placeholder="أدخل العلامة من 100" />
                    </div>
                ))}

                <div className="question">
                    <label>9- طريقة دراستك الحالية:</label><br />
                    <select name="current_study_method">
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

            {suggestedMethod && (
                <div className="suggestion">
                    <h2>نصيحة الدراسة:</h2>
                    <p>{suggestedMethod}</p>
                </div>
            )}
        </div>
    );
}
