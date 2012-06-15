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
    var dest = 20;

    ctx.save();
    ctx.translate(cX, cY);

    if (vp.intro.timeIndex < dest)
    {
        ctx.globalAlpha = (vp.intro.timeIndex - 1) / dest;
        ctx.scale(dest - vp.intro.timeIndex, dest - vp.intro.timeIndex);
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



vp.intro.Blinds = function(fnRender, ctx, cX, cY, width, height)
{
    var me = this;
    var fnShuffle = function(o)
    {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o
    };

    var blindHeight = 4;
    var order = [];
    for (var i = 1; i <= (height * 1.2); i++)
    {
        if (i % blindHeight == 1)
        {
            order.push(i);
        }
    }
    order = fnShuffle(order);

    var visible = [];

    this.step = function()
    {

        ctx.save();
        ctx.translate(cX, cY)

        if (order.length != 0)
        {
            visible.push(order.pop());

            ctx.beginPath();
            for (var i = 0; i < visible.length; i++)
            {
                ctx.rect(0, visible[i], width, blindHeight);
            }
            ctx.clip();
        }

        ctx.translate(0, height);

        fnRender();

        ctx.translate(0, -height);

        ctx.restore();
    };
};
