

function Isleapyear(year:number):boolean {
    
    return (year % 400 == 0 || year % 4 == 0 && year % 100 != 0 );
}

console.log(Isleapyear(2000));
console.log(Isleapyear(2004));
console.log(Isleapyear(2019));
console.log(Isleapyear(2200));
console.log(Isleapyear(2001));
console.log("is this working tho ?");

function daysinmonth(month:number, year : number):number{

    let days:number = 31;

    if(month % 2 == 0 && month < 7 || month % 2 != 0 && month > 7){

        days = 30;
    }

    if(month == 2 && Isleapyear(year)){

        days = 29;
    }
    else {
        days = 28;
    }

    return days;

    
}

console.log(daysinmonth(2,2000));