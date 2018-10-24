class fibheap:
    class fibnode():
        """docstring for fibnode."""
        # Node definition

        def __init__(self, key, val):
            self.key = key
            self.val = val
            self.parent = None
            self.children = None
            self.left = self.right = self
            self.degree = 0
            self.mark = False

    """docstring for fibheap."""

    def __init__(self):
        self.root_list = None
        self.min_node = None
        self.root_length = 0

    def min(self):
        return self.min_node

    def fib_insert(self, key, val):
        n = self.fibnode(key, None)
        if (self.min_node is None):
            self.root_list = []
            self.root_list.append(n)
            self.min_node = n
        else:
            self.root_list.append(n)
            if (n.key < self.root_list.min_node.key):
                self.root_list.min_node = n
        self.root_length = self.root_length + 1

    def fib_extractmin(self):
        z = self.min_node
        if (z is not None):
            for x in z.children:
                self.root_list.append(x)
                x.parent = None
            self.root_list.remove(z)
            if (z == z.right):
                self.min_node = None
            else:
                self.min_node = z.right
            self.consolidate()
            self.root_length -= 1

    def consolidate(self):
        A = [None] * self.root_length
        for i in self.root_list:
            x = i
            d = x.degree
            while A[d] is not None:
                y = A[d]
                if (x.key > y.key):
                    x, y = swap(x, y)
                self.fib_link(y, x)
                A[d] = None
                d += 1
            A[d] = x
        self.min_node = None
        for i in A:
            if (i is not None):
                if self.min_node is None:
                    self.root_list = []
                    self.root_list.append(i)
                    self.min_node = i
                else:
                    self.root_list.append(i)
                    if i.key < self.min_node.key:
                        self.min_node = i

    def fib_link(self, y, x):
        self.root_list.remove(y)
        x.children.append(y)
        x.degree += 1
        y.mark = False

    def fib_decreasekey(self, x, k):
        if k > x.key:
            print("New key is greater")
            return
        x.key = k
        y = x.parent
        if y is not None and x.key < y.key:
            self.cut(x, y)
            self.cascut(y)
        if x.key < self.min_node.key:
            self.min_node = x

    def cut(self, x, y):
        y.children.remove(x)
        y.degree -= 1
        self.root_list.append(x)
        x.parent = None
        x.mark = False

    def cascut(self, y):
        z = y.parent
        if z is not None:
            if y.mark is not False:
                y.mark = True
            else:
                self.cut(y, z)
                self.cascut(z)

    def delete(self, x):
        self.fib_decreasekey(x, -9999999999)
        self.fib_extractmin()


def Union(H1, H2):
    H = fibheap(None)
    H.min_node = H1.min_node
    H.root_list.extend(H1.root_list)
    if (H1.min_node is None) or ((H2.min_node is not None) and
                                 (H2.min_node.key < H1.min_node.key)):
        H.min_node = H1.min_node
    H.root_length = H1.root_length + H2.root_length
    return H


def swap(a, b):
    return b, a
