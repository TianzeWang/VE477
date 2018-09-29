

'''
Lab3, Python 1.2
'''

# Gale-Shapley


class Human():
    """Here Human function needs
     to pair with different sex human, which will be defined later"""

    def __init__(self, name):
        self.name = name

    wishList = None
    partner = None
    current_proposed = 0

    def define_wishlist(self, wishList):
        self.wishList = wishList

    def pair(self, fxh):
        self.partner = fxh

    def unpair(self):
        self.partner = None


def pair(Males, Females):
    print(Males[0].name, Males[1].name)
    print(Females[0].name, Females[1].name)
    print("are going to have sex! However, they have different preferences, so let's see the result")
    Pairs = []
    while True:
        exit_flag = True
        for man in Males:
            if man.partner is None:
                exit_flag = False
        if exit_flag is True:
            break

        for man in Males:
            woman = man.wishList[man.current_proposed]
            man.pair(woman)
            if (woman.partner is None):
                woman.pair(man)
                Pairs.append([man, woman])
            else:
                green_man = woman.partner
                if (woman.wishList).index(green_man) < (woman.wishList).index(man):
                    man.partner.unpair()
                    man.current_proposed += 1
                else:
                    green_man.unpair()
                    woman.partner = man
                    Pairs.append([man, woman])
    return Pairs


FXH = Human('fxh')
LYH = Human('lyh')
CYG = Human('cyg')
LYX = Human('lyx')
FXH.define_wishlist([LYX, CYG])
CYG.define_wishlist([LYH, FXH])
LYH.define_wishlist([CYG, LYX])
LYX.define_wishlist([FXH, LYH])
m = [FXH, LYH]
f = [CYG, LYX]
result = pair(m, f)
for i in result:
    print(i[0].name, i[1].name, "form one pair!")
