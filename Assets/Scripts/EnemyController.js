// Killian Smith
// 13501407
#pragma strict

var range: float = 100f;

private var deathAudio: AudioSource;

private var player: Transform;		// Reference to players position.
private var playerHealth: HeroHealth;	

private var direction: Vector3;
private var rb: Rigidbody;			// Enemies rigidbody to move

function Awake(){
	deathAudio = GetComponent.<AudioSource>();
	player = GameObject.FindGameObjectWithTag("Player").transform;
	rb = GetComponent.<Rigidbody>();
}

function Update(){
	// Movement
	if(Vector3.Distance(player.position, this.transform.position) < range){
		var direction = player.position - this.transform.position;
		this.transform.rotation = Quaternion.Slerp(this.transform.rotation, Quaternion.LookRotation(direction), 0.1f);

		if(direction.magnitude > 10){
			if(GameController.scene.name.Contains("Easy")){
				this.transform.Translate(0,0,0.05f);
			}else{
				this.transform.Translate(0,0,0.2f);
			}

		}
	}
}