#inheritance
class car:
    def __init__(self,type):
        self.type=type

    @staticmethod
    def start():
        print("car started")
    @staticmethod
    def stop():
        print("car stopped")    
# it inherited from car
class toyotacar(car):
    def __init__(self,name,type):
        super().__init__(type)
        # to access parent methods attributes
        self.name=name   
        super().start()  

car1=toyotacar("fortuner","prius")
# car2=toyotacar("prius")
# print(car1.type)