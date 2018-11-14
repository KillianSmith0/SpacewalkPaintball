// Killian Smith
// 13501407
#pragma strict

static var enemyCount: int = 1;
static var score: int;
static var enemyScore: int;
static var scene: UnityEngine.SceneManagement.Scene;

var hero: GameObject;
var objects: GameObject[];

var speedText: Text;
var scoreText: Text;
var enemyText: Text;

private var heroRB: Rigidbody;

function Awake () {
	score = 0;
	enemyScore = 0;
	scene = SceneManagement.SceneManager.GetActiveScene();
	CreateObstacles(50);
}

function Update(){
	speedText.text = "Speed: " + PlayerMovement.currentSpeed.ToString('0.0') + "m/s";
	scoreText.text = "Score: " + score;
	enemyText.text = "Enemy Score: "+enemyScore;
}

function CreateObstacles(numOfObstacles: int){
	for(var i: int = 0; i < numOfObstacles; i++){
		var obj: GameObject = objects[Random.Range(0, objects.length)];	// Choose an object

		var pos: Vector3 = new Vector3(Random.Range(-30, 30),Random.Range(-30, 30),Random.Range(-10, 70));
		var rotation: Quaternion = Random.rotation;
		Instantiate(obj, pos, rotation);
	}
}