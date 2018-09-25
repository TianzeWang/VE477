/*
 * file:		randmst.c
 *
 */
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>
#include <assert.h>
#include "functions.h"

/*
 * main()
 * Usage: randmst 0 numpoints numtrials dimension
 */
void main(int argc, char *argv[]) {
	int i;
	/* check for proper number of command line args */
	if (argc != 5) {
		fprintf(stderr, "Usage: %s 0(or -d) numpoints numtrials dimension\n", argv[0]);
		exit(EXIT_FAILURE);
	}
	/* check the second argument to see if it 0 or an option; -d */
	if (strcmp("-d", argv[1]) == 0) {
		Graph G;
		get_specs(&G);
		generate_graph(&G);
		dfs(&G);
		if (check_graph(&G)) {
			printf("WARNING : This graph is disconncted\n\n");
		}
		Kruskal(&G);
		optional_result(&G);
		free(G.vertices);
	} else {
		int					a_size;
		double				total_weight;
		unsigned long int	total_average;
		
		a_size			= atoi(argv[2]);	/* number of vertices */
		numtrials		= atoi(argv[3]);	/* number of trials */
		dimension		= atoi(argv[4]);	/* dimension of graph */

		/* used to get the average MST weight over the trials */
		total_average	= 0;
		total_weight	= 0;

		for (i = 0; i <= numtrials; i++) {
			Graph G;
			memset(&G, 0, sizeof(Graph));
			G.size = a_size;
			G.num_vertices_alloc = (G.size * (G.size - 1))/2 * 2;
			G.vertices = (Vertex *)calloc(G.num_vertices_alloc, sizeof(Vertex));
			
			if (G.vertices == NULL) {
				printf("Error in allocation space for g->vertices\n");
				exit(EXIT_FAILURE);
			}
			G.edge_prob = 0.5;
			generate_graph(&G);
			dfs(&G);
			if (check_graph(&G)) {
				printf("WARNING : This graph is disconncted\n\n");
			}
			else 
				Kruskal(&G);
			total_average += G.num_edges;
			total_weight += G.Kruskal_weight;
			free(G.vertices);
		}
		printf("%lf  %i %i %i\n", (total_weight/numtrials), a_size, numtrials, dimension);
	}
}

/* simple function used to swap two objects */
void swap(Vertex *a, Vertex *b) {
	Vertex *temp;
	temp = a;
	a = b;
	b = temp;
}

/* find the root vertex */
Vertex*	fast_find(Vertex *a) {
	Vertex *root;
	Vertex *traveling_ptr;
	Vertex *temp_ptr;
	traveling_ptr = a;	/* find the root of a */
	while (traveling_ptr->kruskal_parent != NULL) {
		traveling_ptr = traveling_ptr->kruskal_parent;
	}
	root = traveling_ptr;
	/* make all vertices along the path from a to the root point directly to the root */
	traveling_ptr = a;
	while (traveling_ptr->kruskal_parent != NULL) {
		temp_ptr = traveling_ptr;
		traveling_ptr = traveling_ptr->kruskal_parent;
		temp_ptr->kruskal_parent = root;
	}
	return root;
}

/* Fast-Union find */


double key (Edge e) {
	return e.weight;
}

/* performs most of the work of the mergesort routine */
void merge_array(Edge **edges, int first, int split, int last) {
	int	index = first;
	int	left_tracer = first;
	int right_tracer = split + 1;
	Edge *temp;
	/* allocate a block of memory and clear it */
	temp = (Edge *)calloc(last + 1, sizeof(Edge));

	while (left_tracer <= split && right_tracer <= last) {
		if (key((*edges)[left_tracer]) < key ((*edges)[right_tracer]))
			memcpy(&(temp[index++]), &((*edges)[left_tracer++]), sizeof(Edge));
		else
			memcpy(&(temp[index++]), &((*edges)[right_tracer++]), sizeof(Edge));
	}

	while (right_tracer <= last) {
		memcpy(&(temp[index++]), &((*edges)[right_tracer++]), sizeof(Edge));
	}
	while (left_tracer <= split) {
		memcpy(&(temp[index++]), &((*edges)[left_tracer++]), sizeof(Edge));
	}

	/* copy the array back */
	for (index = first; index <= last; index++) {
		memcpy(&((*edges)[index]), &(temp[index]), sizeof(Edge));
	}
	free(temp);
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

/* list all the edges */
void list_all_edges(Graph *g, Edge **E) {
	long	vert_index;
	Vertex	*current_vertex;
	Edge	*current_edge;
	long	total_edges = 0;
	long	edges_cnt = 0;

	for (vert_index = 0; vert_index < size_of(g); vert_index++) {
		current_vertex = &(g->vertices[vert_index]);
		total_edges += current_vertex->num_edges;
	}

	/* Allocate memory for *E -- increase size by 1/4 just in case */
	total_edges = total_edges/4 + total_edges;
	*E = (Edge *)calloc(total_edges, sizeof(Edge));
	if (*E == NULL) {
		printf("Not enough memory for the edges\n");
		exit (EXIT_FAILURE);
	}

	for (vert_index = 0; vert_index < size_of(g); vert_index++) {
		current_vertex = &(g->vertices[vert_index]);
		for (current_edge = current_vertex->adj_list; current_edge != NULL; current_edge = current_edge->next) {
			(*E)[edges_cnt].u_edge = current_edge->u_edge;
			(*E)[edges_cnt].v_edge = current_edge->v_edge;
			(*E)[edges_cnt].weight = current_edge->weight;
			++edges_cnt;
			assert(edges_cnt < total_edges);
		}
	}
}


void Kruskal(Graph *g) {
	Edge	*A = NULL;
	Edge	*current_edge;
	Vertex	*a, *b;
	Vertex	*a_root, *b_root;
	clock_t	start_sort, finish_sort;
	clock_t	start_Kruskal, finish_Kruskal;
	unsigned long int index; 

	list_all_edges(g, &A);

	start_sort = clock();	/* clock the time it takes merge_sort */
	merge_sort(&A, 0, g->num_edges - 1);
	finish_sort = clock();
	sort_time = running_time(start_sort, finish_sort);

	start_Kruskal = clock();
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
	finish_Kruskal = clock();
	Kruskal_time = running_time(start_Kruskal, finish_Kruskal);
}


/* return the start of an edge */
Vertex *to_vertex(Graph *g, Edge *e) {
	return &(g->vertices[e->u_edge]);
}

/* return the end of an edge */
Vertex *from_vertex(Graph *g, Edge *e) {
	return &(g->vertices[e->v_edge]);
}

/* chekc if the mst is connected */
int check_graph(Graph *g) {
	if (g->dfs_trees == 1)
		return 0;
	return 1;
}

/* record running times of algorithms */
double running_time(clock_t start, clock_t finish) {
	return ((double) (finish - start)) * 1000/CLOCKS_PER_SEC;
}

/***************************
 * DFS routine begins here *
 ***************************/
void dfs(Graph *g) {
	Vertex	*vertex;
	int		node_number;
	clock_t	start_dfs;
	clock_t finish_dfs;

	start_dfs = clock();
	for (node_number = 0; node_number < size_of(g); node_number++) {
		vertex = &(g->vertices[node_number]);
		if (vertex->Color == white) {
			(g->dfs_trees)++;
			dfs_visit(g, vertex);
		}
	}
	finish_dfs = clock();
	dfs_time = running_time(start_dfs, finish_dfs);
}

void dfs_visit(Graph *g, Vertex *u) {
	Edge	*current_edge;
	Vertex	*v;

	/* White vertex u has been discovered */
	u->Color = gray;
	u->discovery_time = ++timestamp;

	for (current_edge = u->adj_list; current_edge != NULL; current_edge = current_edge->next) {
		v = &(g->vertices[current_edge->v_edge]);
		/* Explore edge (u, v) */
		if (g->vertices[current_edge->v_edge].Color == white) {
			g->dfs_weight += current_edge->weight;
			g->vertices[current_edge->v_edge].parent = u;
			dfs_visit(g, &(g->vertices[current_edge->v_edge]));
		}
	}
	u->Color = black;	/* u is finished */
	u->finish_time = ++timestamp;
}
/**********************
 * End of DFS routine *
 **********************/

/* return the size of the graph */
int size_of(Graph *g) {
	return g->size;
}

/* edge probability */
double edge_prob_of(Graph *g) {
	return g->edge_prob;
}

/* create edge in the graphs */
void make_edge(Graph *g, int u, int v) {
	/* used to hold values for calculating the Euclidean dist. */
	double			x1, x2, y1, y2;
	double			X, Y;
	double			Euclidean_distance;

	Edge			*edge;
	void 			*oldvertices;
	unsigned long	oldsize;

	assert(u < g->size && v < g->size);
	if (u > g->num_vertices_alloc) {
		/* reallocate g->vertices */
		oldsize = g->num_vertices_alloc * sizeof(Vertex);
		g->num_vertices_alloc = g->num_vertices_alloc * 2;
		oldvertices = g->vertices;
		g->vertices = (Vertex *)calloc(g->num_vertices_alloc, sizeof(Vertex));
		if (g->vertices == NULL) {
			printf("Error in increase allocation space for g->vertices\n");
			exit(EXIT_FAILURE);
		}
		memmove(g->vertices, oldvertices, oldsize); 
		free(oldvertices);
	}
	/* allocate memory for the edges */
	if ((edge = (Edge *)malloc(sizeof(Edge))) == NULL) {
		printf("Not enough memory for edge creation\n");
		exit(EXIT_FAILURE);
	}

	edge->u_edge = u;
	edge->v_edge = v;
	/* 
	 * Generate the appropriate graph
	 * If the dimension is 0 then generate a random weight [0,1] 
	 */
	if (dimension == 0)
		edge->weight = (double)rand()/(RAND_MAX + 1);
	/* 
	 * If the dimension is 2 then generate a random vertices w/in the unit 
	 * square.
	 */
	else if (dimension == 2) {
		x1 = (double)rand()/(RAND_MAX + 1);
		y1 = (double)rand()/(RAND_MAX + 1);
		x2 = (double)rand()/(RAND_MAX + 1);
		y2 = (double)rand()/(RAND_MAX + 1);
		X = (x2 - x1);
		Y = (y2 - y1);
		Euclidean_distance = sqrt((X * X) + (Y * Y));
		edge->weight = Euclidean_distance;
	} else {
		fprintf(stderr, "usage: The dimension must be 0 or 2.\n");
		exit(EXIT_FAILURE);
	}

	/* keep numbers greater than 0 */
	if (edge->weight < 0)
		edge->weight = edge->weight * -1;
	edge->next = NULL;

	/* find u vertex in g */
	(g->vertices)[u].num_edges++;

	if ((g->vertices)[u].adj_list == NULL)
		(g->vertices)[u].adj_list = edge;
	else
		(g->vertices)[u].last_edge->next = edge;
	(g->vertices)[u].last_edge = edge;
}

/*
 * If the user specifies the -d option as the second argument then the user is
 * prompted.  0.5 should be entered for the edge-probability
 */
void get_specs(Graph *g) {
	unsigned long v_size;
	memset(g, 0, sizeof(*g));
	printf("Enter the desired number of vertices: \n");
	scanf("%i", &(g->size));
	printf("Enter the probability of a given edge belonging to the graph as a decimal: \n");
	scanf("%lf", &(g->edge_prob));
	
	g->num_vertices_alloc = (g->size * (g->size - 1))/2 * 2;
	v_size = g->num_vertices_alloc  * sizeof(Vertex);
	g->vertices = (Vertex *)calloc(g->num_vertices_alloc, sizeof(Vertex));
	
	if (g->vertices == NULL) {
		printf("Error in allocation space for g->vertices\n");
		exit(1);
	}
}

/**************************************
 * Random Graph Generator begins here *
 **************************************/
void generate_graph(Graph *g) {
	int u, v;	
	srand((unsigned int)(time(NULL) % 10000));

	for (u = 0; u < size_of(g); u++) {
		for (v = u + 1; v < size_of(g); v++) {
			if ((rand()/(RAND_MAX + 1)) <= 1) {
				make_edge(g, u, v);
				make_edge(g, v, u);
				(g->num_edges)++;
			}
		}
	}
}
/*********************************
 * End of random graog generator *
 *********************************/

/* Displays the runtime of each routine */
void optional_result(Graph *g) {
	printf("The number of vertices generated in the graph: %i \n", g->size);
	printf("The number of edges generated in the graph:    %i \n", g->num_edges);
	printf("It took %lf milliseconds to sort them\n", sort_time);
	printf("The depth-first search took %lf milliseconds\n", dfs_time);
	printf("\tand produced a tree of weight   %lf.\n", g->dfs_weight);
	printf("The second half of the Kruskal's algorithm took %lf milliseconds\n", Kruskal_time);
	printf("\tand produced a MST of weight    %lf.\n", g->Kruskal_weight);
}
