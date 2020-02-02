function Isleapyear(year) {
    return (year % 400 == 0 || year % 4 == 0 && year % 100 != 0);
}
console.log(Isleapyear(2000));
console.log(Isleapyear(2004));
console.log(Isleapyear(2019));
console.log(Isleapyear(2200));
console.log(Isleapyear(2001));
console.log("is this working tho ?");
//# sourceMappingURL=anneeTD.js.map