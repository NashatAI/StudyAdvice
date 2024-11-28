export default function Page() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>استبيان لتحسين الأداء الدراسي</h1>
      <form>
        <div>
          <label>1. كيف درست مواد الفهم؟</label>
          <select>
            <option>مشاهدة فيديو</option>
            <option>الكتابة والقراءة</option>
            <option>القراءة</option>
            <option>الكتابة</option>
            <option>الدراسة الجماعية</option>
          </select>
        </div>
        <div>
          <label>2. متى تكون أكثر نشاطًا؟</label>
          <input type="text" placeholder="اكتب هنا الساعات مع ترميز صباحًا أو مساءً" />
        </div>
        <div>
          <label>3. كيف تفضل أن تدرس؟</label>
          <input type="radio" name="study-preference" value="group" /> في مجموعة
          <input type="radio" name="study-preference" value="alone" /> منفرداً
        </div>
        <div>
          <label>4. كم دقيقة تستطيع البقاء محافظًا على تركيزك أثناء الدراسة؟</label>
          <input type="number" placeholder="أدخل عدد الدقائق" />
        </div>
        <div>
          <label>5. ما هي الأدوات التي تستخدمها لإدارة وقتك؟</label>
          <select>
            <option>تقاويم رقمية</option>
            <option>تطبيقات إدارة المهام</option>
            <option>جداول زمنية ورقية</option>
            <option>لا أستخدم أي أدوات</option>
          </select>
        </div>
        <div>
          <label>6. المواد التي درستها:</label>
          <textarea placeholder="اكتب أسماء المواد التي درستها..." />
        </div>
        <div>
          <label>7. ما هي العلامة التي حصلت عليها في مساق؟</label>
          <textarea placeholder="أدخل العلامة أو درجتك..." />
        </div>
        <div>
          <label>8. معدلك الحالي:</label>
          <input type="number" placeholder="أدخل المعدل الحالي" />
        </div>
        <div>
          <button type="submit">إرسال الاستبيان</button>
        </div>
      </form>
    </div>
  );
}
