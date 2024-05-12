level = Math.floor((Math.random() * 100000000) + 1);


data = fetch(`https://gdbrowser.com/api/level/${level}`)

console.log(data)
