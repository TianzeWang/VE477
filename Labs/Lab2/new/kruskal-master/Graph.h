/*
 * file:		Graph.h
 *
 * Description:	Header file containing new data types.
 */

double	timestamp		= 0; /* Used to mark DFS discovery and finish times. */
double	dfs_time		= 0;
double	sort_time		= 0;
double	Kruskal_time	= 0;
int		numtrials		= 0;
int		average			= 0;
int		dimension		= 0;

/* white:	untouched vertice	*/
/* gray:	touched vertice		*/
/* black:	visited vertice		*/
enum color_t {white, gray, black};

/* Edge structure */
typedef struct edge_t {
	unsigned long int	u_edge;
	unsigned long int	v_edge;
	double				weight;
	struct edge_t		*next;
} Edge;

/* Vertex structure */
typedef struct vertex_t {
	double				discovery_time;
	double				finish_time;
	unsigned long int	num_edges;
	float				component_size;
    enum	color_t		Color;
	struct	vertex_t	*parent;
	struct	vertex_t	*kruskal_parent;
	Edge				*adj_list;	/* points to start of adjacency list */
	Edge				*last_edge;	/* points to end of adjacency list */
} Vertex;

/* Graph structure */
typedef struct graph_t {
	int					size;
	double				edge_prob;
    unsigned long int	num_edges;
    unsigned long int	dfs_trees;
    double				dfs_weight;
    double				Kruskal_weight;
	int					num_vertices_alloc;
	Vertex				*vertices; /* Note this is an array of POINTERS */
} Graph;

