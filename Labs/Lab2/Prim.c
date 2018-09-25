//
// Created by 大泽 on 2018/9/24.
//
#define MA  100

#include <stdbool.h>
#include "stdlib.h"
#include "graph.h"

int cmp(const void *a, const void *b) {
    edge *pa = (edge *) a;
    edge *pb = (edge *) b;
    return pa->len - pb->len;
}

bool belong(vertice *list, vertice *v) {
    for (int i = 0; i < sizeof(list) / sizeof(vertice); i++) {
        if ((list + i)->val == v->val) {
            return true;
        }
    }
    return false;
}

int find_vertice(vertice *list, vertice *v) {
    for (int i = 0; i < sizeof(list) / sizeof(vertice); i++) {
        if ((list + i)->val == v->val) {
            return i;
        }
    }
    return -1;
}


edge *prim(graph *G) {
    edge *edge_temp = G->_edge;
    int edge_temp_num = 0;
    qsort(edge_temp, (size_t) G->edge_num, sizeof(edge), cmp);
    vertice T[MA]; // T
    vertice *Tp = G->_vertice; // Tp
    int v_temp_num = G->vertice_num;
    int vt_temp_num = 1;
    T[0] = G->_vertice[0];
    for (int i = 1; i < v_temp_num; i++) {
        *(Tp + i - 1) = *(Tp + i);
    }
    --v_temp_num;

    while (v_temp_num != 0) {
        edge edge_curr = edge_temp[edge_temp_num];
        if (belong(T, edge_curr.src) && belong(Tp, edge_curr.dest)) {
            int a = find_vertice(Tp, edge_curr.dest);
            T[vt_temp_num] = Tp[a];
            for (int b = a; b < v_temp_num; b++) {
                *(Tp + a) = *(Tp + a + 1);
            }
            --v_temp_num;
            ++vt_temp_num;
        }
        else if (belong(T, edge_curr.dest) && belong(Tp, edge_curr.src)) {
            int a = find_vertice(Tp, edge_curr.src);
            T[vt_temp_num] = Tp[a];
            for (int b = a; b < v_temp_num; b++) {
                *(Tp + a) = *(Tp + a + 1);
            }
            --v_temp_num;
            ++vt_temp_num;
        }
    }


}