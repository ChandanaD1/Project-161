AFRAME.registerComponent("bowling-balls", {

    init: function() {
        //calling throwBowlingBall function
        this.throwBowlingBall();
    },
    
    //defining throwBowlingBall function
    throwBowlingBall: function() {

        //event listener allows the code to react to pressing on the keys
        window.addEventListener("keyDown",(e) => {

            //if the 'z' key is pressed
            if (e.key === "z") {

                //creates ball element
                var ball = document.createElement("a-entity");

                //setting the shape and color of the ball
                ball.setAttribute("geometry", {
                    premitive: "sphere",
                    radius: 1,
                }); 
                ball.setAttribute("material", "color", "black");

                //initializing camera
                //querySelector selects the specific component added in the scene (this one is the camera)
                var cam = document.querySelector("#camera");

                //getting camera's position 
                pos = cam.getAttribute("position");

                //setting ball's position at the same place as the camera
                ball.setAttribute("position", {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z,
                });

                //allows camera to see in 3D
                var camera = document.querySelector("#camera").object3D;

                //setting direction as THREE.js Vector
                var direction = new THREE.Vector3();

                //setting camera to see in 3D direction
                camera.getWorldDirection(direction);

                //ball's scale shrinks to show that it gets farther from the camera 
                ball.setAttribute("velocity", direction.multiplyScaler(-10));

                //creating scene and appending ball to the scene
                var scene = document.querySelector("#scene");
                scene.appendChild(ball);
            }
        });
    },
});