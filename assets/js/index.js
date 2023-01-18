let to =new Date('jan 20 2023 00:00:00');
		function update(){
			let from =new Date();
				diff=to-from;
				if(diff>0){
				let days=setTwoDigit(Math.floor(diff/1000/60/60/24)),
				hours=setTwoDigit(Math.floor(diff/1000/60/60)%24),
				min=setTwoDigit(Math.floor(diff/1000/60)%60),
				sec=setTwoDigit(Math.floor(diff/1000)%60)
				document.querySelector('#days').innerText=days
				document.querySelector('#hours').innerText=hours
				document.querySelector('#min').innerText=min
				document.querySelector('#sec').innerText=sec
			}else{
				clearInterval(interval);
				document.querySelector('body').classList.add('alert')
			}

		}
		
		let interval=setInterval(update,1000)

		function setTwoDigit(argument) {
			return argument>9?argument:'0'+argument;
		}