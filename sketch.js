import p5 from "p5/lib/p5.min";

let sketch = (p5) => {    

    const characters = "Ñ@#W$986543210?!bc;:=-,_"
    let githubPic;

    p5.preload = () => {    
        githubPic = p5.loadImage("github-profile-pic.png");   
    }

    p5.setup = () =>{
        p5.createCanvas(400, 400);
        p5.background(255);
    }

    p5.draw = () => {

        let w = p5.width / githubPic.width;
        let h = p5.height / githubPic.height;

        githubPic.loadPixels(); 

        for(let i = 0; i < githubPic.width; i++){
            for(let j = 0; j < githubPic.height; j++){

                let pixelIndex = (i+j*githubPic.width)*4;
                const r = githubPic.pixels[pixelIndex];
                const g = githubPic.pixels[pixelIndex+1];   
                const b = githubPic.pixels[pixelIndex+2];   

                p5.fill(r,g,b);

                const len = characters.length;
                const avg = (r+g+b)/3;  
                const charIndex = p5.floor(p5.map(avg, 0, 255, len-1, 0));

                p5.textSize(w);
                p5.textAlign(p5.CENTER, p5.CENTER);
                p5.text(characters[charIndex], i*w + w*0.5, j*h + h*0.5);
            }   
        }   
    }
}

new p5(sketch);