var bulb=0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="onb.png";
        bulb=1;
    }
    else{
        document.getElementById("image").src="ofb.png";
        bulb=0;
    }
}