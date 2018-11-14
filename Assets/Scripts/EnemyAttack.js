// Killian Smith
// 13501407
#pragma strict

var fireRate: float = 1f;
var inaccuracy: float = 100;
private var hero: GameObject;
private var heroHealth: HeroHealth;
private var heroInRange: boolean;

private var timer: float;

var gunEnd: Transform;
var bullet: GameObject;
var bulletSpeed: int = 6;

function Awake () {
	hero = GameObject.FindGameObjectWithTag("Player");
	heroHealth = hero.GetComponent.<HeroHealth>();
}

function OnTriggerEnter(other: Collider){
	if(other.gameObject == hero)
		heroInRange = true;
}

function OnTriggerExit(other: Collider){
	if(other.gameObject == hero)
		heroInRange = false;
}

function Update () {
	timer += Time.deltaTime;
	if(timer >= fireRate && heroInRange){
		if(heroHealth.currentHealth > 0)
			Shoot();
	}
}

function Shoot(){
	timer = 0f;
	gunEnd.LookAt(hero.transform, Vector3.forward);
	var bullet: GameObject = Instantiate(bullet, gunEnd.position, gunEnd.rotation);	
	var bulletRB: Rigidbody = bullet.GetComponent.<Rigidbody>();

	var x: float = Random.Range(-inaccuracy,inaccuracy)/1000;
	var y: float = Random.Range(-inaccuracy,inaccuracy)/1000;
	var z: float = Random.Range(-inaccuracy,inaccuracy)/1000;

	var inaccurateShot: Vector3 = new Vector3(gunEnd.transform.forward.x+x, gunEnd.transform.forward.y+y, gunEnd.transform.forward.z+z);
	bulletRB.AddForce(inaccurateShot * bulletSpeed);		// detection done in bulletController
}