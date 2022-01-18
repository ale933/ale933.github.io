function n() {
    new Notification.requestPermission();
    new Notification("Hi", {body: "Wassup"});
}