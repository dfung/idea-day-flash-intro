if(!window.vp)
{
    vp = function(){};
}

if(!vp.intro)
{
    vp.intro = function(){};
}

vp.intro.timeIndex = 1;

vp.intro.spinInPlace = function(fnRender, ctx, cX, cY, width, height)
{
	ctx.save();
	ctx.translate(cX, cY);
	ctx.rotate(vp.intro.timeIndex*0.1);
	ctx.translate(-width/2, height/2);
	
	fnRender();
	  
	ctx.restore();
};
  
vp.intro.Yoyo = function(fnRender, ctx, cX, cY, width, height)
{
ctx.save();
ctx.translate(cX, cY);
ctx.translate(-width/2, height/2);
ctx.scale(Math.abs(Math.sin(vp.intro.timeIndex*0.1)), 1);
	
fnRender();
	  
ctx.restore();
};


vp.intro.spinY = function(fnRender, ctx, cX, cY, width, height)
{
    ctx.save();
    ctx.translate(cX, cY);

    ctx.scale(Math.sin(vp.intro.timeIndex * 0.1), 1);

    ctx.translate(-width / 2, height / 2);

    fnRender();

    ctx.restore();
};  