"use strict";
app.post("/api/create-user", function (req, res) {
    const { name, username, email, password } = req.body;
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            const user = new UserModel({
                name,
                username,
                email,
                password: hash,
                role: 'basic'
            });
            user
                .save()
                .then((data) => {
                res.json({ data });
            })
                .catch((err) => {
                res.status(501);
                res.json({ errors: err });
            });
        });
    });
});
app.post("/api/login", function (req, res) {
    const { username, password } = req.body;
    UserModel.findOne({ username }).then(user => {
        bcrypt.compare(password, `${user?.password}`, function (err, result) {
            if (result) {
                const accessToken = jwt.sign({ user }, access_secret);
                res.cookie('jwt', accessToken, {
                    httpOnly: true,
                    maxAge: 3600 * 1000,
                });
                res.json({ data: user });
            }
            else {
                res.sendStatus(502);
            }
        });
    });
});
//# sourceMappingURL=user-route.js.map