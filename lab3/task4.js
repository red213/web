//task 4
function User(name) {
	this.name = name;
}

const me = new User('Rex');
// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат
		
User.prototype.getName = function(){
	return this.name;
}


console.log(me.getName()); // Rex