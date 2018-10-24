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


def Union(H1, H2):
    H = fibheap(None)
    H.min_node = H1.min_node
