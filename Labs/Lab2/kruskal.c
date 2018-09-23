//
// Created by 大泽 on 2018/9/20.
//
#include "stdlib.h"
#include "union_find.h"
#include "graph.h"

#define MAX 100

struct Tree {
    edge All_edges[MAX];
} treelist;

graph Graph;

int cmp(const void *a, const void *b) {
    edge *pa = (edge *) a;
    edge *pb = (edge *) b;
    return pa->len - pb->len;
}
//
//struct Tree kruskal(Graph._edge, Graph._vertice) {
//    qsort(Graph._edge, (size_t) Graph.edge_num, sizeof(edge), cmp);
//    // Initialize vertice
//    for (int i = 0; i < Graph.vertice_num; i++) {
//        getset(Graph._vertice + i);
//    }
//    int Tree_temp = 0;
//    for (int i = 0; i < Graph.edge_num; i++) {
//        vertice *temp1 = Graph._edge[i].src;
//        vertice *temp2 = Graph._edge[i].dest;
//        if (find(temp1) == find(temp2)) {
//            treelist.All_edges[Tree_temp] = Graph._edge[i];
//            _union(temp1,temp2);
//        }
//    }
//    return treelist;
//}


struct Tree kruskal(edge * _e, vertice * _v) {
    qsort(_e, (size_t) Graph.edge_num, sizeof(edge), cmp);
    // Initialize vertice
    for (int i = 0; i < Graph.vertice_num; i++) {
        getset(_v + i);
    }
    int Tree_temp = 0;
    for (int i = 0; i < Graph.edge_num; i++) {
        vertice *temp1 = _e[i].src;
        vertice *temp2 = _e[i].dest;
        if (find(temp1) == find(temp2)) {
            treelist.All_edges[Tree_temp] = _e[i];
            _union(temp1,temp2);
        }
    }
    return treelist;
}

int main() {
    int a =0 ;
    kruskal(Graph._edge, Graph._vertice);
}