// Killian Smith
// 13501407
#pragma strict

var heroHealth: HeroHealth;
var enemyHealth: EnemyHealth;

var restartDelay: float = 5f;

private var animator: Animator;
private var restartTimer: float;

function Awake () {
	animator = GetComponent.<Animator>();
}

function Update () {
	if(heroHealth.currentHealth <= 0 || enemyHealth.currentHealth <= 0){
		animator.SetTrigger("GameOver");

		restartTimer += Time.deltaTime;
	
        if(restartTimer >= restartDelay)
        {
            Application.LoadLevel(Application.loadedLevel);
        }
	}
}
