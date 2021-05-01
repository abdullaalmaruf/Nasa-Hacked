for (var i = 1; i <= 100; i += 3) {
    (function (n) {
        setTimeout(function () {
            console.log(`Nasa Hacking ` + n + `%`)
        if(n === 100){
            console.log("Congratulations Nasa is now in your control");
            console.log("Nasa Hacked Successfully...")
        }
        }, 100 * n)
    })(i)
}

