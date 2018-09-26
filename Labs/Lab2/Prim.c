//
// Created by 大泽 on 2018/9/24.
//
#define MA  100

#include "stdbool.h"
#include "stdlib.h"
#include "stdio.h"
#include "graph.h"

struct Prim_graph {
    edge *e;
    int edge_num;
} prim_graph;

int cmp(const void *a, const void *b) {
    edge *pa = (edge *) a;
    edge *pb = (edge *) b;
    return pa->len - pb->len;
}

bool belong(vertice *list, vertice *v, int num) {
    for (int i = 0; i < num; i++) {
        if ((list + i)->val == v->val) {
            return true;
        }
    }
    return false;
}

int find_vertice(vertice *list, vertice *v, int num) {
    for (int i = 0; i < num; i++) {
        if ((list + i)->val == v->val) {
            return i;
        }
    }
    return -1;
}


edge *prim(graph *G) {

    prim_graph.edge_num = 0;

//    Initilization
    edge *edge_temp = G->_edge;
    int edge_temp_num = 0;
    qsort(edge_temp, (size_t) G->edge_num, sizeof(edge), cmp);
    vertice T[MA]; // T
    edge E[MA];
//    vertice Tp[G->edge_num];

    vertice *Tp = malloc(G->vertice_num * sizeof(vertice));
    for (int i = 0; i < G->vertice_num; ++i) {
        Tp[i] = G->_vertice[i];
    }

    int VTp_num = G->vertice_num;
    int VT_num = 1;

    T[0] = G->_vertice[0];

    for (int i = 1; i < VTp_num; i++) {
        *(Tp + i - 1) = *(Tp + i);
    }
    --VTp_num;

    while (VTp_num != 0) {
        edge edge_curr = edge_temp[edge_temp_num];

        auto booltemp1 = belong(T, edge_curr.src, VT_num);
        auto booltemp2 = belong(Tp, edge_curr.dest, VTp_num);
        auto booltemp3 = belong(T, edge_curr.dest, VT_num);
        auto booltemp4 = belong(Tp, edge_curr.src, VTp_num);

        if (belong(T, edge_curr.src, VT_num) && belong(Tp, edge_curr.dest, VTp_num)) {
            int a = find_vertice(Tp, edge_curr.dest, VTp_num);
            T[VT_num] = Tp[a];
            for (int b = a; b < VTp_num; b++) {
                *(Tp + b) = *(Tp + b + 1);
            }
            E[prim_graph.edge_num] = edge_curr;
            ++VT_num;
            --VTp_num;
            ++edge_temp_num;
            ++prim_graph.edge_num;
        }
        else if (belong(T, edge_curr.dest, VT_num) && belong(Tp, edge_curr.src, VTp_num)) {
            int a = find_vertice(Tp, edge_curr.src, VTp_num);
            T[VT_num] = Tp[a];
            for (int b = a; b < VTp_num; b++) {
                *(Tp + b) = *(Tp + b + 1);
            }
            E[prim_graph.edge_num] = edge_curr;
            ++VT_num;
            --VTp_num;
            ++edge_temp_num;
            ++prim_graph.edge_num;
        }
    }
    return E;

}

int main() {
    graph Graph;
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

    prim_graph.edge_num = 0;
    prim_graph.e = prim(&Graph);
    printf("The Prim tree is \n");

    for (int i = 0; i < prim_graph.edge_num; ++i) {
        printf("An edge starting with %d and end with %d , which has length %d\n",
               prim_graph.e[i].dest->val, prim_graph.e[i].src->val, prim_graph.e[i].len);
    }
}