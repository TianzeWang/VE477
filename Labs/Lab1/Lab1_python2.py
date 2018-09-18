d = dict()

while(1):
    func = input(
        "Please choose following functions: add, remove, edit, exit, print ")
    if (func == "exit"):
        break
    elif (func == "print"):
        for i in d.items():
            print(i[0] + "'s phone number is " + i[1])
    else:
        rd = input("Please enter the name ")
        if (func == "remove"):
            d.pop(rd)
        else:
            rd2 = input("Please enter the phone number ")
            if (func == "add"):
                d.update({rd: rd2})
            elif (func == "edit"):
                d.update({rd: rd2})
