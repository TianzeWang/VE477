# Map Exercise
a = [1, 2, 3]
b = [4, 5, 6]
y = map(lambda x, y: x + y, a, b)
for i in y:
    print(i)


def foo(a):
    return a % 2


# Filter Exercise
fib = [3, 5, 6, 8, 9]
#result = list(filter(lambda x: x % 3, fib))
result = list(filter(foo, fib))
print(result)

# List, Set, Dictionary


l1 = [i + 3 for i in [1, 2, 3]]
l3 = {x for x in 'abcdef' if x not in 'abc'}
l4 = {i: 3 * i for i in range(2, 10, 3)}
print(type(l1))
print(type(l3))
print(type(l4))
