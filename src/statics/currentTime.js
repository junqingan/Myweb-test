
var date = new Date().getTime();
var oldDoc = document.querySelectorAll(".old");
var oldDoc1 = document.querySelectorAll(".old1");
var oldDoc2 = document.querySelectorAll(".old2");
for (var i = 0; i < oldDoc.length; i++) {
	//获取预售开始时间的时间戳
	var startDate = oldDoc[i].innerHTML.slice(5);
	var startTime = new Date(startDate).getTime();	
	//获取预售截止时间的时间戳
	var endDate = oldDoc1[i].innerHTML.slice(5);
	var endTime = new Date(endDate).getTime();
	if(date < startTime){
		oldDoc[i].style.display = "block";
		oldDoc1[i].style.display = "none";
		oldDoc2[i].style.display = "none";
	}else if(date > startTime && date < endTime){
		oldDoc[i].style.display = "none";
		oldDoc1[i].style.display = "block";
		oldDoc2[i].style.display = "none";
	}else if(date > endTime){
		oldDoc[i].style.display = "none";
		oldDoc1[i].style.display = "none";
		oldDoc2[i].style.display = "block";
	}
}
