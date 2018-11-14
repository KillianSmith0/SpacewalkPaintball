// Killian Smith
// 13501407
#pragma strict

// Movement speeds
var speed: float = 5;
var maxSpeed: float = 10;
var rotateVelocity: float = 2;
var flipVelocity: float = 2;
var cartVelocity: float = 2;

private var killAllRotation: KeyCode = KeyCode.Return;
private var rb: Rigidbody;
private var playerCamera: Camera;

static var currentSpeed: float;

function Start () {
	rb = GetComponent.<Rigidbody>();
	playerCamera = GetComponentInChildren.<Camera>();
}

function FixedUpdate () {
	currentSpeed = rb.velocity.magnitude;
	if(rb.velocity.magnitude > maxSpeed){
		rb.velocity = rb.velocity.normalized * maxSpeed;
	}

	if(Input.GetKey(KeyCode.X)){
		rb.AddForce(transform.forward * speed);			// Accelerate
	}

	if(Input.GetKey(KeyCode.A)){
		rb.AddTorque(-transform.up * rotateVelocity);	// LRotate
	}

	if(Input.GetKey(KeyCode.D)){
		rb.AddTorque(transform.up * rotateVelocity);	// RRotate
	}

	if(Input.GetKey(KeyCode.S)){
		rb.AddTorque(-transform.right * flipVelocity);	// BFlip
	}

	if(Input.GetKey(KeyCode.W)){
		rb.AddTorque(transform.right * flipVelocity);	// FFlip
	}

	if(Input.GetKey(KeyCode.K)){
		rb.AddTorque(-transform.forward * cartVelocity);	// RCartwheel 
	}

	if(Input.GetKey(KeyCode.J)){
		rb.AddTorque(transform.forward * cartVelocity);		// LCartwheel
	}

	if(Input.GetKey(killAllRotation)){
		rb.angularVelocity = Vector3.Slerp(rb.angularVelocity, Vector3.zero, 0.05);
	}

	if(Input.GetKey(KeyCode.Escape)){
		Application.LoadLevel(0);
	}
}
