import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const StudyMethodRecommender = () => {
  const [answers, setAnswers] = useState({});
  const [recommendedMethod, setRecommendedMethod] = useState(null);

  const surveyQuestions = [
    {
      id: 1,
      text: "كيف درست مواد الفهم؟",
      type: "select",
      options: ["مشاهدة فيديو", "القراءة", "الكتابة", "الكتابة والقراءة"]
    },
    {
      id: 2,
      text: "متى تكون أكثر نشاطًا؟",
      type: "select",
      options: ["8:00 - 12:00", "12:00 - 4:00", "6:00 - 10:00", "10:00 - 12:00"]
    },
    {
      id: 3,
      text: "كيف تفضل أن تدرس؟",
      type: "select",
      options: ["منفردًا", "في مجموعة"]
    },
    {
      id: 4,
      text: "كم دقيقة تستطيع البقاء محافظًا على تركيزك أثناء الدراسة؟",
      type: "number",
      placeholder: "أدخل عدد الدقائق"
    },
    {
      id: 5,
      text: "ما هي الأدوات التي تستخدمها لإدارة وقتك؟",
      type: "select",
      options: ["نعم", "لا"]
    },
    {
      id: 6,
      text: "ما هي المواد التي درستها؟",
      type: "select",
      options: ["نظم معلومات حاسوبية (CIS 120)", "إحصاء (STAT 101)", "مواد أخرى"]
    },
    {
      id: 7,
      text: "ما هي العلامة التي حصلت عليها في مقدمة نظم المعلومات؟",
      type: "select",
      options: ["80-89", "90-100"]
    },
    {
      id: 8,
      text: "ما هو معدلك الحالي؟",
      type: "number",
      placeholder: "أدخل معدلك"
    }
  ];

  const studyMethods = {
    "التعليم الذاتي": {
      score: 0,
      description: "طريقة دراسة مستقلة تعتمد على التعلم الفردي والتنظيم الذاتي.",
      tips: [
        "وضع جدول زمني منظم",
        "تحديد أهداف واضحة",
        "استخدام مصادر متنوعة للتعلم"
      ]
    },
    "الممارسة المتقطعة": {
      score: 0,
      description: "دراسة متقطعة مع فترات راحة بين جلسات الدراسة.",
      tips: [
        "تقسيم وقت الدراسة لفترات قصيرة",
        "أخذ استراحات منتظمة",
        "تحديد أهداف لكل جلسة دراسية"
      ]
    },
    "تقنية البومودورو": {
      score: 0,
      description: "طريقة دراسة تعتمد على فترات دراسة محددة مع استراحات قصيرة.",
      tips: [
        "العمل لمدة 25 دقيقة ثم أخذ استراحة 5 دقائق",
        "استخدام مؤقت لتنظيم الوقت",
        "تتبع التقدم في الدراسة"
      ]
    },
    "تدوين الملاحظات النشطة": {
      score: 0,
      description: "طريقة دراسة تعتمد على التلخيص والكتابة النشطة.",
      tips: [
        "تدوين النقاط الرئيسية أثناء الدراسة",
        "استخدام الألوان والرسومات التوضيحية",
        "مراجعة الملاحظات بشكل منتظم"
      ]
    }
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const analyzeStudyMethod = () => {
    // إعادة تعيين النقاط
    Object.keys(studyMethods).forEach(method => {
      studyMethods[method].score = 0;
    });

    // تحليل الإجابات وتعيين النقاط
    if (answers[1] === "الكتابة والقراءة") {
      studyMethods["تدوين الملاحظات النشطة"].score += 2;
    }

    if (answers[2] === "8:00 - 12:00") {
      studyMethods["التعليم الذاتي"].score += 1;
      studyMethods["تقنية البومودورو"].score += 1;
    }

    if (answers[3] === "منفردًا") {
      studyMethods["التعليم الذاتي"].score += 2;
    }

    if (Number(answers[4]) > 45) {
      studyMethods["تقنية البومودورو"].score += 2;
    }

    if (answers[5] === "نعم") {
      studyMethods["الممارسة المتقطعة"].score += 1;
    }

    if (answers[7] === "90-100") {
      studyMethods["التعليم الذاتي"].score += 2;
    }

    if (Number(answers[8]) > 85) {
      studyMethods["التعليم الذاتي"].score += 2;
    }

    // اختيار أفضل طريقة
    const bestMethod = Object.keys(studyMethods).reduce((a, b) => 
      studyMethods[a].score > studyMethods[b].score ? a : b
    );

    setRecommendedMethod(bestMethod);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>اختيار أفضل طريقة دراسة</CardTitle>
        </CardHeader>
        <CardContent>
          {surveyQuestions.map(question => (
            <div key={question.id} className="mb-4">
              <p className="mb-2 font-bold">{question.text}</p>
              {question.type === "select" && (
                <Select onValueChange={(value) => handleAnswerChange(question.id, value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    {question.options.map(option => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {question.type === "number" && (
                <Input 
                  type="number" 
                  placeholder={question.placeholder}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                />
              )}
            </div>
          ))}
          
          <Button 
            onClick={analyzeStudyMethod} 
            className="w-full mt-4"
          >
            تحليل طريقة الدراسة
          </Button>

          {recommendedMethod && (
            <div className="mt-4 p-3 bg-gray-100 rounded">
              <h3 className="font-bold mb-2">الطريقة المناسبة لك:</h3>
              <p>{recommendedMethod}</p>
              <p className="mt-2">{studyMethods[recommendedMethod].description}</p>
              
              <h4 className="font-semibold mt-2">نصائح:</h4>
              <ul className="list-disc pr-5">
                {studyMethods[recommendedMethod].tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyMethodRecommender;
