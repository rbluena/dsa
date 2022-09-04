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
