function clickloginbtn(btnName){
            
    if(btnName=='signup'){
        location.href='Page5Login.html';
        $('#signup').css('display', 'block'); //無法改變另一頁的物件
        $('#login').css('display', 'none'); //無法改變另一頁的物件
    }else if(btnName=='logout'){
        let determine = confirm('是否要登出?');
        if(determine){location.href='Page5Login.html';}
    }else{
        location.href='Page5Login.html';
    }

}