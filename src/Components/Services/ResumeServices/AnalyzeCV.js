import React from "react";
import { marked } from "marked";

function AnalyzeCV() {
  const response = `
**Resume Analysis Results**

**Job Description Summary:**
Seeking a **Data Scientist** with experience in **machine learning**, **data analysis**, and **Python** programming. Ideal candidates will have skills in **statistics**, **data visualization**, and experience working with **large datasets**.

**Analysis Findings:**

1. **Relevant Skills Found:**
   - **Python**: Good knowledge, highlighted in multiple projects.
   - **Machine Learning**: Mentioned, but limited examples provided.
   - **Data Visualization**: Skills demonstrated in 2 projects.
   - **Statistics**: Basic understanding shown, but could use more detail.

2. **Skills to Highlight More:**
   - **Big Data Technologies**: Not enough detail on experience with tools like **Hadoop** or **Spark**.
   - **Advanced Statistical Methods**: Briefly mentioned but could be expanded with specific techniques (e.g., regression analysis, hypothesis testing).
   - **Communication Skills**: Important for presenting findings; consider adding examples of reports or presentations given.

3. **Suggested Improvements:**
   - Add a **project** showcasing **end-to-end machine learning** with **large datasets**.
   - Include any **certifications** or **courses** related to data science, especially in **big data** tools or advanced analytics.
   - Mention any experience with **cross-functional teams** to demonstrate collaboration skills.

_Overall, your resume shows potential for this role, but emphasizing relevant experience with large datasets and statistical methods will strengthen it._ 

For more tips, visit our resources at [example.com](https://example.com).
`;

  const ana = marked.parse(response);

  return (
    <div
      style={{
        backgroundColor: "white",
        WebkitBoxShadow: "3px 0px 5px -3px rgba(0,0,0,0.75)",
        boxShadow: "3px 0px 5px -3px rgba(0,0,0,0.75)",
        padding: "1rem",
        marginTop: "2rem",
        width: "95%",
        borderRadius: "15px",
        marginBottom: "1rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Resume Analysis
      </h1>
      <div>
        <h2>Enter Job Description</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <textarea
            rows={10}
            style={{
              width: "90%",
              fontSize: "1rem",
              padding: "1rem",
              fontFamily: "sans-serif",
            }}
            placeholder="Paste your JD here"
          />
          <button
            style={{
              width: "93%",
              height: "2.2rem",
              marginTop: "2rem",
              backgroundColor: "#5d95f5",
              borderRadius: "10px",
              fontSize: "1.1rem",
              color: "white",
              marginBottom: "2rem",
            }}
            type="submit"
          >
            Analyze My CV
          </button>
        </form>
        <h1>Analysis Result</h1>
        <div dangerouslySetInnerHTML={{ __html: ana }} />
      </div>
    </div>
  );
}

export default AnalyzeCV;
