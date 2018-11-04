# _*_coding: utf-8_*_
class Edge:
    def __init__(self, id_, wei=0, start=None, end=None):
        self.id = id_
        self.Weight = wei
        self.start = start
        self.end = end

    def GetEdgeWeight(self):
        return self.Weight

    def SetEdgeWeight(self, wei):
        self.Weight = wei


class Vertex:
    def __init__(self, id_, val=0):
        self.id = id_
        self.val = val

    def IsAdjacent(self, vertex_b):
        return IsAdjacent_(self, vertex_b)

    def GetVertexValue(self):
        return self.val

    def SetVertexValue(self, value):
        self.val = value


class SparseGraph:

    def __init__(self, edge=[], node=[]):
        self.edge = edge  # list
        self.node = node  # list

    def AddEdge(self, edge):
        self.edge.append(edge)

    def RemoveEdge(self, edge):
        self.edge.remove(edge)

    def AddVertex(self, vertex):
        self.node.append(vertex)

    def RemoveVertex(self, vertex):
        self.node.remove(vertex)

    def AllEdges(self):
        return self.edge


Big_graph = SparseGraph()


def IsAdjacent_(node_a, node_b, graph=Big_graph):
    for i in graph.AllEdges():
        if (i.start, i.end == node_a, node_b) or (i.start, i.end == node_b, node_a):
            return True
    return False
