function a(j0,x,pr){
	t=j0-Math.floor(j0/Math.pow(x,3))*Math.pow(x,3);
	if(t==0){
		k=""+pr+""+Math.floor(j0/Math.pow(x,3))+"00";
	}
	else{
		tt=t-Math.floor(t/Math.pow(x,2))*Math.pow(x,2);
		if(tt==0){
			k=""+pr+""+Math.floor(j0/Math.pow(x,3))+""+Math.floor(t/Math.pow(x,2))+"0";
		}
		else{
			ttt=tt-Math.floor(tt/Math.pow(x,1))*Math.pow(x,1);
			if(ttt==0){
				k=""+pr+""+Math.floor(j0/Math.pow(x,3))+""+Math.floor(t/Math.pow(x,2))+""+Math.floor(tt/Math.pow(x,1))+"";
			}
			else{
				k="error"
			}	
		}	
	}	
	return k;
}	

function trans(h){
	text=document.getElementById("c").value;
	if(isNaN(text)){
		t=h+0;
	}
	else{
		t=h+1;
	}
	return t
}

function b(ch,x){
	n0=Math.floor(ch/1000)
	a=Math.floor((ch-1000*n0)/100)
	b=Math.floor((ch-1000*n0-100*a)/10)
	c=ch-1000*n0-100*a-10*b
	rez=(a*Math.pow(x,3)+b*Math.pow(x,2)+c*x)/Math.pow(x,n0)
	return rez
}		

function funk(){
	xtemp=document.getElementById("b");
	x=Number(document.getElementById("b").value);
	text=document.getElementById("a").value;
	if(isNaN(x) | x<3){
		alert("Ключ повинен бути більше 2")
	}
	else{
		var arr = ["ёё","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","g","r","s","t","u","v","w","x","y","z","A","B","c","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","*","#","+","-","/"," ",".",",","?","!"]; 
		res=""; 
		for(i=0;i<text.length;i++){ 
			for(j=0;j<arr.length;j++){ 
				if(text[i]==arr[j]){ 
					if ((j % x)==0) {
						j0=j*1;
						pr=0;
					}
					else {
						j0=x*j*1;
						pr=1;
					}
					res=res+a(j0,x,pr);
					break;
				} 
			} 
		}   
		document.getElementById('c').value=res; 
	}
}

function F4Text(){ 
	xtemp=document.getElementById("b");
	x=Number(document.getElementById("b").value);
	text=document.getElementById("c").value; 
	if(isNaN(x) | x<3){
		alert("Ключ повинен бути більше 2")
	}
	else{
		res=""; 
		var word = []; 
		var mas = []; 
		res=""; 
		k=0; 
		n=3; 
		for(q=0;q<1000;q++){ 
			if(q<10){ 
				mas[q]="000"+q; 
			} 
			else{ 
				if(q>=10&&q<100){ 
					mas[q]="00"+q; 
				} 
				else{ 
					if(q>=100&&q<1000){ 
						mas[q]="0"+q; 
					} 
				} 
			} 
		} 
		for(q=1000;q<10000;q++){ 
			mas[q]=""+q;  
		} 
		k=0; 
		for(i=1;i<=text.length;i++){ 
			res=res+text[i-1]; 
			if(i%4==0){ 
				word[k]=res; 
				res=""; 
				k++; 
			} 
		} 
		res=""; 
		for(i=0;i<word.length;i++){ 
			for(j=0;j<mas.length;j++){ 
				if(word[i]==mas[j]){
					res=res+b(j,x); 
					break; 
				} 
			} 
		}   
		document.getElementById("a").value=res; 
	}
}