import "./App.css";
import data from "./data";
import SingleQuestion from "./Question";
import { useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
