//我的预售处理提示信息js
//待支付订金
var mydate = new Date().getTime();
var endTimeDoc = document.querySelectorAll(".endTime");
if (endTimeDoc.length) {
	var endTimeTexts = document.querySelectorAll(".endTimeText");
	var btns = document.querySelectorAll(".btn-status");
	for (var i = 0; i < endTimeDoc.length; i++) {
		var endTime = new Date(endTimeDoc[i].innerText).getTime(); 
		if(mydate >= endTime){
			endTimeTexts[i].innerText = "*温馨提示：订金支付已在"+ endTimeDoc[i].innerText +"截止！";
			btns[i].style.display = "none";
		}
	}
}

//待支付尾款
var balanceStartTextDoc = document.querySelectorAll(".balanceStartText");
var balanceTimeDoc = document.querySelectorAll(".balanceTime");
var balanceEndTimeDoc = document.querySelectorAll(".balanceEndTime");
var displayTextDoc = document.querySelectorAll(".displayText");
if (balanceStartTextDoc.length){
	var btn = document.querySelectorAll(".btn-balance");
	for (var i = 0; i < balanceStartTextDoc.length; i++) {
		var startTime = new Date(balanceTimeDoc[i].innerText).getTime();
		var balanceEndTime = new Date(balanceEndTimeDoc[i].innerText).getTime();
		if (mydate < startTime) {
			balanceStartTextDoc[i].innerText = "*温馨提示：尾款支付将在"+ balanceTimeDoc[i].innerText + "开始！";
			btn[i].style.display = "none";
		}else if(mydate > startTime && mydate < balanceEndTime){
			balanceStartTextDoc[i].innerHTML = "*温馨提示：尾款支付将在"+ balanceEndTimeDoc[i].innerText + "截止！";
			displayTextDoc[i].style.display = "block";
			displayTextDoc[i].style.display = "inline";
		}else if(mydate > balanceEndTime){
			balanceStartTextDoc[i].innerHTML = "*温馨提示：尾款支付已在"+ balanceEndTimeDoc[i].innerText + "截止！";
			displayTextDoc[i].style.display = "block";
			displayTextDoc[i].style.display = "inline";
			btn[i].style.display = "none";
		}
	}
}


