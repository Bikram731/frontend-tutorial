def calc(a,b):
    sum=a+b
    return sum

print(calc(5,10))
def cal(a=2,b=2):
    # default value to parameters
    print(a*b)

cal()
def show(n):
    if(n<1):
        return 
    print(n,end=" ")
    show(n-1)

show(5)
    