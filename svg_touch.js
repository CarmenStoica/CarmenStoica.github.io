document.getElementById("id_logic_version").innerHTML = "Logic: 2019.01.08.0";
var svg = document.getElementById("id_svg");
svg.addEventListener("touchstart", on_touch_svg);
svg.addEventListener("mousedown", on_touch_svg);

function on_touch_svg(e)
{
	for (var i = 0; i < e.changedTouches.length; i++)
		var cerc = document.CreateElementNS("http://www.w3.org/2000/svg", "circle");
		cerc.setAttribute("cx", e.changedTouches[i].pageX);
		cerc.setAttribute("cy", e.changedTouches[i].pageY);
		cerc.setAttribute("r", 20);
		svg.appendChild(cerc);

}
