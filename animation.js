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

vp.intro.zoom = function(fnRender, ctx, cX, cY, width, height)
{
	ctx.save();
	ctx.translate(cX, cY);
	var scaledVal = Math.min(vp.intro.timeIndex * 0.03, 1);
	ctx.scale(scaledVal, scaledVal);
	fnRender();
	ctx.restore();
};


vp.intro.flyIn = function(fnRender, ctx, cX, cY, width, height)
{
    ctx.save();
    ctx.translate(cX, cY);

    if (vp.intro.timeIndex < 50)
    {
        ctx.globalAlpha = (vp.intro.timeIndex - 1) / 50;
        ctx.scale(50 - vp.intro.timeIndex, 50 - vp.intro.timeIndex);
    }

    ctx.translate(-width / 2, height / 2);

    fnRender();

    ctx.restore();
};

vp.intro.fadeIn = function(fnRender, ctx, cX, cY, width, height)
{
	ctx.save();
	ctx.translate(cX, cY);
	var imgData = ctx.getImageData(cX, cY, width, height);
	ctx.globalAlpha = Math.min(vp.intro.timeIndex * 0.01, 1);
	fnRender();
	ctx.restore();
};


