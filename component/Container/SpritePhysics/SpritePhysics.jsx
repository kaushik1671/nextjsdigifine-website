// import { useEffect, useRef } from "react";
// import Matter from "matter-js";

// export default function SpritePhysics({
//   width = 800,
//   height = 600,
//   boxImage = ["/box.webp"],
//   ballImage = ["/ball.webp"]
// }) {
//   const sceneRef = useRef(null);

//   useEffect(() => {
//     const {
//       Engine,
//       Render,
//       Runner,
//       World,
//       Bodies,
//       Composites,
//       Common,
//       Mouse,
//       MouseConstraint
//     } = Matter;

//     // Engine
//     const engine = Engine.create();
//     const world = engine.world;

//     // Renderer
//     const render = Render.create({
//       element: sceneRef.current,
//       engine,
//       options: {
//         width,
//         height,
//         // background: "#191970", /* background color */
//         background:"white",
//         wireframes: false
//       }
//     });

//     Render.run(render);

//     // Runner
//     const runner = Runner.create();
//     Runner.run(runner, engine);

//     // Walls
//     const offset = 50;
//     const wallOptions = {
//       isStatic: true,
//       render: { visible: false }
//     };

//     World.add(world, [
//       Bodies.rectangle(width / 2, -offset, width + offset * 2, offset, wallOptions),
//       Bodies.rectangle(width / 2, height + offset, width + offset * 2, offset, wallOptions),
//       Bodies.rectangle(-offset, height / 2, offset, height + offset * 2, wallOptions),
//       Bodies.rectangle(width + offset, height / 2, offset, height + offset * 2, wallOptions)
//     ]);

//     // Stack of bodies
//     const stack = Composites.stack(20, 20, 10, 4, 0, 0, (x, y) => {
//       if (Common.random() > 0.35) {
//         return Bodies.rectangle(x, y, 64, 64, {
//           render: {
//             sprite: {
//               texture: boxImage,
//               xScale: 0.5,
//               yScale: 0.5
//             }
//           }
//         });
//       } else {
//         return Bodies.circle(x, y, 32, {
//           density: 0.0005,
//           frictionAir: 0.06,
//           restitution: 0.3,
//           friction: 0.01,
//           render: {
//             sprite: {
//               texture: ballImage,
//               xScale: 0.5,
//               yScale: 0.5
//             }
//           }
//         });
//       }
//     });

//     World.add(world, stack);

//     // Mouse control
//     const mouse = Mouse.create(render.canvas);
//     const mouseConstraint = MouseConstraint.create(engine, {
//       mouse,
//       constraint: {
//         stiffness: 0.2,
//         render: { visible: false }
//       }
//     });

//     World.add(world, mouseConstraint);
//     render.mouse = mouse;

//     // Cleanup
//     return () => {
//       Render.stop(render);
//       Runner.stop(runner);
//       World.clear(world);
//       Engine.clear(engine);
//       render.canvas.remove();
//     };
//   }, [width, height, boxImage, ballImage]);

//   return (
//     <div
//       ref={sceneRef}
//       style={{
//         width,
//         height,
//         overflow: "hidden"
//       }}
//     />
//   );
// }


// import { useEffect, useRef } from "react";
// import Matter from "matter-js";

// export default function SpritePhysics({
//   width = 800,
//   height = 600,
//   boxImage = ["/box1.webp", "/box2.webp"],
//   ballImage = ["/ball1.webp", "/ball2.webp"]
// }) {
//   const sceneRef = useRef(null);

//   // 🔁 image indexes (persist across renders)
//   const boxIndexRef = useRef(0);
//   const ballIndexRef = useRef(0);

//   const getNextBoxImage = () => {
//     const img = boxImage[boxIndexRef.current];
//     boxIndexRef.current = (boxIndexRef.current + 1) % boxImage.length;
//     return img;
//   };

//   const getNextBallImage = () => {
//     const img = ballImage[ballIndexRef.current];
//     ballIndexRef.current = (ballIndexRef.current + 1) % ballImage.length;
//     return img;
//   };

//   useEffect(() => {
//     const {
//       Engine,
//       Render,
//       Runner,
//       World,
//       Bodies,
//       Composites,
//       Common,
//       Mouse,
//       MouseConstraint
//     } = Matter;

//     // Engine
//     const engine = Engine.create();
//     const world = engine.world;

//     // Renderer
//     const render = Render.create({
//       element: sceneRef.current,
//       engine,
//       options: {
//         width,
//         height,
//         background: "white",
//         wireframes: false
//       }
//     });

//     Render.run(render);

//     // Runner
//     const runner = Runner.create();
//     Runner.run(runner, engine);

//     // Walls
//     const offset = 50;
//     const wallOptions = {
//       isStatic: true,
//       render: { visible: false }
//     };

//     World.add(world, [
//       Bodies.rectangle(width / 2, -offset, width + offset * 2, offset, wallOptions),
//       Bodies.rectangle(width / 2, height + offset, width + offset * 2, offset, wallOptions),
//       Bodies.rectangle(-offset, height / 2, offset, height + offset * 2, wallOptions),
//       Bodies.rectangle(width + offset, height / 2, offset, height + offset * 2, wallOptions)
//     ]);

//     // Stack of bodies
//     const stack = Composites.stack(20, 20, 10, 4, 0, 0, (x, y) => {
//       if (Common.random() > 0.35) {
//         return Bodies.rectangle(x, y, 64, 64, {
//           render: {
//             sprite: {
//               texture: getNextBoxImage(), // ✅ uses ALL box images
//               xScale: 0.25,
//               yScale: 0.25
//             }
//           }
//         });
//       } else {
//         return Bodies.circle(x, y, 32, {
//           density: 0.0005,
//           frictionAir: 0.06,
//           restitution: 0.3,
//           friction: 0.01,
//           render: {
//             sprite: {
//               texture: getNextBallImage(), // ✅ uses ALL ball images
//               xScale: 0.25,
//               yScale: 0.25
//             }
//           }
//         });
//       }
//     });

//     World.add(world, stack);

//     // Mouse control
//     const mouse = Mouse.create(render.canvas);
//     const mouseConstraint = MouseConstraint.create(engine, {
//       mouse,
//       constraint: {
//         stiffness: 0.2,
//         render: { visible: false }
//       }
//     });

//     World.add(world, mouseConstraint);
//     render.mouse = mouse;

//     // Cleanup
//     return () => {
//       Render.stop(render);
//       Runner.stop(runner);
//       World.clear(world);
//       Engine.clear(engine);
//       render.canvas.remove();
//     };
//   }, [width, height, boxImage, ballImage]);

//   return (
//     <div
//       ref={sceneRef}
//       style={{
//         width,
//         height,
//         overflow: "hidden"
//       }}
//     />
//   );
// }

import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function SpritePhysics({
  width = 800,
  height = 600,
  boxImage = [],
  ballImage = []
}) {
  const sceneRef = useRef(null);

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      World,
      Bodies,
      Mouse,
      MouseConstraint
    } = Matter;

    // Normalize inputs (string OR array)
    const boxImages = Array.isArray(boxImage) ? boxImage : [boxImage];
    const ballImages = Array.isArray(ballImage) ? ballImage : [ballImage];

    // Engine
    const engine = Engine.create();
    const world = engine.world;

    // Renderer
    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        background: "white",
        wireframes: false
      }
    });

    Render.run(render);

    // Runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Walls
    const offset = 50;
    const wallOptions = {
      isStatic: true,
      render: { visible: false }
    };

    World.add(world, [
      Bodies.rectangle(width / 2, -offset, width + offset * 2, offset, wallOptions),
      Bodies.rectangle(width / 2, height + offset, width + offset * 2, offset, wallOptions),
      Bodies.rectangle(-offset, height / 2, offset, height + offset * 2, wallOptions),
      Bodies.rectangle(width + offset, height / 2, offset, height + offset * 2, wallOptions)
    ]);

    // ✅ Create bodies ONLY for provided images
    const bodies = [];

    const startX = 100;
    const startY = 120;
    const gap = 90;

    // Box images → rectangles
    boxImages.forEach((texture, index) => {
      if (!texture) return;

      bodies.push(
        Bodies.rectangle(startX + index * gap, startY, 64, 64, {
          render: {
            sprite: {
              texture,
              xScale: 0.25,
              yScale: 0.25
            }
          }
        })
      );
    });

    // Ball images → circles
    ballImages.forEach((texture, index) => {
      if (!texture) return;

      bodies.push(
        Bodies.circle(startX + index * gap, startY + gap, 32, {
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 0.01,
          render: {
            sprite: {
              texture,
              xScale: 0.25,
              yScale: 0.25
            }
          }
        })
      );
    });

    World.add(world, bodies);

    // Mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    World.add(world, mouseConstraint);
    render.mouse = mouse;

    // Cleanup
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, [width, height, boxImage, ballImage]);

  return (
    <div
      ref={sceneRef}
      style={{
        width,
        height,
        overflow: "hidden"
      }}
    />
  );
}
