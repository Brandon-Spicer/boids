function run() {
  // Initialize boids objects
  var N = 100;
  var boids = [];
  for (i = 0; i < N; i++) {
    let x = Math.floor(Math.random() * 1400);
    let y = Math.floor(Math.random() * 700);

    // boid object definition
    let boid = { x: x, y: y, dx: 0, dy: 0, ddx: 0, ddy: 0 };
    boids.push(boid);
    console.log(x);
    console.log(y);
    console.log(boids);

    // Draw the boids
    c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillRect(x, y, 5, 5);
  }

  // Game Loop
  while (true) {
    // Update
    // Acceleration
    // Alignment
    // Cohesion
    // Draw
  }
}
