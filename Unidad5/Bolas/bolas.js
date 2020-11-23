/** Class representing a particle */
class Particle {

    /**
     * Create a particle
     * @param {Array<Number>} position Position [x, y]
     * @param {Array<Number>} velocity Velocity [x, y]
     * @param {Number} radius Radius of particle
     * @param {Number} mass Mass of particle
     */
    constructor(position, velocity, radius, mass) {
        this.position = position;
        this.previousPosition = position.slice();
        this.velocity = velocity;
        this.radius = radius;
        this.mass = mass;
    }

    // Methods
    /**
     * Moves the particle a unit of time
     */
    move() {
        this.previousPosition = this.position.slice();
        this.position[0] += this.velocity[0];
        this.position[1] += this.velocity[1];
    }

    /**
     * Checks if two particles colide. True if they colide, false if they does not.
     * @param {Particle} particle1 
     * @param {Particle} particle2
     * @returns {Boolean}
     */
    static colides(particle1, particle2) {
        // Relative position vector to calulate distance.
        let relativePosition = [particle1.position[0] - particle2.position[0], particle1.position[1] - particle2.position[1]];
        let distance = Math.sqrt(Math.pow(relativePosition[0], 2) + Math.pow(relativePosition[1], 2));

        if (distance < (particle1.radius + particle2.radius)) {
            return true;
        }
        return false;
    }

    /**
     * Checks if a particle colides with one in an array of particles. True if it does colide, false if it does not.
     * @param {Particle} particleToCheck Particle to check agains the array
     * @param {Array<Particle>} particles Array of particles
     * @returns {Boolean}
     */
    static colidesWithArray(particleToCheck, particles) {
        // Relative position vector to calulate distance.
        for (const particle of particles) {
            let relativePosition = [particleToCheck.position[0] - particle.position[0], particleToCheck.position[1] - particle.position[1]];
            let distance = Math.sqrt(Math.pow(relativePosition[0], 2) + Math.pow(relativePosition[1], 2));
            if (distance < (particleToCheck.radius + particle.radius)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Resolve a collision of two particles updating their velocities. Does not check if those two particles collides, for that use colides method.
     * Assumes a perfectly elastic collision.
     * https://en.wikipedia.org/wiki/Elastic_collision#Two-dimensional_collision_with_two_moving_objects
     * @param {Particle} particle1 
     * @param {Particle} particle2
     */
    static resolveCollision(particle1, particle2) {
        // Return to previous position
        particle1.position = particle1.previousPosition.slice();
        particle2.position = particle2.previousPosition.slice();

        // Coefficients to compute new velocities
        let coefficient1 = scalarProduct2D([particle1.velocity[0] - particle2.velocity[0], particle1.velocity[1] - particle2.velocity[1]], [particle1.position[0] - particle2.position[0], particle1.position[1] - particle2.position[1]]);
        coefficient1 /= scalarProduct2D([particle1.position[0] - particle2.position[0], particle1.position[1] - particle2.position[1]], [particle1.position[0] - particle2.position[0], particle1.position[1] - particle2.position[1]]);
        let coefficient2 = scalarProduct2D([particle2.velocity[0] - particle1.velocity[0], particle2.velocity[1] - particle1.velocity[1]], [particle2.position[0] - particle1.position[0], particle2.position[1] - particle1.position[1]]);
        coefficient2 /= scalarProduct2D([particle2.position[0] - particle1.position[0], particle2.position[1] - particle1.position[1]], [particle2.position[0] - particle1.position[0], particle2.position[1] - particle1.position[1]]);

        // Update velocities
        particle1.velocity[0] -= coefficient1 * (particle1.position[0] - particle2.position[0]) * (2.0 * particle2.mass) / (particle1.mass + particle2.mass);
        particle2.velocity[0] -= coefficient2 * (particle2.position[0] - particle1.position[0]) * (2.0 * particle1.mass) / (particle1.mass + particle2.mass);
        particle1.velocity[1] -= coefficient1 * (particle1.position[1] - particle2.position[1]) * (2.0 * particle2.mass) / (particle1.mass + particle2.mass);
        particle2.velocity[1] -= coefficient2 * (particle2.position[1] - particle1.position[1]) * (2.0 * particle1.mass) / (particle1.mass + particle2.mass);
    }

}

/**
 * Class representing a ball in SVG
 * @extends Particle
 */
// eslint-disable-next-line no-unused-vars
class BallSVG extends Particle {

    /**
     * Create a ball
     * @param {Array<Number>} position Position [x, y]
     * @param {Array<Number>} velocity Velocity [x, y]
     * @param {Number} radius Radius of ball
     * @param {Number} mass Mass of ball
     * @param {String} color Hex string representing color
     * @param {Number} id ID to assign to the HTML tag
     * @param {SVGElement} svgContainer Svg element to draw in
     */
    constructor(position, velocity, radius, mass, color, id, svgContainer) {
        super(position, velocity, radius, mass);
        this.color = color;
        this.id = id;
        this.svgContainer = svgContainer;
        /** @type {SVGCircleElement} */
        this.circle = null;
    }

    /**
     * Draws the ball in the container
     */
    fisrtDraw() {
        this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttribute("cx", this.position[0].toString());
        this.circle.setAttribute("cy", this.position[1].toString());
        this.circle.setAttribute("r", this.radius.toString());
        this.circle.setAttribute("fill", this.color);
        this.circle.id = this.id.toString();
        this.svgContainer.appendChild(this.circle);
    }

    /**
     * Moves the ball a unit of time
     */
    move() {
        super.move();
        this.circle.setAttribute("cx", this.position[0].toString());
        this.circle.setAttribute("cy", this.position[1].toString());
    }


}

/**
 * Returns the scalar product of two 2D vectors
 * @param {Array<Number>} vector1 First vector
 * @param {Array<Number>} vector2 Second vector
 * @returns {Number}
 */
function scalarProduct2D(vector1, vector2) {
    return vector1[0] * vector2[0] + vector1[1] * vector2[1];
}

export { Particle, BallSVG };