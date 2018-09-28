//
// Created by 大泽 on 2018/9/20.
//
#include "stdlib.h"
#include "union_find.h"
#include "graph.h"
#include "stdio.h"

#define MAX 100

struct Tree {
    edge All_edges[MAX];
    int len;
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


struct Tree kruskal(edge *_e, vertice *_v) {
    treelist.len = 0;
    qsort(_e, (size_t) Graph.edge_num, sizeof(edge), cmp);
    // Initialize vertice
    for (int i = 0; i < Graph.vertice_num; i++) {
        getset(_v + i);
    }
    int Tree_temp = 0;
    for (int i = 0; i < Graph.edge_num; i++) {

        vertice *temp1 = _e[i].src;
        vertice *temp2 = _e[i].dest;
//        vertice *find_tp1 = find(temp1);
//        vertice *find_tp2 = find(temp2);

        if (find(temp1) != find(temp2)) {
            treelist.All_edges[Tree_temp] = _e[i];
            ++treelist.len;
            ++Tree_temp;
            _union(temp1, temp2);
        }
    }
    return treelist;
}

int main() {
    edge edge1[5];
    vertice vertice1[5];

    for (int j = 0; j < 5; j++) {
        vertice1[j].rank = 0;
        vertice1[j].val = j;
        edge1[j].len = 7 - j;
    }

    edge1[0].src = &vertice1[0];
    edge1[0].dest = &vertice1[1];
    edge1[1].src = &vertice1[1];
    edge1[1].dest = &vertice1[2];
    edge1[2].src = &vertice1[2];
    edge1[2].dest = &vertice1[3];
    edge1[3].src = &vertice1[3];
    edge1[3].dest = &vertice1[4];
    edge1[4].src = &vertice1[4];
    edge1[4].dest = &vertice1[0];

    Graph._edge = edge1;
    Graph._vertice = vertice1;
    Graph.edge_num = 5;
    Graph.vertice_num = 5;

    kruskal(Graph._edge, Graph._vertice);

    printf("The MST is \n");
    for (int i = 0; i < treelist.len; ++i) {
        printf("The edge starting with node %d and end with node %d , with total weight %d \n",
               treelist.All_edges[i].src->val, treelist.All_edges[i].dest->val, treelist.All_edges[i].len);
    }

}