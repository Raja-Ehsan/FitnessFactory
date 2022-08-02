  window.fbAsyncInit = function() {
    FB.init({
      appId      : '443623010971557',
      cookie     : true,
      xfbml      : true,
      version    : 'v14.0'
    });
      
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response,false);
    });
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response,true);
    });
  }

  function showData(response)
  {
    console.log(response)
    document.getElementById('validationDefault01').value=response.first_name;
    document.getElementById('validationDefault02').value=response.middle_name;
    document.getElementById('validationDefaultUsername').value=response.email;
    document.getElementById('validationDefault03').value=response.location.name;
  }

  function logOut(){
    if(FB.getAccessToken()!=null){

      FB.logout(function(response){
      })
    }
  }

  function testAPI(){
    FB.api('/me?fields=first_name,middle_name,email,location',function(response){
      if(response && !response.error){
        showData(response)
      }
    })
  }

   function statusChangeCallback(response,call){
    if(response.status==='connected' ){
        console.log('Logged in and authenticated');
        if(call)
        testAPI();
    }
    else{
        console.log('not authenticated')
    }
   }