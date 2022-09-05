function hasPath(graph, src, dest) {
  if (src === dest) return true;

  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dest)) return true;
  }

  return false;
}

function connectedComponentsCount() {}
