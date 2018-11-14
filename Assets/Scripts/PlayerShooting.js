#pragma strict

private var gunAudio: AudioSource;
private var fireRate: float = 0.25f;	// 1/4 second, time till next shot
private var timer: float;

var bullet: GameObject;
var bulletSpeed: int = 6;			// Speed the bullets come out at
var gunEnd: Transform;				// The end of the gun where the bullets come from
	
function Awake () {
	gunAudio = GetComponent.<AudioSource>();
}

function Update () {
	timer += Time.deltaTime;	//counts until timer > fireRate

	if(Input.GetKey(KeyCode.Space)  && timer > fireRate){
		Fire();
	}
}

function Fire(){
	timer = 0f;		//reset timer
	gunAudio.Play();

	//create bullet and give force towards where the gun points.
    var bullet: GameObject = Instantiate(bullet, gunEnd.position, gunEnd.rotation);	
	var bulletRB: Rigidbody = bullet.GetComponent.<Rigidbody>();

	bulletRB.AddForce(gunEnd.transform.right * bulletSpeed);		// detection done in bulletController
}