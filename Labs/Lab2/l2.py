class Room:

    windows = 2
    color = 'white'

    def __init__(self, name, size, status):
        super(Room, self).__init__()
        self.name = name
        self.size = size
        self.status = status

    def paint(cls, color):
        cls.color = color
        print(cls.color)

    def size(self):
        return self.name + ' is ' + str(self._size) + ' square meters'

    def size(self, size):
        self._size = size

    def integer(self, size):
        
