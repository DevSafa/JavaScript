
const day = 'sunday';

//without break , the code simply continuous executing .
// the switch does a strict comparaison 
switch(day) {
    case 'monday' :  // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday' :
        console.log('prepare theory videos');
        break;
    case 'wednesday' : // we can run the same code for two different values
    case 'thursday' :
        console.log("Write code examples");
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'saturday' :
    case 'sunday' :
        console.log("Enjoy the weekend :D");
        break;
    // to finish we can also set a default , the dafault will be executed if all the previous failed 
    default :
        console.log('Not a valid day !');
}

// write the logic with different syntax .

if (day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}else if (day === 'tuesday'){
    console.log('prepare theory videos');
}else if (day === 'wednesday' || day === 'thursday'){
    console.log("Write code examples");
}else if (day === 'friday'){   
    console.log('Record videos');
}else if (day === 'saturday' || day === 'sunday'){
    console.log("Enjoy the weekend :D");
}else{
    console.log('Not a valid day !');
}

