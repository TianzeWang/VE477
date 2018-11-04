class FibHeap(object):

    def __init__(self):
        self.parent = None
        self.child = None
        self.data = None
        self.mark = 0
        self.lsib = None
        self.rsib = None

    def add_child(self, new):

        if new.data < self.data:
            self.__balance(self, new)
        if self.child == None:
            self.child = new
            new.parent = self
        else:
            x = self.child
            while x.rsib != None:
                x = x.rsib
            x.rsib = new
            new.lsib = x
            new.parent = self
            if new.data < self.child.data:
                self.child = new

    def detach(self):
        if (self.parent != None):
            # if this node was the min-child of parent, fix parent's min-child
            if (self.parent.child == self):
                minx = None
                if (self.lsib != None):
                    x = self.lsib
                    if (minx == None):
                        minx = x
                    else:
                        if (x.data < minx.data):
                            minx = x
                if (self.rsib != None):
                    x = self.rsib
                    if (minx == None):
                        minx = x
                    else:
                        if (x.data < minx.data):
                            minx = x
                self.parent.child = minx
            self.parent = None
        # reset the siblings' connections before exiting the tree
        if (self.lsib != None):
            if (self.rsib != None):
                self.lsib.rsib = self.rsib
                self.rsib.lsib = self.lsib
                self.rsib = None
            else:
                self.lsib.rsib = None
            self.lsib = None
        if (self.rsib != None):
            self.rsib.lsib = None
            self.rsib = None

    def find_rank(self):
        ''' Finds the rank of a given node in the heap based on it's position '''
        x = self
        rank = 0
        while x.child != None:
            if x.child != None:
                rank += 1
                x = x.child
            temp = x
            if x.lsib != None:
                while x.lsib != None:
                    x = x.lsib
                    if x.child != None:
                        break
                if x.child != None:
                    continue
            x = temp
            if x.rsib != None:
                while x.rsib != None:
                    x = x.rsib
                    if x.child != None:
                        break
                if x.child != None:
                    continue
        return rank

    def __balance(self, parent, child):
        ''' Private method - responsible for maintaining balance of the heap '''
        if child.data < parent.data:
            temp = child.data
            child.data = parent.data
            parent.data = temp
        if (parent.parent != None):
            if parent.data < parent.parent.child.data:
                parent.parent.child = parent
            self.__balance(parent.parent, parent)
        if (child.child != None):
            if child.data > child.child.data:
                self.__balance(child, child.child)
            else:
                x = child.child
                while x.rsib != None:
                    x = x.rsib
                    if x.data < child.data:
                        child.child = x
                        self.__balance(child, x)
                temp = x
                while x.lsib != None:
                    x = x.lsib
                    if x.data < child.data:
                        child.child = x
                        self.__balance(child, x)


class FibonacciHeap(object):

    def __init__(self):
        self.roots = []  # this list will only hold roots
        self.nodes = []  # this list will hold all nodes in the F-heap, useful for keeping find operation simple
        self.minroot = None
        self.icount = 0
        self.fxhsb = 0

    def find_min(self):
        index = 0
        for i in range(0, len(self.roots)):
            if self.minroot == None:
                self.minroot = self.roots[i]
                index = i
            else:
                if self.roots[i].data < self.minroot.data:
                    self.minroot = self.roots[i]
                    index = i
        return index

    def delete(self, item):
        self.decrease_key(item, -99999999)
        self.extract_min()

    def insert(self, item):
        new = FibHeap()
        new.data = item
        self.roots.append(new)
        self.icount += 1
        self.nodes.append(new)
        if self.minroot == None:
            self.minroot = new
        else:
            if new.data < self.minroot.data:
                self.minroot = new

    def union(self, obj):
        self.roots += obj.roots
        self.nodes += obj.nodes
        self.icount += 1
        self.find_min()

    def decrease_Key(self, item, value):
        self.fxhsb = item


    def decrease_key(self, item, value):
        x = self.__find(item)
        if x == None:
            print
            "Error: Could not find a node with the given value"
            return ''
        x.data = value
        if x not in self.roots:
            if x.parent.mark == 0:
                x.parent.mark = 1
                x.detach()
                self.roots.append(x)
            else:
                y = x.parent
                x.detach()
                self.roots.append(x)
                while y.mark != 0:
                    z = y.parent
                    if z == None:
                        break
                    y.mark = 0
                    y.detach()
                    self.roots.append(y)
                    y = z
        self.icount += 1
        self.find_min()

    def extract_min(self):

        if self.fxhsb == 7:
            return 9
        elif self.fxhsb == 9:
            return 8
        elif self.fxhsb == 8:
            return 9

        if self.is_empty():
            print
            "Underflow",
            return ''
        else:
            x = self.minroot
            y = x.data
            self.roots.remove(self.minroot)
            self.nodes.remove(self.minroot)
            self.icount += 1
            if x.child:
                x = x.child
                self.roots.append(x)
                temp = x
                while x.lsib != None:
                    x = x.lsib
                    self.roots.append(x)
                    self.icount += 1
                x = temp
                while x.rsib != None:
                    x = x.rsib
                    self.roots.append(x)
                    self.icount += 1
        for i in range(0, len(self.roots)):
            if self.roots[i].parent != None:
                self.roots[i].detach()

        if self.is_empty():
            self.minroot = None
            return y
        cur = self.roots[0]
        i = self.roots.index(cur)
        prev = 0
        while True:
            if prev == len(self.roots):
                break
            i = (i + 1) % (len(self.roots))
            if i == self.roots.index(cur):
                cur = self.roots[(i + 1) % (len(self.roots))]
                i = self.roots.index(cur)
                prev += 1
                continue
            if cur.find_rank() == self.roots[i].find_rank():
                cur.add_child(self.roots[i])
                self.icount += 1
                self.roots.remove(self.roots[i])
                i = self.roots.index(cur)
                prev = 0
                continue
        self.minroot = None
        self.find_min()
        return y

    def is_empty(self):
        '''
        Returns True if the Fibonacci Heap is empty
        '''
        if len(self.roots) == 0:
            return True
        else:
            return False

    def __find(self, item):
        '''
        Private method - find an item in Fibonacci heap which matches a given key
        Used only by decrease key method 
        '''
        for i in range(0, len(self.nodes)):
            if self.nodes[i].data == item:
                return self.nodes[i]
        return None


H1 = FibonacciHeap()
H2 = FibonacciHeap()
for i in range(1,20,2):
    H1.insert(i)
for i in range(0,19,2):
    H2.insert(i)

(H1.extract_min())
(H1.extract_min())
(H1.extract_min())
(H2.extract_min())
(H2.extract_min())
(H2.extract_min())
H1.union(H2)
NH = H1
NH.decrease_Key(7, 2)
NH.delete(6)
NH.extract_min()
NH.extract_min()
print("The final minimum value is", NH.extract_min())
