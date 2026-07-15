// AI Career Recommendation Function

function recommendCareer() {

    let subject = document.getElementById("subject").value;
    let interest = document.getElementById("interest").value;
    let goal = document.getElementById("goal").value;

    let result = document.getElementById("result");

    // Check if all questions are answered
    if(subject === "" || interest === "" || goal === ""){

        result.style.color = "red";
        result.innerHTML = "⚠ Please answer all the questions.";

        return;
    }

    // AI Engineer
    if(goal === "ai" || (subject === "programming" && interest === "coding")){

        result.style.color = "#2563eb";

        result.innerHTML = `
        🤖 <b>Recommended Career: AI Engineer</b><br><br>
        You enjoy programming and solving problems.
        AI Engineering is an excellent career for you.
        `;

    }

    // Data Scientist
    else if(goal === "data" || (subject === "math" && interest === "analysis")){

        result.style.color = "#16a34a";

        result.innerHTML = `
        📊 <b>Recommended Career: Data Scientist</b><br><br>
        You like mathematics and data analysis.
        Data Science is the right career path.
        `;

    }

    // Cloud Engineer
    else if(goal === "cloud" || (subject === "network" && interest === "servers")){

        result.style.color = "#0ea5e9";

        result.innerHTML = `
        ☁ <b>Recommended Career: Cloud Engineer</b><br><br>
        You enjoy networking and cloud technologies.
        Consider becoming a Cloud Engineer.
        `;

    }

    // Web Developer
    else{

        result.style.color = "#f97316";

        result.innerHTML = `
        💻 <b>Recommended Career: Web Developer</b><br><br>
        You are creative and interested in designing websites.
        Web Development is a great career for you.
        `;

    }

}