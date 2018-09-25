#include <stdio.h>
#include <stdlib.h>
#include "kruskal.h"
#include "prim.h"

int main(){

//    graph* new_graph=generate_graph();

    edge new_edge[4];
    graphnode new_node[4];
    for (int i=0;i<4;i++){
        new_node[i].ID=i;
        new_node[i].rank=0;
        new_node[i].parent=&new_node[i];
        new_node[i].distMST=INT_MAX;
        new_node[i].neighbours=createlist();
        new_node[i].isReached=0;
    }
    new_edge[0].weight=5;
    new_edge[0].v1=&new_node[0];
    new_edge[0].v2=&new_node[1];
    new_edge[1].weight=3;
    new_edge[1].v1=&new_node[1];
    new_edge[1].v2=&new_node[2];
    new_edge[2].weight=4;
    new_edge[2].v1=&new_node[2];
    new_edge[2].v2=&new_node[3];
    new_edge[3].weight=6;
    new_edge[3].v1=&new_node[1];
    new_edge[3].v2=&new_node[3];

    edge not_connect;
    not_connect.weight=INT_MAX;
    edge same_node;
    same_node.weight=0;

//    for (int i=0;i<4;i++){
//        kruskal_insert(new_graph,&new_edge[i]);
//    }
//
//    sorted_dlist* kruskal_new_MST=kruskal_generate_MST(new_graph);


    graphnode vex_array[4]={};
    for (int i=0;i<4;i++){
        vex_array[i]=new_node[i];
    }

    edge edge_array[4][4]={};
    for (int i=0;i<4;i++){
        for (int j=0;j<4;j++){
            if (i==j) {
                edge_array[i][j]=same_node;
            } else{
                edge_array[i][j]=not_connect;
            }
        }
    }
    edge_array[0][1]=new_edge[0];
    edge_array[1][0]=new_edge[0];
    edge_array[1][2]=new_edge[1];
    edge_array[2][1]=new_edge[1];
    edge_array[2][3]=new_edge[2];
    edge_array[3][2]=new_edge[2];
    edge_array[1][3]=new_edge[3];
    edge_array[3][1]=new_edge[3];

    edge MSTedge[3];

    primgraph* new_graph=create_primgraph(4,vex_array,edge_array,MSTedge);

    MiniSpanTree_Prim(new_graph);

    for (int i=0;i<3;i++){
        edge tmp_MSTedge=new_graph->MSTedge[i];
        printf("%d\t",tmp_MSTedge.weight);
    }

    for (int i=0;i<4;i++){
        graphnode tmp_vex=new_graph->vex[i];
        printf("%d",tmp_vex.ID);
        for (int j=0;j<4;j++){
            edge tmp_edge=new_graph->edge_arr[i][j];
            printf("%d",tmp_edge.weight);
        }
    }

    return 0;
}