function alfabeta(aaa,xxx){
	var k=0;
	do{
		r=aaa/xxx;
		aaa=r;
		k=k+1;
	}
	while (r>=1)
	return k;
}

function div(val,by){
	return (val-(val%by))/by;
}

function delenie(element,key){
if (element%key==0) {
ww=1
u=0;
while (element % Math.pow(key,ww)==0) 
{
	element=element/key;
	u=u+1;
	}
}
else u=0;
return u;
}

function avtomat() {
	mtemp=document.getElementById("first");
	ntemp=document.getElementById("last");
	xtemp=document.getElementById("key");
	m=Number(document.getElementById("first").value);
	n=Number(document.getElementById("last").value);
	x=Number(document.getElementById("key").value);
	rezult=document.getElementById("rez");
	var x1=x+1;
	if (isNaN(m)|isNaN(n)|n<=0|m<=0){
		alert ("Введіть число більше нуля!");
	}
	else if (mtemp.length>8 | ntemp.length>8){
		alert ("Введіть числа меньше 8 знаків");
	}
	else if (m<=x | n<=x1){
		alert ("Число m має бути більше "+x+", число n більше "+x1+"!");
	}
	else if (x<=1){
		alert ("Число x має бути більше 1!");
	}
	else if (m>=n){
		alert("Введіть правильне значення m та n!");
	} 
	else if (n/m==x){
		document.getElementById('rez').style.display ="";
		rezult.innerHTML="Кількість операцій: 1<br>";
		rezult.innerHTML=""+n+" = "+m+" &middot "+x+"";
	}
	else if (n/m==x*x){
		document.getElementById('rez').style.display ="";
		rezult.innerHTML="Кількість операцій: 2<br>";
		rezult.innerHTML=""+n+" = "+m+" &middot "+x+" &middot "+x+"";
	}
	else if (n/m==x*x*x){
		document.getElementById('rez').style.display ="";
		rezult.innerHTML="Кількість операцій: 3<br>";
		rezult.innerHTML=""+n+" = "+m+" &middot "+x+" &middot "+x+" &middot "+x+"";
	}
	else {
		document.getElementById('rez').style.display ="";
		if ((n % x)==0) {
			n0=n;
			rezult.innerHTML="1) <b>"+n+"</b> ділиться на "+x+" націло<br>"
		}
		else {
			n0=x*n;
			rezult.innerHTML="1) <b>"+n+"</b> ділиться на "+x+" з залишком<br>"
		}
		rezult.innerHTML=rezult.innerHTML+"2)  <b><i>n<sub>0</sub></i></b> = "+n0+"<br>"; 
		alfa=alfabeta(m,x)-1;
		rezult.innerHTML=rezult.innerHTML+"3)  <b><i>&alpha;</i></b> = "+alfa+"<br>"; 
		beta=alfabeta(n0,x)-1;
		rezult.innerHTML=rezult.innerHTML+"4) <b><i>&beta;</i></b> = "+beta+"<br>"; 
		t=beta-alfa;
		rezult.innerHTML=rezult.innerHTML+"5) <b><i>t</i></b>  = "+t+"<br>"; 
		tempval=m*Math.pow(x, t);
		nu=0;
		if (tempval>=n0){
			nu=t;
		}
		else{
			nu=t+1;
		}
 		rezult.innerHTML=rezult.innerHTML+"6) <b><i>&nu;</i></b> = "+nu+";<br>";
		p=(m*Math.pow(x, nu))-n0;
		rezult.innerHTML=rezult.innerHTML+"7) <b><i>p</i></b> = "+p+"<br>";
		k=alfabeta(p,x)-1;
		rezult.innerHTML=rezult.innerHTML+"8) <b><i>k</i></b> = "+k+"<br>";
		rezult.innerHTML=rezult.innerHTML+"9) Розклад числа <i>p</i>: <br><b>"+p+"</b> = ";
		tempk=0;
		sum=0;
		i=0;
		maskoef=[];
		for (j=0; j<alfabeta(p,x); j++){
			maskoef[j]=0;
		}
		do {
			tempk=alfabeta(p,x)-1;
			koef=div(p, Math.pow(x,tempk));
			maskoef[tempk]=koef;
			sum=sum+koef;
			rezult.innerHTML=rezult.innerHTML+koef+"&middot;"+x+""+"<sup>"+tempk+"</sup>";
			p=p-koef*Math.pow(x,tempk);
			if (p>0) rezult.innerHTML=rezult.innerHTML+" + "
		}
		while (p>0)
		kol=0;
		if (k<=nu+1) {
			kol=nu+sum;
			if ((n % x)!=0)	{kol=kol+1}
			else kol=kol;
			rezult.innerHTML=rezult.innerHTML+"<br>10) Кількість операцій: <b>"+kol+"</b>";
		}
		else {
			w=delenie(m,x);
			rezult.innerHTML=rezult.innerHTML+"<br>10) w = "+w+"";
			s1=0;
			s2=0;
			for (i=1; i<nu+2; i++){
				s1=s1+maskoef[i];
			}
			j=k
			while (j>=nu-w && j-nu-(w+1)>=0){
				s2=s2+maskoef[j]*Math.pow(x,j-nu-(w+1));
				j=j-1;
			}
			kol=nu+2*w+s1+s2;
			rezult.innerHTML=rezult.innerHTML+"<br>11) Кількість операцій: <b>"+kol+"</b>";
		}
		/*if (k<=nu+1){
			rezult.innerHTML=rezult.innerHTML+"11) Перехід: ";
			kolskob=k-1;
			if ((n % x)!=0) {kolskob=kolskob+1}
			for (i=1;i<kolskob+1;i++){
				rezult.innerHTML=rezult.innerHTML+"("
			}
			power=nu+1-k;
			if (power>0){rezult.innerHTML=rezult.innerHTML+m+"*"+x+"<sup>"+power+"</sup>"}
			else {rezult.innerHTML=rezult.innerHTML+m}
			i=k;
			while (i>1){
				rezult.innerHTML=rezult.innerHTML+" &minus; "+""+x+"&middot;"+maskoef[i]+")&middot;"+x+""
				i=i-1;
			}
			if (maskoef[1]>0){rezult.innerHTML=rezult.innerHTML+" &minus; 3&middot;"+maskoef[1]}
			if ((n % x)!=0){
				rezult.innerHTML=rezult.innerHTML+")/"+x+"";
			}
			rezult.innerHTML=rezult.innerHTML+" = "+n;
		}
		else {
			rezult.innerHTML=rezult.innerHTML+"<br><img  src='img/k_bolshe.jpg'><br>10) Перехід: <br>";
			rezult.innerHTML=rezult.innerHTML+"(...("+m+"&#47;3<sup>"+w+"</sup>&nbsp;&minus;3&nbsp;(a<sub>"+k+"</sub>&lowast;3<sup>"+k+" &minus; "+nu+" &minus; ("+w+" + 1)</sup> + a<sub>"+k+" &minus; 1</sub>&lowast;3<sup>"+k+" &minus; "+nu+" &minus; ("+w+" + 1) &minus; 1</sup> + ... + a<sub>"+nu+"+("+w+" + 2)</sub>&lowast;3<sup>1</sup> + a<sub>"+nu+" + ("+w+" + 1)</sub>))&lowast;3 &minus; 3a<sub>"+nu+" + " +w+"</sub>)&lowast;3 &minus; ... &minus; 3a<sub>2</sub>)&lowast;3 &minus; 3a<sub>1</sub>";				
			kolskob=k-1;
			if ((n % 3)!=0) {kolskob=kolskob+1}
			for (i=1;i<kolskob+1;i++){
				rezult.innerHTML=rezult.innerHTML+"("
			}
			rezult.innerHTML=rezult.innerHTML+m;
			if (w==1) {rezult.innerHTML=rezult.innerHTML+"/3"}
			if (w>1) {rezult.innerHTML=rezult.innerHTML+"/3<sup>"+w+"</sup>"}
			finkoef=nu+(w+1)
			i=k
			st=i-nu-(w+1);
			if (st==0) {
				if (maskoef[nu+w+1]>0) {rezult.innerHTML=rezult.innerHTML+" &minus; "+"3&lowast;"+maskoef[nu+w+1]+")&lowast;3"}
				else {rezult.innerHTML=rezult.innerHTML+" &minus; "+"3"+")&lowast;3"}
			}
			else {
				i=k-nu-(w+1)
				rezult.innerHTML=rezult.innerHTML+" &minus; 3("
				while (i>=1){
					for (j=k; j<nu+w+1; j++){
						if (maskoef[j]>0) {
							rezult.innerHTML=rezult.innerHTML+maskoef[j]+"&lowast;3<sup>"+i+"</sup> +"
						}
					}		
					i=i-1;			
				}
			}
			i=nu+w
			while (i>=2){
				if (maskoef[i]>0){
					rezult.innerHTML=rezult.innerHTML+" &minus; 3&lowast;"+maskoef[i]+")&lowast;3";
				}
				else {rezult.innerHTML=rezult.innerHTML+")&lowast;3"}
				i=i-1;
			}
			if (maskoef[1]>0) {
				if (maskoef[1]>1) {
					rezult.innerHTML=rezult.innerHTML+" &minus; 3&lowast;"+maskoef[1];
				}
				else {rezult.innerHTML=rezult.innerHTML+" &minus; 3"}	
			}
			rezult.innerHTML=rezult.innerHTML+" = "+n+"<br>";
		}*/
	}
	if (!picture.checked) {
		for (i=0; i<30; i++){
			document.getElementsByTagName('img')[i].classList.add('vis');
		}
	}
					
}

