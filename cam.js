document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.11.13.0";

function on_ok(stream)
{
	document.getElementById("id_video").srcObject=stream;
}
//------------------------------------------------
function on_error(error)
{
	// daca vrem sa scriem in consola folosim console.log("Eroare camera");
	alert("Eroare camera");
}

//------------------------------------------------
function start()
{
	var p = {audio:true, video:true};
	navigator.mediaDevices.getUserMedia(p).then(on_ok).catch(on_error);
	
}
//-------------------------------------------------