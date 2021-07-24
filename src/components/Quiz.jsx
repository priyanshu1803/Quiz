import React,{useState} from "react";
import "../quiz.css";

const Quiz =()=>{

    const questions=[
    {
         "id": "9c7ba8fc-e097-11eb-ba80-0242ac130004", 
         "question": "Where is Taj Mahal ?", 
        "options": [
          { "id": "1",
            "option": "Kanpur"
          },
          { "id": "2",
            "option": "Rajasthan"
          },
          { "id": "3",
            "option": "Agra"
          },
          { "id": "4",
            "option": "New York"
          },
        ],
  "answerId": "3"
  },

 { "id": "9c7ba8fc-e097-11eb-ba80-0242ac130005",
  "question": "Which is the capital of India ?",
  "options": [
    { "id": "1",
      "option": "Rajasthan"
    },
    { "id": "2",
      "option": "Gurgaon"
    },
    { "id": "3",
      "option": "Agra"
    },
    { "id": "4",
      "option": "New Delhi"
    },
  ],
"answerId": "4"
},

{ "id": "9c7ba8fc-e097-11eb-ba80-0242ac130006",
  "question": "Where is Golden Temple ?",
  "options": [
    { "id": "1",
      "option": "Amritsar"
    },
    { "id": "2",
      "option": "Rajasthan"
    },
    { "id": "3",
      "option": "Agra"
    },
    { "id": "4",
      "option": "New York"
    },
  ],
"answerId": "1"
}
];

const result = [];

  
  const [currentQuestion, setCurrentQuestion]=useState(0)
  const [currentQuesOptionSelected, setOptionId]=useState(-1)
  

  const handleAnswerClick=(quesId, optionId)=>{
    

    const answerId = questions[quesId].answerId;
    result.push({...questions[quesId], selectedOption: optionId});
     
      setOptionId(optionId)

    setTimeout(() => {
    const nextQuestion=currentQuestion+1;
        if (nextQuestion < questions.length){
        setOptionId(-1)
        setCurrentQuestion(nextQuestion)
        }else{
          alert("Last question reached")

           
        }
      },1000);
  }



return(
        <>  
            <div className="main">

                <div className="question_section">
                    <div className="question_count">
                        <span>Question {currentQuestion+1}</span>/{questions.length}
                    </div>
                    <div className="question_text">{questions[currentQuestion].question}</div>
                </div>

                <div className="answer_section">
                    {questions[currentQuestion].options.map((options)=>(
                        <button  className={ (currentQuesOptionSelected  == -1 || (options['id'] != currentQuesOptionSelected  && options['id'] != questions[currentQuestion]['answerId'] ))? "button_style" : (currentQuesOptionSelected == options['id'] && options['id'] != questions[currentQuestion]['answerId'])? 'wrong_answer' : 'button_style_changed' }

                        onClick={()=>handleAnswerClick(currentQuestion, options['id'])}
                        >
                        {options.option}</button>
                    ))}
                </div>
            </div>    
            </>
                    

    )
}

export default Quiz;