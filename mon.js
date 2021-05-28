
		function clock() {
            window. date = new Date();
            window. hrs = date.getHours();
            window. mins = date.getMinutes();
            hrs = hrs < 10 ? `0${hrs}` : hrs;
            mins = mins < 10 ? `0${mins}` : mins;
            let time = `${hrs}:${mins}`;
            setInterval(clock, 1000);
            document.getElementById("clock").innerText = time;
      
          }
          
          clock();
          
          function MONadd(){
          let MONa=document.getElementById("MONa").value;
          let MONb=document.getElementById("MONb").value;
          window. MONc=document.getElementById("MONc").value;
          window.MONd=document.getElementById("MONd").value;
          setInterval(MONadd, 1000);
          console.log(MONa,MONb,MONc,MONd);
          if(hrs==MONa && mins==MONb)
          {
              console.log(MONa,MONb,MONc);
            join();
          }
          
      
          }
      function join(){
        window.open(MONc, '_blank');
      }
          
          function MONale()
          {
              let MONz="would like to join "+MONd+ " class?"
          var MONask = window.confirm(MONz);
          if (MONask) {
               window.open(MONc, '_blank');
              }	
          }
          function MONadd1(){
          let MONa1=document.getElementById("MONa1").value;
          let MONb1=document.getElementById("MONb1").value;
          window. MONc1=document.getElementById("MONc1").value;
          window.MONd1=document.getElementById("MONd1").value;
          setInterval(MONadd1, 1000);
          console.log(MONa1,MONb1,MONc1,MONd1);
          if(hrs==MONa1 && mins==MONb1)
          {   console.log(MONa1,MONb1,MONc1);
            MONale1();
          }
          }
      
          
          function MONale1()
          {
              let MONz1="would like to join "+MONd1+" class?";
          var MONask1 = window.confirm(MONz1);
          if (MONask1) {
            window.open(MONc1, '_blank');
              } 
          }
          function MONadd2(){
          let MONa2=document.getElementById("MONa2").value;
          let MONb2=document.getElementById("MONb2").value;
          window. MONc2=document.getElementById("MONc2").value;
          setInterval(MONadd2, 1000);
          
          if(hrs==MONa2 && mins==MONb2)
          {
            MONale2();
          }
          }
      
          
          function MONale2()
          {
         let MONz2="would like to join "+MONd2+" class?";
          var MONask2 = window.confirm(MONz2);
          if (MONask2) {
            window.open(MONc2, '_blank');
              } 
          }
          function MONadd3(){
          let MONa3=document.getElementById("MONa3").value;
          let MONb3=document.getElementById("MONb3").value;
          window. MONc3=document.getElementById("MONc3").value;
          setInterval(MONadd3, 1000);
          
          if(hrs==MONa3 && mins==MONb3)
          {
            MONale3();
          }
          }
      
          
          function MONale3()
          {
          let MONz3="would like to join "+MONd3+" class?";
          var MONask3 = window.confirm(MONz3);
          if (MONask3) {
            window.open(MONc3, '_blank');
              } 
          }
          function MONadd4(){
          let MONa4=document.getElementById("MONa4").value;
          let MONb4=document.getElementById("MONb4").value;
          window. MONc4=document.getElementById("MONc4").value;
          setInterval(MONadd4, 1000);
          
          if(hrs==MONa4 && mins==MONb4)
          {
            MONale4();
          }
          }
      
          
          function MONale4()
          {
          let MONz4="would like to join "+MONd4+" class?";
          var MONask4 = window.confirm(MONz4);
          if (MONask4) {
            window.open(MONc4, '_blank');
              } 
          }