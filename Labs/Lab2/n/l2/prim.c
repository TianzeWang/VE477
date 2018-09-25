//
// Created by DELL on 2018/9/21.
//

#include <stdio.h>
#include <stdlib.h>
#include "prim.h"

primgraph* create_primgraph(int vex_num,graphnode vex[vex_num], edge (*edge_arr)[vex_num], edge MSTedge[vex_num-1]){

    primgraph* new_graph=(primgraph *)malloc(sizeof(primgraph));
    new_graph->vex_num=vex_num;
    new_graph->vex=(graphnode *)malloc(sizeof(graphnode)*vex_num);
    new_graph->edge_arr=(edge**)malloc(sizeof(edge*)*vex_num);
    for (int i=0;i<vex_num;i++){
        new_graph->vex[i]=vex[i];
        new_graph->edge_arr[i]=(edge*)malloc(sizeof(edge)*vex_num);
        for (int j=0;j<vex_num;j++){
            new_graph->edge_arr[i][j]=edge_arr[i][j];
        }
    }
    new_graph->MSTedge=(edge*)malloc(sizeof(edge));
    new_graph->MSTedge=MSTedge;
}

void MiniSpanTree_Prim(primgraph *new_graph){

    new_graph->vex[0].parent=&new_graph->vex[0];
    new_graph->vex[0].distMST=0;
    int mindist;

    for (int i=1;i<new_graph->vex_num;i++){
        new_graph->vex[i].distMST=new_graph->edge_arr[0][i].weight;
        new_graph->vex[i].parent=&new_graph->vex[0];
    }

    for (int i=1;i<new_graph->vex_num;i++){
        mindist=MAX_INT;
        int j=1,next_node_ID=0;

        while (j<new_graph->vex_num){
            if (new_graph->vex[j].distMST!=0&&new_graph->vex[j].distMST<mindist){
                mindist=new_graph->vex[j].distMST;
                next_node_ID=j;
            }
            j++;
        }
        new_graph->MSTedge[i-1].v1=new_graph->vex[next_node_ID].parent;
        new_graph->MSTedge[i-1].v2=&new_graph->vex[next_node_ID];
        new_graph->MSTedge[i-1].weight=mindist;
        new_graph->vex[next_node_ID].distMST=0;

        for (int k=1;k<new_graph->vex_num;k++){
            if (new_graph->vex[k].distMST!=0&&new_graph->vex[k].distMST>new_graph->edge_arr[next_node_ID][k].weight){
                new_graph->vex[k].distMST=new_graph->edge_arr[next_node_ID][k].weight;
                new_graph->vex[k].parent=&new_graph->vex[next_node_ID];
            }
        }
    }
}