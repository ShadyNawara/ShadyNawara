import { WebGLRenderer, Scene, PerspectiveCamera, DirectionalLight, BoxGeometry, MeshPhongMaterial, Mesh } from 'three';

/**
 * Main class for the Explore mode
 * class creates the basic components three.js needs to operate
 * contains the main render loop and adjusts the canvas if the window size changes
 */
class Explore {
    renderer: WebGLRenderer;
    scene: Scene;
    camera: PerspectiveCamera;

    constructor() {
        const canvas = document.querySelector('#main-content-canvas');
        this.renderer = new WebGLRenderer({
            canvas,
            alpha: true
        });

        
        // set camera to look straight ahead
        this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
        this.camera.position.set(0, 0, 50);
        this.camera.lookAt(0, 0, 0);

        this.scene = new Scene();

        // set scene light source
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new DirectionalLight(color, intensity);
        light.position.set(1, 1, 1);
        this.scene.add(light);

        requestAnimationFrame((t)=>this.render(t));
    }

    /**
     * main render loop
     * Adjusts canvas size if needed and renders the scene
     * @param time provided by requestAnimationFrame
     */
    render(time: number) {
        const canvas = this.renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            this.renderer.setSize(width, height, false);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        }

        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame((t)=>this.render(t));
    }
}

new Explore();