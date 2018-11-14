// Killian Smith
// 13501407
#pragma strict
import UnityEngine.UI;

var startingHealth: int = 100;
var currentHealth: int;
var healthSlider: Slider;
var damageImage: Image;
var bulletSplat: Image;

var deathClip: AudioClip;		// When player loses game
var flashSpeed: float = 5f;		//
var flashColor: Color = new Color(1f, 0f, 0f, 0.1f);
var bulletColor: Color = new Color(0.47f, 0f, 0.94f, 0.58f);

private var playerAudio: AudioSource;
private var rb: Rigidbody;
private var movement: PlayerMovement;
private var shooting: PlayerShooting;

private var isBullet: boolean;		// Checks whether hit by bullet or other object
private var isDead: boolean;
private var damaged: boolean;


function Awake(){
	playerAudio = GetComponent.<AudioSource>();
	rb = GetComponent.<Rigidbody>();
	movement = GetComponent.<PlayerMovement>();
	shooting = GetComponentInChildren.<PlayerShooting>();
	currentHealth = startingHealth;
}

function OnCollisionEnter(col: Collision){
	if(col.collider.name.Contains("EnemyBullet")){
		isBullet = true;
		TakeDamage(10);
		GameController.enemyScore += 10;
	}
	else if(rb.velocity.magnitude > 10){
		isBullet = false;
		TakeDamage(startingHealth);
	}else{
		TakeDamage(5);
	}
}

function Update () {
	if(damaged){
		damageImage.color = flashColor;
	}else{
		damageImage.color = Color.Lerp(damageImage.color, Color.clear, flashSpeed * Time.deltaTime);
	}
	if(Input.GetKey(KeyCode.Tab)){
		bulletSplat.color = Color.Lerp(bulletSplat.color, Color.clear, 4.0f * Time.deltaTime);	
	}
	damaged = false;
}

function TakeDamage(amount: int){
	damaged = true;

	if(isBullet){
		bulletSplat.color = bulletColor;
	}

	currentHealth -= amount;
	healthSlider.value = currentHealth;

	playerAudio.Play();		// Got hit audio

	if(currentHealth <= 0 && !isDead){
		Death();
	}
}

function Death(){
	isDead = true;

	playerAudio.clip = deathClip;
	playerAudio.Play();

	movement.enabled = false;
	shooting.enabled = false;
}