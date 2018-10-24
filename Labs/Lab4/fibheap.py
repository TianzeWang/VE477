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
