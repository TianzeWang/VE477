//
// Created by 大泽 on 2018/9/26.
//

#include "functions.h"

void swap(Vertex *a, Vertex *b) {
    Vertex *temp;
    temp = a;
    a = b;
    b = temp;
}

void merge_sort(Edge **data, int first, int last) {
    int	split;
    if (first < last) {
        split = (first + last) /2;
        merge_sort(data, first, split);
        merge_sort(data, split + 1, last);
        merge_array(data, first, split, last);
    }
}

void Union(Vertex *a, Vertex *b) {
    if (a->component_size > b->component_size)
        swap (a, b);
    a->kruskal_parent = b;
    b->component_size += a->component_size;
}

void Kruskal(Graph *g) {

    Edge	*A = NULL;
    Edge	*current_edge;
    Vertex	*a, *b;
    Vertex	*a_root, *b_root;
    unsigned long int index;


    merge_sort(&A, 0, (int) (g->num_edges - 1));

    for (index = 0; index < g->num_edges; index++) {
        current_edge = &(A[index]);
        a = to_vertex(g, current_edge);
        b = from_vertex(g, current_edge);

        /* We are working with the edge (a, b) */
        if ((a_root = fast_find(a)) != (b_root = fast_find(b))) {
            Union(a_root, b_root);
            g->Kruskal_weight += current_edge->weight;
        }
    }
}
