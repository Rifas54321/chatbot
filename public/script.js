$(document).ready(()=>{
  const url = "https://gemini-api-q1jv.onrender.com/ask"
  const header = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
  $("#snd-btn").click(()=>{
    let msg="";
    let text = $("#user-input").val();
    //$("#user-message").text(text)
    const data = {
      prompt:text
    }
    $("#user-input").val("")
    let userLi = document.createElement("li");
    let chatContent=`<p>${text}</p>`
    userLi.classList.add("chat","outgoing")
    userLi.innerHTML=chatContent
    $(".chatbox").append(userLi)
    function botOutput(msg){
    let botLi = document.createElement("li");
    let botContent=`<span class="fa-solid fa-robot"></span>
          <p id="bot-message">${msg}</p>`
    botLi.classList.add("chat","incoming");
    botLi.innerHTML=botContent;
    $(".chatbox").append(botLi)
    }
   /* setTimeout(()=>{
      botOutput("this is your answer")
    },1000)*/
    axios.post(url,data,{headers:header}).then((res)=>{
      const result = res.data.answer.trim();
     // $("#ans").val(result);
     //alert(result)
     botOutput(result)
    })
    
  })
})