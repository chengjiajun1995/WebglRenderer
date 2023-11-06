class WebglRenderer
{

    constructor(gl, camera)
    {
        this.gl = gl;
        this.camera = camera;
        this.meshes = [];
        this.shadowMeshes = [];
        this.lights = [];
    }

    addLight(light)
    {

    }

    addMeshRender(mesh) 
    {

    }
    
    addShadowMeshRender(mesh) 
    {

    }

    render()
    {
        const gl = this.gl;
        gl.clearColor(0.2, 0.3, 0.3, 1.0); // Clear to black, fully opaque
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.clearDepth(1.0); // Clear everything
        gl.enable(gl.DEPTH_TEST); // Enable depth testing
        gl.depthFunc(gl.LEQUAL); // Near things obscure far things

        for(let i = 0; i<this.lights.length; i++)
        {

        }


    }
}