// Killian Smith
// 13501407
#pragma strict

var bulletSpan: int = 10;			// How long the bullet will travel for.

function Awake(){
	DestroyBullet();
}

function OnCollisionEnter(col: Collision){	

	if(gameObject.name.Contains("EnemyBullet")){
		if(col.collider.name.Contains("PlayerShip")){
			GameController.score -= 10;
		}
		else if(col.collider.name.Contains("PlayerShip")){
			GameController.enemyScore -= 10;
		}
	}

	if(gameObject.name.Contains("HeroBullet")){
		if(col.collider.name.Contains("Enemy")){
			var health = col.gameObject.GetComponent.<EnemyHealth>();
 			health.TakeDamage(10);
		}
		else if(col.collider.name.Contains("OtherShip")){
			GameController.score += 5;
		}
		else if(col.collider.name.Contains("PlayerShip")){
			GameController.score -= 10;
		}
	}
	Destroy(gameObject);
}

function DestroyBullet(){
	yield WaitForSeconds(bulletSpan);
	Destroy(gameObject);
}

