if(!window.vp)
{
    vp = function(){};
}

if(!vp.intro)
{
    vp.intro = function(){};
}


vp.intro.addImage = function(ctx, img, x, y)
{
    ctx.save();
    ctx.translate(x, y);
    ctx.drawImage(img, 0, -img.height);
    ctx.restore();
    return img;
};

vp.intro.addText = function(ctx, sText, x, y)
{
	ctx.save();
	ctx.translate(x, y);
        var textWidth = ctx.measureText(sText);
        ctx.fillText(sText, 0, 0);
	ctx.restore();
};



