export function facto(a:number):number{
    
    if(a==0 || a==1)
        return 1;
    else
        return a*facto(a-1); 
}