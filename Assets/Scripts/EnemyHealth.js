// Killian Smith
// 13501407
#pragma strict

var startingHealth: int = 100;
var currentHealth: int;
var scoreValue: int = 10;		//Score per hit.
var deathClip: AudioClip;		//Clip to play when enemy dies: "You win"
var healthSlider: Slider;

private var enemyAudio: AudioSource;
private var isDead: boolean;

function Awake () {
	enemyAudio = GetComponent.<AudioSource>();
	currentHealth = startingHealth;
}

function TakeDamage(amount: int){
	if(isDead){
		return;	// exit function, nothing to be done
	}
	enemyAudio.Play();

	currentHealth -= amount;
	healthSlider.value = currentHealth;

	GameController.score += scoreValue;

	if(currentHealth <= 0){
		Death();
	}
}

function Death() {
	isDead = true;

	enemyAudio.clip = deathClip;
	enemyAudio.Play();

	GameController.score += 30;	// Extra points for a kill
	GameController.enemyCount--;
	WaitForSeconds(5);
	gameObject.SetActive(false);
}

