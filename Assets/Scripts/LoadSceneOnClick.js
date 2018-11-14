// Killian Smith
// 13501407
#pragma strict

function LoadByIndex(sceneIndex: int){
	SceneManagement.SceneManager.LoadScene(sceneIndex);
}

function doQuit(){
	Application.Quit();
}