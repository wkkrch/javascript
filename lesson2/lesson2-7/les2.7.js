let time = 59;
if (time >= 0 && time <= 14) {
    console.log("Перша чверть години");
} else if (time >= 15 && time <= 29) {
    console.log("Друга чверть години");
} else if (time >= 30 && time <= 44) {
    console.log("Третя чверть години");
} else if (time >= 45 && time <= 59) {
    console.log("Четверта чверть години");
} else {
    console.log("Помилка: число повинно бути від 0 до 59");
}
