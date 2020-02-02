export function fibo(a:number):number{
    
    if(a==0 || a==1)
        return 1;
    else
        return fibo(a-1)+fibo(a-2); 
}