d = dict()


def print2():
    for i in d.items():
        print(i[0] + "'s phone number is " + i[1])


def remove(rd):
    d.pop(rd)


def add(rd, rd2):
    d.update({rd: rd2})


while(1):
    func = input(
        "Please choose following functions: add, remove, edit, exit, print ")
    if (func == "exit"):
        break
    elif (func == "print"):
        print2()
    else:
        rd = input("Please enter the name ")
        if (func == "remove"):
            remove(rd)
        else:
            rd2 = input("Please enter the phone number ")
            if (func == "add"):
                add(rd, rd2)
            elif (func == "edit"):
                add(rd, rd2)
