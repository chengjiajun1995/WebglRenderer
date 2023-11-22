class Shader
{
    constructor(gl, vsSrc, fsSrc, shaderLocations)
    {
        this.gl = gl;
        let vs = this.complie(vsSrc, gl.VERTEX_SHADER);
        let fs = this.complie(fsSrc, gl.FRAGMENT_SHADER);

        this.program = this.addShaderLocations({
            glShaderProgram: this.linkShader(vs, fs),
        }, shaderLocations);
    }

    complie(source, shaderType)
    {
        let gl = this.gl;
        let shader = gl.createShader(shaderType);
        gl.shaderSource(shader, source);
        gl.complieShader(shader);

        if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        {
            console.error(shaderSource);
            console.error('shader compiler error:\n' + gl.getShaderInfoLog(shader));
        }

        return shader;
    }

    link(vs, fs)
    {
        let gl = this.gl;
        let prog = gl.createProgram();
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);

        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            abort('shader linker error:\n' + gl.getProgramInfoLog(prog));
        }
        
        return prog;
    }

    addShaderLocation(result, shaderLocations)
    {
        let gl = this.gl;
        result.uniforms = {};
        result.attribs = {};

        if(shaderLocations && shaderLocations.uniforms && shaderLocations.uniforms.length)
        {
            for(let i = 0; i<shaderLocations.uniforms.length; ++i)
            {
                result.uniforms = Object.assign(
                    result.uniforms, 
                    {[shaderLocations.uniforms[i]]:gl.getUniformLocation(result.glShaderProgram, shaderLocations.attribs[i])}
                )
            }
        }

        if (shaderLocations && shaderLocations.attribs && shaderLocations.attribs.length) {
            for (let i = 0; i < shaderLocations.attribs.length; ++i) {
                result.attribs = Object.assign(
                    result.attribs, 
                    {[shaderLocations.attribs[i]]: gl.getAttribLocation(result.glShaderProgram, shaderLocations.attribs[i])}
                );
            }
        }

        return result;
    }
}