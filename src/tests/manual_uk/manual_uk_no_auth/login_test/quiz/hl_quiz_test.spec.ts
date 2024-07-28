import {test} from "../../../../../fixtures/base";
import hairloss_quistions from "../../../../../data/quiz/hl_quiz.json";

test.describe("Hairloss Quiz", () => {
    const totalQuestions = hairloss_quistions.questionsList.length;
    for(let i = 0; i < totalQuestions; i++){   
        test(`HL Question ${i+1}`, async ({page, hairloss, basePage}) => {
            let questionToGoTo = i+1;
            await page.goto(`/n/hair-loss/quiz/1`);
            await basePage.clickAcceptCookies();

            // if(hairloss_quistions.questionsList[i].parentQuestion != null){
            while(hairloss_quistions.questionsList[i].parentQuestion != null){
                const questionId = hairloss_quistions.questionsList[i].id;
                const parentQuestion = hairloss_quistions.questionsList[i].parentQuestion;
                const questionIndex = hairloss_quistions.questionsList.findIndex((question) => question.id === questionId);
                const parentQuestionIndex = hairloss_quistions.questionsList.findIndex((question) => question.id === parentQuestion);
                const parentQuestionCondition = hairloss_quistions.questionsList[i].parentQuestionCondition;
                // console.log("Question Index: " + questionIndex);
                // console.log("Parent Question Index: " + parentQuestionIndex);
                // console.log("Parent Question Condition: " + parentQuestionCondition);                

                await page.goto(`/n/hair-loss/quiz/${parentQuestionIndex + 1}`);
                if (parentQuestionCondition != null) {
                    await hairloss.selectYesyOrNo(parentQuestionCondition);
                }
            }

            await page.goto(`/n/hair-loss/quiz/${questionToGoTo}`);
            await hairloss.assertQueastionIsVisible();
            await hairloss.assertQuestionText(hairloss_quistions.questionsList[i].question);
            console.log(hairloss_quistions.questionsList[i].question);
        });
    };
});