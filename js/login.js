var API_URL = 'https://api.gbc.cncima.com'
var flyio=new Fly;
flyio.config.baseURL = API_URL;
flyio.interceptors.request.use((request) => {
    request.headers = {
        Authorization: window.localStorage.app_token,
    };
    return request;
});


var start_date 	= '2022-01-01 10:00:00'
var end_date = '2025-05-31 10:00:00'
var start_t = (new Date(start_date)).getTime(),
	now_t	= (new Date()).getTime(),
	end_t= (new Date(end_date)).getTime()
if(start_t > now_t){
	//未开始
	// $("#loginBtn").css("display","none")
	$("#loginBtn .code-wrap .txt").css("display","inline-block")
	// $(".need-show").text('3月24日开放报名').css('display','inline-block')
}else if(now_t > end_t){
	$("#endVote").css("display","block")
}else{
	$("#loginBtn .code-wrap img").css('display','block')
	//开始
	// $(".need-show").prop('href',"http://gbc.cncima.com/report/login").prop('target',"_blank").text('报名赛事').css('display','inline-block')
}







function getUserInfo(){
	var name = 'arui'
	flyio.get('/user/me').then((e)=>{
		console.log(e)
		if(e.data.code === 200){
			name = e.data.data.real_name
			$(".button-box").css("display","none")
			$(".out-box").css("display","block")
			$("#userName").text(name).css('color','#fff')
		}else{
			window.localStorage.removeItem('app_token')
		}
	}) 
}


function logout(){
	window.localStorage.removeItem('app_token')
	$(".button-box").css("display","block")
	$(".out-box").css("display","none")			
}