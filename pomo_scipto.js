/*------------------------------------------------------------------------------------------------------------*/
		function clock() {
			window. date = new Date();
			window. hrs = date.getHours();
			window.mins = date.getMinutes();
			window. secs = date.getSeconds();
			hrs = hrs < 10 ? `0${hrs}` : hrs;
			mins = mins < 10 ? `0${mins}` : mins;
			
			let time = `${hrs}:${mins}`;
			setInterval(clock, 1000);
			document.getElementById("clock").innerText = time;
			
		}
		
		clock();
		var flag=0;
		var a;
		window.b;
		var hr=0;
		var min=0;
		function take(){
			
			if(flag==0){
				flag=1
				a=document.getElementById("hr").value;
				b=document.getElementById("mins").value;
				interval=setInterval(start, 1000);
			} 
			else{
				
	console.log("Time for break")
}
	}
	
	function start()

	{ 
		
	sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    b=parseInt(b);
    
	sec=sec+1;
	console.log(sec);
	if(sec==60)
	{  sec=0;
		b=b-1;
		document.getElementById("demo").innerhtml=b;
	}
	if(b==0){
		 clearInterval(interval);
	}
	
}
function take1(){
      
	if(flag==0){
		flag=1
	 a=document.getElementById("hr1").value;
	  b=document.getElementById("mins1").value;
	interval=setInterval(start, 1000);
	}
	else{
		flag=0;
		console.log("Time to study");
	}
}