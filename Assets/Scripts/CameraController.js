#pragma strict

var target: GameObject;

private var offset: Vector3;

function Start () {
	offset = transform.position - target.transform.position;
}

function LateUpdate () { // every frame after everything has been rendered
	transform.position = target.transform.position + offset;
	transform.LookAt(target.transform);
//	transform.rotation = target.transform.rotation;
}
