const print = (data) => console.log(JSON.stringify(data));

function depthFirstSearch(graph, source) {
  const stack = [source];
  const results = [];

  while (stack.length) {
    const current = stack.pop();

    results.push(current);

    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  return results;
}

function breadthFirstSearch(graph, source) {
  const queue = [source];
  const results = [];

  while (queue.length) {
    const current = queue.shift();

    results.push(current);

    for (const naighbor of graph[current]) {
      queue.push(naighbor);
    }
  }

  return results;
}

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

print(breadthFirstSearch(graph, "a"));

/**
 * UNDIRECTED GRAPH
 */

/**
 * Converting undirected graph to Adjacency list
 */
function buildAdjacentGraph(edges) {
  const graph = {};

  for (const vertecies of edges) {
    const [current, naighbor] = vertecies;

    if (!(current in graph)) graph[current] = [];
    if (!(naighbor in graph)) graph[naighbor] = [];

    graph[current].push(naighbor);
    graph[neighbor].push(current);
  }
}

/**
 * Checking if a source and destination are connected inside
 * an undirected graph.
 *
 * @param {Array} edges
 * @param {String} src
 * @param {String} dest
 * @returns {Boolean}
 */
function undirectedGraphTraverse(edges, src, dest) {
  const graph = buildAdjacentGraph(edges);
  const visited = new Set();

  return explore(graph, src, dest, visited);
}

function explore(graph, src, dest, visited) {
  if (src === dest) return true;
  if (visited.has(src)) return false;
}
