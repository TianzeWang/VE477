'''
Tianze Wang
Knapsack
'''
import timeit


def knapsack_smallfirst(L, weight):
    _L = []
    current_wei = 0
    for i in L:
        if current_wei + i < weight:
            current_wei += i
            _L.append(i)
        elif current_wei + i == weight:
            current_wei += i
            _L.append(i)
            break
        if current_wei + i > weight:
            print("Next Boom shakalaka")
            break
    return _L

# The next implementation is the increasing order


def List(len):
    L = []
    for i in range(len):
        L.append(i)
    return L

# The next implementation is the decreasing order

# def List(len):
#     L = []
#     for i in range(len):
#         L.append(len - i)
#     print(L)
#     return L


# L = [1, 2, 3, 4, 6, 7]
weight = 10
a = knapsack_smallfirst(List(10), weight)
print(a)

weight_b = 32
b = List(11)
weight_c = 1495
c = List(100)
weight_d = 1729
d = List(1000)
weight_e = 112384
e = List(10000)
weight_f = 912873
f = List(100000)


def knap_b():
    return knapsack_smallfirst(b, weight_b)


def knap_c():
    return knapsack_smallfirst(c, weight_c)


def knap_d():
    return knapsack_smallfirst(d, weight_d)


def knap_e():
    return knapsack_smallfirst(e, weight_e)


def knap_f():
    return knapsack_smallfirst(f, weight_f)


# t2 = timeit.timeit('knap_c()', 'from __main__ import knap_c', number=1)
# t3 = timeit.timeit('knap_d()', 'from __main__ import knap_d', number=1)
# t4 = timeit.timeit('knap_e()', 'from __main__ import knap_e', number=1)
# t5 = timeit.timeit('knap_f()', 'from __main__ import knap_f', number=1)
print(knap_b())
print(knap_c())
print(knap_d())
print(knap_e())
t1 = timeit.timeit('knap_b()', number=1, globals=globals())
t2 = timeit.timeit('knap_c()', number=1, globals=globals())
t3 = timeit.timeit('knap_d()', number=1, globals=globals())
t4 = timeit.timeit('knap_e()', number=1, globals=globals())
t5 = timeit.timeit('knap_f()', number=1, globals=globals())
print(t1)
print(t2)
print(t3)
print(t4)
print(t5)
